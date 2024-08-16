import express from 'express'
import db from '#configs/mysql.js'
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    // 取出所有篩選條件的資料表
    const teaFilter = await handleFilterInfo('tea', 'tea_name') // 茶種
    const brandFilter = await handleFilterInfo('brand', 'brand_name') // 品牌
    const packageFilter = await handleFilterInfo(
      'package_category',
      'package_name'
    ) // 包裝方式
    const styleFilter = await handleFilterInfo('style', 'style_name') // 茶品型態

    const order = req.query.order || '1'
    const perpage = Number(req.query.perpage) || 12
    const page = Number(req.query.page) || 1
    // 每頁第一筆資料索引 = (現在頁數 - 1) * 每頁顯示資料數量 -> 索引是從0開始計算
    const start = (page - 1) * perpage
    const end = perpage * page
    const price = [req.query.price][0].split(',') || []
    const tea = [req.query.tea][0].split(',') || []
    const brand = [req.query.brand][0].split(',') || []
    const pc = [req.query.package][0].split(',') || []
    const style = [req.query.style][0].split(',') || []
    // console.log(tea, brand, pc, style)
    let product = {}
    let totalPage
    // console.log(teaFilter, brandFilter, packageFilter, styleFilter)
    // console.log(Array.isArray(price))
    let orderSql = '',
      priceSql = '',
      teaSql = '',
      brandSql = '',
      packageSql = '',
      styleSql = ''
    // 設定排序
    if (order === '1') {
      orderSql = ' ORDER BY price DESC'
    } else {
      orderSql = ' ORDER BY price ASC'
    }
    // 如果price不是空陣列 => 代表有勾選該篩選條件
    if (price[0] !== '') {
      if (price.includes('1') && price.includes('2') && price.includes('3')) {
        priceSql = ''
      } else if (price.includes('1') && price.includes('2')) {
        priceSql = ' price<=1000'
      } else if (price.includes('2') && price.includes('3')) {
        priceSql = ' price>500'
      } else if (price.includes('1') && price.includes('3')) {
        priceSql = ' (price<=500 OR price>1000)'
      } else if (price.includes('1')) {
        priceSql = ' price<=500'
      } else if (price.includes('2')) {
        priceSql = ' (price>500 && price<=1000)'
      } else if (price.includes('3')) {
        priceSql = ' price>1000'
      }
    }
    if (tea[0] !== '') {
      const teaConditions = tea.map((id) => `tea_id=${id}`).join(' || ')
      teaSql = teaConditions ? `(${teaConditions})` : ''
    }
    if (brand[0] !== '') {
      const brandConditions = brand.map((id) => `brand_id=${id}`).join(' || ')
      brandSql = brandConditions ? `(${brandConditions})` : ''
    }
    if (pc[0] !== '') {
      const pcConditions = pc.map((id) => `package_id=${id}`).join(' || ')
      packageSql = pcConditions ? `(${pcConditions})` : ''
    }
    if (style[0] !== '') {
      const styleConditions = style.map((id) => `style_id=${id}`).join(' || ')
      styleSql = styleConditions ? `(${styleConditions})` : ''
    }
    // 如果有篩選條件，開頭要加WHERE
    let whereSql =
      priceSql !== '' ||
      teaSql !== '' ||
      brandSql !== '' ||
      packageSql !== '' ||
      styleSql !== ''
        ? ' WHERE'
        : ''
    // allFilterSql 陣列將所有篩選條件字串塞進來
    let allFilterSql = []
    allFilterSql.push(priceSql, teaSql, brandSql, packageSql, styleSql)
    // 再透過filter去除掉空字串
    allFilterSql = allFilterSql.filter((p) => p !== '')
    // 再透過join方法將所有篩選條件用 && 串接起來成一個字串
    allFilterSql = allFilterSql.join(' && ')
    // 組合所有sql語句
    let queryCluse =
      'SELECT * FROM my_products' + whereSql + allFilterSql + orderSql
    // console.log(queryCluse)

    // 取出商品資料
    const [rows] = await db.query(queryCluse)
    const totalData = rows.length
    // 計算分頁資訊
    totalPage = Math.ceil(rows.length / perpage)
    // 商品資料為 全部資料用slice方法切割 第一頁為 (start(0), end(12))
    product.data = rows.slice(start, end)
    product.totalPage = totalPage
    product.teaFilter = teaFilter
    product.brandFilter = brandFilter
    product.packageFilter = packageFilter
    product.styleFilter = styleFilter
    product.totalData = totalData
    // console.log(product)
    return res.status(200).json({ status: 'success', product: product })
  } catch (error) {
    console.error('Error executing query', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

// 取得相關產品
router.get('/relation_product/:id', async (req, res) => {
  const currentProductID = Number(req.params.id)
  const product = await db.execute(
    `SELECT tea_id FROM my_products WHERE id = ?`,
    [currentProductID]
  )
  // console.log(product[0][0].tea_id)
  const { tea_id } = product[0][0]
  const [rows] = await db.execute(
    'SELECT id, product_name, price, paths FROM my_products WHERE tea_id = ?',
    [tea_id]
  )
  // 設定亂數取資料
  let randomNumber = []
  // 設定一個function產生隨機亂數
  function getRandom() {
    let tmp = Math.floor(Math.random() * rows.length)
    if (randomNumber.includes(tmp)) {
      getRandom()
    } else {
      randomNumber.push(tmp)
    }
    if (randomNumber.length < 6) {
      getRandom()
    }
    return randomNumber
  }
  getRandom()
  // 將隨機亂數陣列的值(v)當作rows的索引，再將rows[v]的物件值放到relation_product中，對應的索引(i)位置
  let relation_product = []
  randomNumber.map((v, i) => {
    relation_product[i] = rows[v]
  })
  // console.log(randomNumber)
  // console.log(relation_product)
  return res.json(relation_product)
})

router.get('/reviews/:id', async (req, res) => {
  const id = Number(req.params.id)
  const [rows] = await db.query(
    `SELECT id,comment, rating ,created_at FROM reviews WHERE product_id = ${id} ORDER BY created_at DESC`
  )
  // console.log(rows.length)
  // 設定各星級佔存
  let a = 0,
    b = 0,
    c = 0,
    d = 0,
    e = 0
  // 計算各星級數量
  rows.map((v, i) => {
    switch (v.rating) {
      case 1:
        a++
        break
      case 2:
        b++
        break
      case 3:
        c++
        break
      case 4:
        d++
        break
      case 5:
        e++
        break
    }
  })
  // 計算總星級數， toFixed(1) 取到小數點第一位(四捨五入)
  let allRating = (
    (a * 1 + b * 2 + c * 3 + d * 4 + e * 5) /
    rows.length
  ).toFixed(1)
  // 計算各星級 % 數
  const starArray = [
    Math.round((e / rows.length) * 100),
    Math.round((d / rows.length) * 100),
    Math.round((c / rows.length) * 100),
    Math.round((b / rows.length) * 100),
    Math.round((a / rows.length) * 100),
  ]
  const reviews = {}
  reviews.allData = rows
  reviews.someData = rows.slice(0, 3)
  reviews.eachRating = starArray
  reviews.allRating = allRating
  reviews.allLength = rows.length
  // console.log(reviews)
  return res.json(reviews)
})
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const [rows] = await db.query(
    `SELECT my_products.id AS product_id, product_name, description, price, tea.name AS tea_name, brand.name AS brand_name, package_category.name AS pc_name, style.name AS style_name FROM my_products
    JOIN tea ON tea.id = my_products.tea_id 
    JOIN brand ON brand.id = my_products.brand_id 
    JOIN package_category ON package_category.id = my_products.package_id 
    JOIN style ON style.id = my_products.style_id 
    WHERE my_products.id = ${id}
    `
  )
  const [imageRows] = await db.query(
    `SELECT path FROM product_images JOIN my_products ON my_products.id = product_images.product_id WHERE product_images.product_id = ${id}`
  )
  let image = []
  imageRows.map((v, i) => {
    image.push(v.path)
    return image
  })
  // console.log(image)
  const product = { data: rows, images: image }
  return res.json(product)
})

// 取篩選資料的函式
async function handleFilterInfo(filter = '', name = '') {
  const [rows] = await db.query(`SELECT id, name as ${name} FROM ${filter}`)
  return rows
}

export default router
