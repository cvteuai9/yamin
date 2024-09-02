import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'

// 内联 CSS 样式
const styles = {
  container: {
    position: 'relative',
    overflow: 'hidden',
    height: '100vh',
    background: '#f0f0f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    transform: 'translateY(-100%)',
    transition: 'transform 5s ease-in-out',
    // Ensure animation is applied
    animation: 'scrollDown 5s ease-in-out',
  },
  show: {
    transform: 'translateY(0)',
  },
}

// 内联 CSS 动画
const keyframes = `
@keyframes scrollDown {
  from {
    transform: translateY(-1000%);
  }
  to {
    transform: translateY(0);
  }
}`

const ScrollDownAnimation = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // 模拟客户端渲染后触发动画
    const timer = setTimeout(() => {
      setShow(true)
    }, 100) // 延迟100ms显示动画

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <style>{keyframes}</style> {/* 内联关键帧动画 */}
      <div style={styles.container}>
        <div style={{ ...styles.content, ...(show ? styles.show : {}) }}>
          <h1>欢迎来到我的页面!</h1>
          <p>这里有一个下拉动画效果。</p>
        </div>
      </div>
    </>
  )
}

const Test4 = () => (
  <div>
    <ScrollDownAnimation />
  </div>
)

export default Test4
