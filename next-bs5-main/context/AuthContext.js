import react, { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import jwt from 'jsonwebtoken'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(undefined)
  const [user, setUser] = useState(undefined)

  const router = useRouter()
  const loginRouter = '/member/login'

  const protectedRouter = [
    '/',
    '/product/cart',
    // '/member/profile',
    // '/member/changeps',
    // '/member/order',
    // '/member/order/info',
    // '/member/coupon',
    // '/member/order/review',
    // '/member/fav/',
  ] // 需要驗證的頁面

  // 要怎麼讓頁面不會先跳出錯誤
  useEffect(() => {
    //user是否存在
    if (router.isReady) {
      if (
        user &&
        (router.pathname === '/member/register' ||
          router.pathname === '/member/login')
      ) {
        router.push('/')
      } else if (!user && protectedRouter.includes(router.pathname)) {
        router.push(loginRouter)
      }
    }
  }, [router.isReady, router.pathname, user])

  useEffect(() => {
    // 立即執行函數
    ;(async () => {
      if (token) {
        const result = await checkToken(token)
        // console.log(result)
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
    if (oldToken && !token) {
      ;(async () => {
        try {
          const url = 'http://localhost:3005/api/my-users/status'
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${oldToken}`,
            },
          })
          const result = await response.json()
          if (result.status === 'success') {
            setToken(result.token)
            localStorage.setItem('nextNeToken', result.token)
          } else {
            throw new Error(result.message)
          }
        } catch (error) {
          // setAuthError(error.message)
          localStorage.removeItem('nextNeToken')
        }
      })()
    }
  }, [])

  const checkToken = async (token) => {
    const secretKey = 'thisisverstrongaccesstokensecre'
    let decoded
    try {
      decoded = await new Promise((resolve, reject) => {
        // console.log(token)
        jwt.verify(token, secretKey, (error, data) => {
          if (error) {
            return reject(error)
          }
          resolve(data)
        })
      })
    } catch (err) {
      // console.log(err)
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
