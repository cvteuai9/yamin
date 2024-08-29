import express from 'express'
import db from '#configs/mysql.js'
// import Yamin_order from '##/models/Yamin_order.js'
const router = express.Router()
import { Op, UUIDV4 } from 'sequelize'
import sequelize from '#configs/db.js'
import moment from 'moment'
import authenticate from '../middlewares/authenticate.js'
import { v4 as uuidv4 } from 'uuid'
// import { result } from 'lodash'
const { YaminOrder, YaminOrderDetail } = sequelize.models

// line pay使用npm套件
import { createLinePayClient } from 'line-pay-merchant'
// 存取`.env`設定檔案使用
import 'dotenv/config.js'

router.use(express.json())
router.get('/', async (req, res) => {
  try {
    let getOrderDetailsSQL = `SELECT * FROM YaminOrder`
    const getOrderDetail = await db.query(getOrderDetailsSQL)
    console.log(getOrderDetail[0])
    res.json(getOrderDetail[0])
  } catch (err) {
    console.log(err)
  }
})

export default router
