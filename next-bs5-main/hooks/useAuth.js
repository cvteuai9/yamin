import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

const useAuth = () => {
  const { setUser } = useContext(AuthContext)
  const { token, setToken } = useContext(AuthContext)

  // 提供給其他程式使用
  const login = async (email, password) => {
    let newToken, error
    const url = 'http://localhost:3005/api/my-users/login'
    // 模擬表單送出
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)

    newToken = await fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status === 'success') {
          return result.token
        } else {
          throw new Error(result.message)
        }
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
    if (newToken) {
      setToken(newToken)
      localStorage.setItem('nextNeToken', newToken)
    }
  }
  const logout = async () => {
    let newToken, error
    const url = 'http://localhost:3005/api/my-users/logout'
    newToken = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status === 'success') {
          return result.token
        } else {
          throw new Error(result.message)
        }
      })
      .catch((err) => {
        error = err
        return undefined
      })
    if (error) {
      alert(error.message)
      return
    }
    if (newToken) {
      setToken(newToken)
      localStorage.setItem('nextNeToken', newToken)
    }
    // setUser(undefined)
  }

  // 這樣可以用解構賦值
  return { login, logout }
}

export default useAuth
