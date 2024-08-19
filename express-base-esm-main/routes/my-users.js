import express from 'express'
import cors from 'cors'
import multer from 'multer'
import moment from 'moment'
import jwt from 'jsonwebtoken'
import authenticate from '#middlewares/authenticate.js'
import { v4 as uuidv4 } from 'uuid'

const router = express.Router()

// 解析 JSON 請求體
router.use(express.json())

// 資料庫使用直接使用 mysql 來查詢
import db from '#configs/mysql.js'

// 定義安全的私鑰字串
const secretKey = process.env.ACCESS_TOKEN_SECRET

// const blackList = []
const upload = multer()

// 設定部份
let whitelist = ['http://localhost:5500', 'http://localhost:3000']
let corsOptions = {
  credentials: true,
  origin(origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}

router.use(cors(corsOptions))

router.get('/', async function (req, res) {
  const [rows] = await db.query('SELECT * FROM users')

  // map不回傳就跟foreach一樣
  const users = rows.map((u) => {
    // 不需要 .data 是因為資料已經是從資料庫直接取得的，而不是從本地的物件資料結構中讀取的。
    // 只有psw不要 => 剩餘參數
    const { password, ...others } = u
    return others
  })
  if (!users) {
    return res.status(404).json({
      status: 'fail',
      message: '找不到使用者',
    })
  }
  res.status(200).json({
    status: 'success',
    message: '獲取所有使用者成功',
    users,
  })
  // return res.json({ status: 'success', data: { users } })
})

router.get('/search', async (req, res) => {
  const [users] = await db.query('SELECT * FROM users')
  const id = req.query.id //用於獲取查詢參數（Query Parameters）是URL中?之後的部分，它們通常用來過濾、排序或進行其他操作。
  let results = users.filter((u) => u.email.includes(id))
  if (!results) {
    res.status(404).json({
      status: 'fail',
      message: '找不到使用者',
    })
    return
  }
  res.status(200).json({
    status: 'success',
    message: '找到使用者',
    users: results,
  })
  // res.status(200).send("使用 ID 作為搜尋條件來搜尋使用者：" + id);
})

// 創uuid
// router.get('/push', async (req, res) => {
//   try {
//     // 查询 `member_id` 为空的记录
//     const [users] = await db.query(
//       'SELECT id FROM users WHERE member_id IS NULL OR member_id = ""'
//     )

//     // 为每条记录生成 UUID 并更新
//     for (const user of users) {
//       const member_id = uuidv4()

//       await db.query('UPDATE users SET member_id = ? WHERE id = ?', [
//         member_id,
//         user.id,
//       ])
//     }

//     console.log('UUIDs generated and updated for existing records.')
//   } catch (error) {
//     console.error('Error updating member_id:', error)
//   }
// })

router.get('/:id', authenticate, async (req, res) => {
  const [users] = await db.query('SELECT * FROM users')
  const id = parseInt(req.params.id) //路由參數使用方法
  let user = users.find((u) => u.id === id)
  // console.log(users)
  if (!user) {
    res.status(404).json({
      status: 'fail',
      message: '找不到使用者',
    })
    return
  }
  // res.status(200).json({
  //   status: 'success',
  //   message: '獲取使用者成功',
  //   user,
  // })
  return res.json({ status: 'success', data: { user } })
})

// 註冊，新增使用者
router.post('/', upload.none(), async (req, res) => {
  // 有安裝multer,就可以用upload.none()幫我們把表單的內容產生在req.body裡面
  // const [users] = await db.query('SELECT * FROM users')
  const { email, password, user_name } = req.body
  let member_id = uuidv4()
  await db.query(
    'INSERT INTO users (member_id, email, password, user_name) VALUES (?, ?, ?, ?)',
    [member_id, email, password, user_name]
  )
  res.status(201).json({
    status: 'success',
    message: '註冊成功',
    member_id,
  })
})

// 更新使用者
router.put('/:id', upload.none(), async (req, res) => {
  const [users] = await db.query('SELECT * FROM users')
  const id = parseInt(req.params.id)
  const { email, password, user_name } = req.body
  let user = users.find((u) => u.id === id)
  if (!user) {
    return res.status(404).json({
      status: 'fail',
      message: '找不到使用者',
    })
  }
  await db.query(
    'UPDATE users SET email = ?, password = ?, user_name = ? WHERE id = ?',
    [email, password, user_name, id]
  )
  return res.json({ status: 'success', data: { user } })
})

router.delete('/:id', async (req, res) => {
  const [users] = await db.query('SELECT * FROM users')
  const id = req.params.id
  let user = users.find((u) => u.member_id === id)
  if (!user) {
    return res.status(404).json({
      status: 'fail',
      message: '找不到使用者',
    })
  }
  await db.query('DELETE FROM users WHERE member_id = ?', [id])
  res.status(200).json({
    status: 'success',
    message: '刪除成功',
  })
})

function checkToken(req, res, next) {
  let token = req.get('Authorization')

  if (token && token.indexOf('Bearer ') === 0) {
    token = token.slice(7)
    // 開發中會用blackList測試
    // 類似session的做法
    // 不是很保險，因為伺服器重啟blackList就會消失
    // if (blackList.includes(token)) {
    //   return res.status(401).json({
    //     status: 'error',
    //     message: '登入驗證失效，請重新登入',
    //   })
    // }
    jwt.verify(token, secretKey, (error, decoded) => {
      if (error) {
        console.error('Token verification failed:', error.message)
        res.status(401).json({
          status: 'error',
          message: '登入驗證失效，請重新登入',
        })
        return
      }
      req.decoded = decoded // 有拿到資料就拿
      console.log('Decoded token:', req.decoded)
      next() //有中間鍵middleware可以繞出去
    })
  } else {
    res.status(401).json({
      status: 'error',
      message: '沒有驗證資料,請重新登入',
    })
  }
}

export default router
