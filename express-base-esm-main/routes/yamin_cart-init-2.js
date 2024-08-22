import express from 'express'
import db from '#configs/mysql.js'
// import Yamin_order from '##/models/Yamin_order.js'
const router = express.Router()
import { Op } from 'sequelize'
import sequelize from '#configs/db.js'
const { YaminOrder, YaminOrderDetail } = sequelize.models
/* GET home page. */
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
  const newOrder = req.body
  // console.log(newOrder)
  const testOrder = [...newOrder.allProductId]
  // console.log(testOrder)

  const orderQuery =
    'INSERT INTO YaminOrder (user_id, amount, total_price, username, email, phone, delivery, address, note, pay_state, cardnumber, cardholder, cardexpiry, cvc) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
  const [yamintest] = await db.query(
    orderQuery,
    [
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
  const testYamin = JSON.stringify(yamintest)
  console.log('12345', yamintest.insertId)
  if (yamintest.insertId) {
    const orderDetailQuery =
      'INSERT INTO YaminOrderDetail (order_id,course_id,product_id,quantity,price) VALUES(?,?,?,?,?)'
    const testorder = newOrder.allProductId.split(',')
    testorder.forEach((v) => {
      db.query(
        orderDetailQuery,
        [yamintest.insertId, '', v, newOrder.amount, newOrder.totalPrice],
        (err, resultDetails) => {
          if (err) {
            console.log(err)
            res.json({ err })
          }
          if (resultDetails) {
            res.json({ resultDetails })
          }
        }
      )
    })
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
})

export default router
