import express from 'express'
import cors from 'cors'
import multer from 'multer'
import moment from 'moment'
import jsonwebtoken from 'jsonwebtoken'
import authenticate from '#middlewares/authenticate.js'
import { v4 as uuidv4 } from 'uuid'
const router = express.Router()
// 解析 JSON 請求體
router.use(express.json())

// 資料庫使用直接使用 mysql 來查詢
import db from '#configs/mysql.js'

// 定義安全的私鑰字串
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET

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

// 檢查登入狀態用
// authenticate 中間件會在請求進入路由處理程序之前執行，用來確保用戶已經登入並且有權訪問該路由。
router.get('/check', authenticate, async (req, res) => {
  try {
    // 取得用戶ID
    const userId = parseInt(req.user.id)

    // 執行原生 SQL 查詢
    const [rows] = await db.query(
      'SELECT id, user_name, email,nick_name,phone,gender,birthday FROM users WHERE id = ?',
      [userId]
    )

    // 檢查是否找到使用者
    if (rows.length === 0) {
      return res
        .status(404)
        .json({ status: 'error', message: 'User not found' })
    }

    // 取得使用者資料
    const user = rows[0]

    // 回傳資料，不包含密碼
    return res.json({ status: 'success', data: { user } })
  } catch (error) {
    console.error(error)
    return res
      .status(500)
      .json({ status: 'error', message: 'Database query error' })
  }
})

router.post('/login', upload.none(), async (req, res) => {
  const [rows] = await db.query('SELECT * FROM users')
  const { email, password } = req.body

  const user = rows.find((u) => u.email === email && u.password === password)

  if (!user) {
    res.json({
      status: 'fail',
      message: '使用者帳號密碼錯誤',
    })
    return
  }
  // 存取令牌(access token)只需要id和username就足夠，其它資料可以再向資料庫查詢
  const returnUser = {
    id: user.id,
    username: user.username,
    google_uid: user.google_uid,
  }

  // 產生存取令牌(access token)，其中包含會員資料
  const accessToken = jsonwebtoken.sign(returnUser, accessTokenSecret, {
    expiresIn: '3d',
  })

  // 使用httpOnly cookie來讓瀏覽器端儲存access token
  res.cookie('accessToken', accessToken, { httpOnly: true })

  // 傳送access token回應(例如react可以儲存在state中使用)
  res.json({
    status: 'success',
    data: { accessToken },
  })
})
router.post('/logout', authenticate, (req, res) => {
  // 清除cookie
  res.clearCookie('accessToken', { httpOnly: true })
  res.json({ status: 'success', data: null })
})

export default router
