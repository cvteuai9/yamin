import express from 'express'
import db from '#configs/mysql.js'
import authenticate from '../middlewares/authenticate.js'

const router = express.Router()

// GET /coupons 獲取特定用戶的所有優惠券
router.get('/', authenticate, async (req, res) => {
  const userId = Number(req.user.id)
  try {
    const [coupons] = await db.query(
      `
      SELECT uc.user_id, uc.status AS user_status , c.*
      FROM users_coupons AS uc
      LEFT JOIN coupons AS c ON c.id = uc.coupon_id
      WHERE uc.user_id = ?
      `,
      [userId]
    )
    res.json(coupons)
  } catch (error) {
    console.error('Error fetching user coupons:', error)
    res.status(500).json({ error: 'Failed to retrieve user coupons' })
  }
})

// POST /coupons - 為用戶添加優惠券
router.post('/', authenticate, async (req, res) => {
  const { couponCode } = req.body
  const userId = Number(req.user.id)
  if (!userId || !couponCode) {
    return res.status(400).json({ error: 'ERROR_INPUT' })
  }

  try {
    // 首先檢查是否已經領過
    const [claimed] = await db.query(
      `
      SELECT 1
            FROM users_coupons AS uc
            LEFT JOIN coupons AS c
            ON uc.coupon_id = c.id
            WHERE uc.user_id = ?
            AND c.code = ? 
            AND c.code IS NOT NULL
      `,
      [userId, couponCode]
    )
    if (claimed.length > 0) {
      return res.status(404).json({ error: 'COUPON_ALREADY_CLAIMED' })
    }

    // 首先檢查優惠券是否存在
    const [coupons] = await db.query(
      `
        SELECT id
            FROM coupons
            WHERE code = ?
        `,
      [couponCode]
    )

    if (coupons.length === 0) {
      return res.status(404).json({ error: 'COUPON_NOT_FOUND' })
    }

    // 首先檢查優惠券是否過期
    const [expired] = await db.query(
      `
        SELECT id
            FROM coupons
            WHERE code = ?
            AND status = 'expired'
        `,
      [couponCode]
    )

    if (expired.length === 1) {
      return res.status(404).json({ error: 'COUPON_EXPIRED' })
    }

    const couponId = coupons[0].id

    // 寫入DB
    const [result] = await db.query(
      `
      INSERT INTO users_coupons (user_id, coupon_id) VALUE(?, ?)
      `,
      [userId, couponId]
    )

    res.status(201).json({
      id: result.insertId,
      user_id: userId,
      coupon_id: couponId,
      coupon_code: couponCode,
    })
  } catch (error) {
    console.error('Error creating user coupon:', error)
    res.status(500).json({ error: 'Failed to create user coupon' })
  }
})

export default router
