import React, { useState } from 'react'

function CourseSelection() {
  // 定義圖片列表，分別對應不同課程的顯示圖片
  const courseData = [
    {
      title: '茶文化與歷史課程 1',
      image: '/images/yaming/index/Union.png', // 替換為你的圖片地址
    },
    {
      title: '茶文化與歷史課程 2',
      image: '/images/yaming/index/Union2.png',
    },
    {
      title: '茶文化與歷史課程 3',
      image: '/images/yaming/index/Union3.png',
    },
    {
      title: '茶文化與歷史課程 4',
      image: '/images/yaming/index/Union4.png',
    },
    {
      title: '茶文化與歷史課程 5',
      image: '/images/yaming/index/Union5.png',
    },
  ]

  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0) // 初始選中第一個課程

  return (
    <div style={styles.container}>
      {/* 左側選項區域 */}
      <div style={styles.leftPane}>
        {courseData.map((course, index) => (
          <button
            key={index}
            style={styles.optionButton}
            onClick={() => setSelectedCourseIndex(index)} // 當點擊選項時，切換當前選中課程
          >
            {course.title}
          </button>
        ))}
      </div>

      {/* 右側圖片顯示區域 */}
      <div style={styles.rightPane}>
        <img
          src={courseData[selectedCourseIndex].image}
          alt={courseData[selectedCourseIndex].title}
          style={styles.image}
        />
        <h5>{courseData[selectedCourseIndex].title}</h5>
      </div>
    </div>
  )
}

// 樣式
const styles = {
  container: {
    display: 'flex',
    width: '100%',
    height: '100vh',
  },
  leftPane: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    border: 'none',
  },
  optionButton: {
    width: '80%',
    padding: '15px',
    margin: '3px 0',
    cursor: 'pointer',
    fontSize: '18px',
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
  },
  rightPane: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    maxWidth: '80%',
    maxHeight: '80%',
  },
  // 添加媒體查詢來隱藏右側圖片區域
  '@media (min-width: 768px)': {
    rightPane: {
      display: 'none', // 小於 768px 時隱藏右側區域
    },
    leftPane: {
      width: '100%', // 小於 768px 時左側區域佔滿全寬
    },
  },
}

export default CourseSelection
