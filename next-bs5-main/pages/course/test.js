import { useState, useEffect } from 'react'

export default function Test() {
  // 初始值用空陣列，初次render是用初始值
  const [courses, setCourses] = useState([])

  //向伺服器fetch獲取資料
  const getCourses = async () => {
    const baseURL = 'http://localhost:3005/api/course'
    const res = await fetch(baseURL)
    const data = await res.json()

    console.log(data)

    setCourses(data)
  }

  //樣式2 didMount
  useEffect(() => {
    getCourses()
  }, [])

  return (
    <>
      <h1>Test</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.description}</li>
        ))}
        {courses.map((course) => (
          <li key={course.id}>{course.price}</li>
        ))}
      </ul>
    </>
  )
}
