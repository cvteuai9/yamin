import express from 'express'
// 引入 Express 框架，用來構建後端應用。

const app = express()
// 創建一個 Express 應用實例，命名為 app。

const router = express.Router()
// 創建一個新的 Express 路由實例，命名為 router。

import sequelize from '#configs/db.js'
// 引入 Sequelize ORM 的實例，用來與資料庫進行交互。

const { Course } = sequelize.models
// 從 Sequelize 實例中解構出 Course 模型，用來操作課程數據表。

/* 
  這段代碼主要要做什麼
  這段代碼是定義並導出一個 Express 路由，用來提供課程的 API 接口。
  主要包括兩個 API：一個是獲取課程列表，支持排序、分類、地點篩選和分頁；
  另一個是根據課程 ID 獲取單個課程的詳細資訊。
*/

// [課程列表 API] 定義標題

// 课程列表 API，支持排序、分类、位置筛选以及分页
router.get('/', async function (req, res) {
  // 定義一個 GET 請求的路由，用於獲取課程列表。

  try {
    const { sort, page = 1, limit = 6, categoryId, locationId } = req.query
    // 從請求的查詢參數中解構出排序方式、頁碼、每頁顯示數量、分類 ID 和地點 ID，並設置默認值。

    const order = sort === 'asc' ? ['price', 'ASC'] : ['price', 'DESC']
    // 根據 sort 參數決定排序方式，默認根據價格升序或降序排序。

    const offset = (page - 1) * limit
    // 計算資料庫查詢的偏移量，用於分頁。

    console.log(categoryId, locationId)
    // 輸出當前的分類 ID 和地點 ID 到控制台，主要用於調試。

    const whereConditions = {}
    // 定義一個空對象用來存儲篩選條件。

    if (categoryId) {
      // 如果查詢參數中包含分類 ID，就將其加入篩選條件中。
      whereConditions.category_id = Number(categoryId)
      // 將 categoryId 轉換為數字後存入篩選條件對象中。
    }

    if (locationId) {
      // 如果查詢參數中包含地點 ID，就將其加入篩選條件中。
      whereConditions.location = locationId
      // 將地點 ID 存入篩選條件對象中。
    }

    // 查询课程并支持分页
    const { count, rows } = await Course.findAndCountAll({
      // 使用 Sequelize 的 findAndCountAll 方法查詢符合條件的課程數據，同時支持分頁。

      where: whereConditions,
      // 根據前面定義的篩選條件進行查詢。

      order: [order],
      // 根據前面定義的排序方式進行排序。

      limit: parseInt(limit, 10),
      // 將每頁顯示的課程數量轉換為整數後應用到查詢中。

      offset: parseInt(offset, 10),
      // 將計算出的偏移量轉換為整數後應用到查詢中。

      logging: console.log,
      // 啟用 Sequelize 的日誌功能，將查詢日誌輸出到控制台。
    })

    if (rows.length === 0) {
      // 如果查詢結果為空，即沒有找到符合條件的課程。
      return res.status(404).json({ message: 'No courses found' })
      // 返回 404 狀態碼，並附上錯誤訊息 "No courses found"。
    }

    return res.json({
      // 如果找到符合條件的課程，將數據以 JSON 格式返回給前端。

      courses: rows,
      // 返回查詢到的課程列表。

      totalPages: Math.ceil(count / limit),
      // 返回總頁數，計算方式為課程總數除以每頁顯示數量，並向上取整。

      currentPage: parseInt(page, 10),
      // 返回當前頁碼，將頁碼轉換為整數。

      totalCourses: count,
      // 返回符合條件的課程總數。
    })
  } catch (error) {
    // 捕獲查詢過程中發生的任何錯誤。

    console.error('Error fetching courses:', error)
    // 將錯誤訊息輸出到控制台，便於調試。

    return res.status(500).json({ message: 'Internal Server Error' })
    // 返回 500 狀態碼，並附上錯誤訊息 "Internal Server Error"。
  }
})

// 單個課程的API
router.get('/:id', async function (req, res) {
  const id = Number(req.params.id)
  if (isNaN(id)) {
    return res.status(400).json({ message: 'Invalid course ID' })
  }

  try {
    const course = await Course.findByPk(id, { raw: true })
    if (!course) {
      return res.status(404).json({ message: 'Course not found' })
    }
    return res.json(course)
  } catch (error) {
    console.error('Error fetching course:', error)
    return res.status(500).json({ message: 'Internal Server Error' })
  }
})

export default router

app.use('/api/course', router)
