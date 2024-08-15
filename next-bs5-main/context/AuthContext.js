import react, { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import jwt, { decode } from 'jsonwebtoken'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(undefined)
  const [user, setUser] = useState(undefined)

  const router = useRouter()
  const loginRouter = '/member/login'

  const protectedRouter = ['/'] // 需要驗證的頁面

  useEffect(() => {
    if (!user) {
      //user是否存在
      if (protectedRouter.includes(router.pathname)) {
        //當前路徑是否受保護
        router.push(loginRouter) //導頁
      }
    } else {
      router.push('/')
    }
  }, [router.isReady, router.pathname, user])

  useEffect(() => {
    // 立即執行函數
    ;(async () => {
      if (token) {
        const result = await checkToken(token)
        console.log(result)
        if (result.email) {
          setUser(result)
        } else {
          setUser(undefined)
        }
      }
    })()
  }, [token])

  // useEffect不能下await , 所以用()()立即執行函數
  useEffect(() => {
    const oldToken = localStorage.getItem('nextNeToken')
    console.log(oldToken)
    ;(async () => {
      if (oldToken) {
        let newToken, error
        const url = 'http://localhost:3005/api/my-users/status'
        newToken = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${oldToken}`,
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
      }
    })()
  }, [])

  const checkToken = async (token) => {
    const secretKey = 'thisisverstrongaccesstokensecre'
    let decoded
    try {
      decoded = await new Promise((resolve, reject) => {
        console.log(token)
        jwt.verify(token, secretKey, (error, data) => {
          if (error) {
            return reject(error)
          }
          resolve(data)
        })
      })
    } catch (err) {
      console.log(err)
      decoded = {}
    }

    return decoded
  }

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  )
}
