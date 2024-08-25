import React, { useState, useEffect } from 'react'
import axios from 'axios'
import categories from '@/data/course-data/category.json'
import location from '@/data/course-data/location.json'

const baseURL = 'http://localhost:3005/api/course'

const ActivityPage = () => {
  const [activities, setActivities] = useState([]) // 存放活動列表
  const [showForm, setShowForm] = useState(false) // 控制表單顯示
  const [editingActivity, setEditingActivity] = useState(null) // 正在編輯的活動
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    location: '',
    price: 0,
    start_time: '',
    end_time: '',
    limit_people: 0,
    description: '',
    category_id: '',
    current_number: 0,
    valid: 1,
  }) // 表單資料
  const [previewImages, setPreviewImages] = useState([]) // 圖片預覽
  const [currentPage, setCurrentPage] = useState(1) // 當前頁碼
  const [totalPages, setTotalPages] = useState(1) // 總頁數
  const [sortOrder, setSortOrder] = useState('ASC') // 排序順序
  const itemsPerPage = 6 // 每頁顯示的項目數量

  useEffect(() => {
    fetchActivities()
  }, [currentPage, sortOrder])

  const fetchActivities = async () => {
    try {
      const response = await axios.get(`${baseURL}`, {
        params: {
          page: currentPage,
          limit: itemsPerPage,
          sort: sortOrder,
        },
      })
      setActivities(response.data.courses)
      setTotalPages(response.data.totalPages)
    } catch (error) {
      console.error('Error fetching activities:', error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleImageChange = (e, index) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImages((prevImages) => {
          const newImages = [...prevImages]
          newImages[index] = reader.result
          return newImages
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const data = {
        name: formData.name,
        location: formData.location,
        price: formData.price,
        start_time: formData.start_time,
        end_time: formData.end_time,
        limit_people: formData.limit_people,
        description: formData.description,
        category_id: formData.category_id,
        current_number: formData.current_number,
        valid: formData.valid,
      }

      if (editingActivity) {
        await axios.put(`${baseURL}/${editingActivity.id}`, data)
      } else {
        await axios.post(`${baseURL}`, data)
      }

      resetForm()
      fetchActivities()
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const handleEdit = (activity) => {
    setEditingActivity(activity)
    setFormData({
      id: activity.id,
      name: activity.name,
      location: activity.location,
      price: activity.price,
      start_time: activity.start_time,
      end_time: activity.end_time,
      limit_people: activity.limit_people,
      description: activity.description,
      category_id: activity.category_id,
      current_number: activity.current_number,
      valid: activity.valid,
    })
    setShowForm(true)
  }

  const resetForm = () => {
    setFormData({
      id: '',
      name: '',
      location: '',
      price: 0,
      start_time: '',
      end_time: '',
      limit_people: 0,
      description: '',
      category_id: '',
      current_number: 0,
      valid: 1,
    })
    setShowForm(false)
    setEditingActivity(null)
  }

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage)
    }
  }

  const handleSortById = () => {
    setSortOrder(sortOrder === 'ASC' ? 'DESC' : 'ASC')
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseURL}/${id}`)
      fetchActivities()
    } catch (error) {
      console.error('Error deleting activity:', error)
    }
  }

  const getCategoryName = (id) => {
    const category = categories.find((cat) => cat.id === id)
    return category ? category.name : 'Unknown'
  }

  const getLocationName = (id) => {
    const loc = location.find((loc) => loc.id === id)
    return loc ? loc.name.trim() : 'Unknown'
  }

  return (
    <div className="container">
      <div className="course_background_body">
        <div className="d-flex justify-content-end">
          <button
            onClick={() => {
              resetForm()
              setShowForm(true)
            }}
          >
            新增活動
          </button>
        </div>
        {showForm && (
          <div className="modal">
            <div className="modal-content">
              <button className="close-button" onClick={resetForm}>
                ×
              </button>
              <form onSubmit={handleSubmit}>
                <h2>{editingActivity ? '編輯活動' : '新增活動'}</h2>
                <div className="form-section">
                  <label>活動標題</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label>活動地點</label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  >
                    <option value="">選擇地點</option>
                    {location.map((loc) => (
                      <option key={loc.id} value={loc.id}>
                        {loc.name.trim()}
                      </option>
                    ))}
                  </select>

                  <label>費用</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                  />

                  <label>活動日期</label>
                  <input
                    type="date"
                    name="start_time"
                    value={formData.start_time}
                    onChange={handleChange}
                  />
                  <input
                    type="date"
                    name="end_time"
                    value={formData.end_time}
                    onChange={handleChange}
                  />

                  <label>類別</label>
                  <select
                    name="category_id"
                    value={formData.category_id}
                    onChange={handleChange}
                  >
                    <option value="">選擇類別</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="course_background_form-section course_background_flex-row">
                  <div className="form-item">
                    <label>報名人數</label>
                    <input
                      type="number"
                      name="limit_people"
                      value={formData.limit_people}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-item">
                    <label>活動簡介</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="course_background_image-preview ">
                  {[0, 1, 2].map((index) => (
                    <div key={index} className="image-container">
                      {previewImages[index] && (
                        <img
                          src={previewImages[index]}
                          alt={`preview ${index + 1}`}
                        />
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, index)}
                      />
                    </div>
                  ))}
                </div>

                <button type="submit" className="course_background_submit">
                  提交
                </button>
                <button
                  type="button"
                  className="course_background_cancel"
                  onClick={resetForm}
                >
                  取消
                </button>
              </form>
            </div>
          </div>
        )}

        <table className="course_background_table">
          <thead>
            <tr>
              <th onClick={handleSortById} style={{ cursor: 'pointer' }}>
                編號 {sortOrder === 'ASC' ? '↑' : '↓'}
              </th>
              <th>標題</th>
              <th>類別</th>
              <th>地點</th>
              <th>費用</th>
              <th>活動日期</th>
              <th>報名人數</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.id}>
                <td>{activity.id}</td>
                <td>{activity.name}</td>
                <td>{getCategoryName(activity.category_id)}</td>
                <td>{activity.location}</td>
                <td>{activity.price}</td>
                <td>
                  {activity.start_time} - {activity.end_time}
                </td>
                <td>{activity.limit_people}</td>
                <td>
                  <button
                    className="course_background_edit"
                    onClick={() => handleEdit(activity)}
                  >
                    編輯
                  </button>
                  <button
                    className="course_background_delete"
                    onClick={() => handleDelete(activity.id)}
                  >
                    刪除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="course_background_page container">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            上一頁
          </button>
          <span className="course_background_number">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            下一頁
          </button>
        </div>
      </div>
    </div>
  )
}

export default ActivityPage
