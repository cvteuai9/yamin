import react, { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import jwt from 'jsonwebtoken'
import { checkAuth, getFavs } from '@/services/my-user'

export const AuthContext = createContext({
  user: null,
  setUser: () => { },
  token: null,
  setToken: () => { },
  guser: null,
  setGUser: () => { },
  handleCheckAuth: () => { },
  userIntention:null,
  setUserIntention: () => { },
  // 其他默認值
})

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)
  const [guser, setGUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [userIntention, setUserIntention] = useState(null);
  
  // 避免在重定向到登入頁面之前，頁面內容已經開始渲染。



  const router = useRouter()
  const loginRouter = '/member/login'

  const protectedRouter = [
    // '/',
    '/product/cart',
    '/member/profile',
    '/member/changeps',
    '/member/order',
    '/member/order/info',
    '/member/coupon',
    '/member/order/review',
    '/member/fav/',
  ] // 需要驗證的頁面

  const handleCheckAuth = async () => {
      const res = await checkAuth()
      if (res.data.status === 'success') {
        // console.log(res.data.data.user)
        setUser(res.data.data.user)
        return
      }
      else {
        setUser(null)
      }
      setLoading(false)
  }

  useEffect(() => (async () => {
    handleCheckAuth()
  })(), [])

  useEffect(() => {
    if (loading && user !== null) {
      setLoading(false)
    }
  }, [user])

  useEffect(() => {
    // 當原有想訪問的頁面，儲存到storedIntention然後userIntention
    const storedIntention = localStorage.getItem('userIntention');
    if (storedIntention) {
      setUserIntention(storedIntention);
      localStorage.removeItem('userIntention');
    }
  }, []);

  useEffect(() => {
    if (!loading && router.isReady) {
      if (!user) {
        // 用戶未登入
        if (protectedRouter.includes(router.pathname)) {
          // 如果嘗試訪問受保護的路由，保存意圖並重定向到登入頁
          localStorage.setItem('userIntention', router.pathname);
          router.push(loginRouter);
        }
      } else {
        // 用戶已登入
        if (router.pathname === '/member/register' || router.pathname === '/member/login') {
          // 如果在登入或註冊頁，重定向到 profile
          router.push('/member/profile');
        } else {
          // 檢查是否有登出前的重定向路徑或用戶意圖
          const logoutRedirectPath = localStorage.getItem('logoutRedirectPath');
          const storedIntention = localStorage.getItem('userIntention');
          
          if (logoutRedirectPath) {
            localStorage.removeItem('logoutRedirectPath');
            router.push(logoutRedirectPath);
          } else if (storedIntention) {
            localStorage.removeItem('userIntention');
            router.push(storedIntention);
          }
        }
      }
    }
  }, [router.isReady, router.pathname, user, loading]);




  useEffect(() => {
    // 立即執行函數
    ; (async () => {
      if (token) {
        const result = await checkToken(token)
        console.log(result)
        if (result.email) {
          setUser(result)
        } else {
          setUser(null)
        }
      }
    })()
  }, [token])

  // useEffect不能下await , 所以用()()立即執行函數
  useEffect(() => {
    const oldToken = localStorage.getItem('nextNeToken')
    if (oldToken && !token) {
      ; (async () => {
        try {
          const url = 'http://localhost:3005/api/my-auth/status'
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
          // console.log(data);
        })
      })
    } catch (err) {
      // console.log(err)
      decoded = {}
    }

    return decoded
  }


  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken, guser, setGUser, setLoading, handleCheckAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
