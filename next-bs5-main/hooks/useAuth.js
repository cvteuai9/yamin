import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

const useAuth = () => {
  const { setUser } = useContext(AuthContext)
  const { setToken } = useContext(AuthContext)

  // 提供給其他程式使用
  const login = async (email, password) => {
    let token, error
    const url = 'http://localhost:3005/api/my-users/login'
    // 模擬表單送出
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)

    token = await fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status === 'success') {
          result.token
        } else {
          throw new Error(result.message)
        }
        return result.token
      })
      .catch((err) => {
        error = err
        return undefined
      })
    // console.log(token)
    if (error) {
      alert(error.message)
      return
    }
    if (token) {
      setToken(token)
    }
  }
  const logout = () => {}

  // 這樣可以用解構賦值
  return { login, logout }
}

export default useAuth
