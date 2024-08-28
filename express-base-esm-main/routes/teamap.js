import express from 'express'
import db from '#configs/mysql.js'
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const type = req.query.type || 'teaHouse'
    let queryCluse = ``
    switch (type) {
      case 'teaFactory':
        queryCluse = `SELECT * FROM gmap_tea_factory`
        break
      case 'teaHouse':
        queryCluse = `SELECT * FROM gmap_tea_house`
        break
      default:
        queryCluse = `SELECT * FROM gmap_tea_house`
        break
    }
    const [rows] = await db.query(queryCluse)
    let mapData = rows.map((v) => {
      if (v.opening_hours !== '(無提供)') {
        const testString = v.opening_hours
        let splitArray = testString.split('星期')
        // console.log('splitArray: ', splitArray)
        let filterArray = splitArray.filter((v) => v !== '')
        // console.log('filterArray: ', filterArray)
        let notfinalArray = filterArray.map((v) => v.split(','))
        // console.log('notfinalArray: ', notfinalArray)
        let finalArray = notfinalArray.map((v) => v.filter((x) => x !== ''))
        // console.log('finalArray: ', finalArray)
        let lastArray = finalArray.map((v) => v.join(','))
        // console.log('last: ', lastArray)
        return { ...v, opening_hours: lastArray }
      } else {
        return v
      }
    })

    res.status(200).json(mapData)
  } catch (error) {
    console.log(error)
    res.status(404).json({ error: 'Not Found' })
  }
})

export default router
