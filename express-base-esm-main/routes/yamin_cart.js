import express from 'express'
import db from '#configs/mysql.js'
// import Yamin_order from '##/models/Yamin_order.js'
const router = express.Router()
import { Op, UUIDV4 } from 'sequelize'
import sequelize from '#configs/db.js'
import moment from 'moment'
// import { result } from 'lodash'
const { YaminOrder, YaminOrderDetail } = sequelize.models
/* GET home page. */
router.use(express.json())
router.post('/', async (req, res) => {
  // const [user, created] = await User.findOrCreate({
  //   where: {
  //     [Op.or]: [{ username: newUser.username }, { email: newUser.email }],
  //   },
  //   defaults: {
  //     name: newUser.name,
  //     password: newUser.password,
  //     username: newUser.username,
  //     email: newUser.email,
  //   },
  // })
  const today = moment().format()
  // const uuid = shortUUID()
  // const shortCode = uuid.new()
  const newOrder = req.body
  // const resultOrder = newOrder.allProductId.
  console.log(newOrder)
  const testOrder = [...newOrder.allProductId]
  // console.log(testOrder)
  const ArrayProductOrderData = JSON.parse(req.body.allProductId)
  const ArrayCourseOrderData = JSON.parse(req.body.allCourseId)
  console.log('1140看', ArrayCourseOrderData)
  const orderQuery =
    'INSERT INTO YaminOrder (state,order_uuid, user_id, amount, total_price, username, email, phone, delivery, address, note, pay_state, cardnumber, cardholder, cardexpiry, cvc,created_at,updated_at) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
  const [yamintest] = await db.query(
    orderQuery,
    [
      newOrder.state,
      getRandomCode(),
      newOrder.userId,
      newOrder.amount,
      newOrder.totalPrice,
      newOrder.username,
      newOrder.email,
      newOrder.phone,
      newOrder.delivery,
      newOrder.address,
      newOrder.note,
      newOrder.payState,
      newOrder.cardnumber,
      newOrder.cardholder,
      newOrder.cardexpiry,
      newOrder.cvc,
      today,
      today,
    ],
    (err, results) => {
      if (err) {
        console.log('1234', err)
        res.json({ err })
        return false
      }
      if (results.insertId) {
        console.log('12345', results)
        res.json({ results })
        console.log('現在要看', results.insertId)
      }
    }
  )
  // const testYamin = JSON.stringify(yamintest)
  console.log('12345', yamintest.insertId)
  if (yamintest.insertId) {
    const orderProductDetailQuery =
      'INSERT INTO YaminProductDetail (order_id,product_id,product_image,product_name,product_unitprice,product_quantity,product_totalprice,created_at,updated_at) VALUES(?,?,?,?,?,?,?,?,?)'

    const orderCourseDetailQuery =
      'INSERT INTO YaminCourseDetail (order_id,course_id,course_image,course_name,course_unitprice,course_quantity,course_totalprice,created_at,updated_at) VALUES(?,?,?,?,?,?,?,?,?)'
    if (ArrayProductOrderData) {
      ArrayProductOrderData.forEach((v) => {
        db.query(
          orderProductDetailQuery,
          [
            yamintest.insertId,
            v.product_id,
            v.product_image,
            v.product_name,
            v.product_unitprice,
            v.product_qty,
            v.product_totalprice,
            today,
            today,
          ],
          (err, resultProductDetails) => {
            if (err) {
              console.log(err)
              res.json({ err })
            }
            if (resultProductDetails) {
              res.json({ resultProductDetails })
            }
          }
        )
      })
    }
    if (ArrayCourseOrderData) {
      ArrayCourseOrderData.forEach((v) => {
        db.query(
          orderCourseDetailQuery,
          [
            yamintest.insertId,
            v.course_id,
            v.course_image,
            v.course_name,
            v.course_unitprice,
            v.course_quantity,
            v.course_totalprice,
            today,
            today,
          ],
          (err, resultCourseDetails) => {
            if (err) {
              console.log(err)
              res.json({ err })
            }
            if (resultCourseDetails) {
              res.json({ resultCourseDetails })
            }
          }
        )
      })
    }
    // 最一開始的新增資料
    // const testorder = newOrder.allProductId.split(',')
    // console.log('0822看', testorder)
    // testorder.forEach((v) => {
    //   db.query(
    //     orderProductDetailQuery,
    //     [yamintest.insertId, '', v, today, today],
    //     (err, resultDetails) => {
    //       if (err) {
    //         console.log(err)
    //         res.json({ err })
    //       }
    //       if (resultDetails) {
    //         res.json({ resultDetails })
    //       }
    //     }
    //   )
    // })
  }
  // 老師的寫法套用在我的訂單上
  // const [user, created] = await YaminOrder.findOrCreate({
  //   where: {
  //     [Op.or]: [
  //       // { username: newOrder.username },
  //       { email: newOrder.email },
  //       { username: newOrder.username },
  //     ],
  //   },
  //   defaults: {
  //     user_id: '',
  //     amount: newOrder.amount,
  //     total_price: newOrder.totalPrice,
  //     username: newOrder.username,
  //     email: newOrder.email,
  //     phone: newOrder.phone,
  //     delivery: newOrder.delivery,
  //     address: newOrder.address,
  //     note: newOrder.note,
  //     pay_state: newOrder.payState,
  //     cardnumber: newOrder.cardnumber,
  //     cardholder: newOrder.cardholder,
  //     cardexpiry: newOrder.cardexpiry,
  //     cvc: newOrder.cvc,
  //   },
  // })

  // if (!created) {
  //   return res.json({ status: 'error', message: '建立會員失敗' })
  // }

  // 成功建立會員的回應
  // 狀態`201`是建立資料的標準回應，
  // 如有必要可以加上`Location`會員建立的uri在回應標頭中，或是回應剛建立的資料
  // res.location(`/users/${user.id}`)
  // return res.status(201).json({
  //   status: 'success',
  //   data: null,
  // })

  function getRandomCode(length = 11) {
    const min = Math.pow(10, length - 1)
    const max = Math.pow(10, length) - 1
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
})

// router.post('/', async (req, res) => {})
router.get('/getOrder', async (req, res) => {
  const searchOrderDetail = 'SE'
})
export default router
