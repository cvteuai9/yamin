import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

const useAuth = () => {
  const { token, setToken } = useContext(AuthContext)

  // 提供給其他程式使用
  const login = async (email, password) => {
    try {
      const url = 'http://localhost:3005/api/my-users/login'
      const formData = new FormData()
      formData.append('email', email)
      formData.append('password', password)

      const response = await fetch(url, {
        method: 'POST',
        credentials: 'include',
        body: formData,
      })
      const result = await response.json()

      if (result.status === 'success') {
        setToken(result.token)
        localStorage.setItem('nextNeToken', result.token)
        return result.user_name // 返回 user_name
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      alert(error.message)
      return null
    }
  }
  const logout = async () => {
    let newToken, error
    const url = 'http://localhost:3005/api/my-users/logout'
    newToken = await fetch(url, {
      method: 'GET',
      credentials: 'include',
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
