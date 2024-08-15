import express from 'express'
const router = express.Router()

import sequelize from '#configs/db.js'
const { Course } = sequelize.models

router.get('/', async function (req, res) {
  const course = await Course.findAll({ logging: console.log })
  // 處理如果沒找到資料

  // 標準回傳JSON
  return res.json(course)
})

router.get('/:id', async function (req, res) {
  // 轉為數字
  const id = Number(req.params.id)

  const course = await Course.findByPk(id, {
    raw: true, // 只需要資料表中資料
  })

  return res.json(course)
})

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'course' })
// })

export default router
