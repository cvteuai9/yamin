import React, { useState, useContext, createContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import axiosInstance from '@/services/axios-instance'
import { checkAuth, getFavs } from '@/services/my-user'

const AuthContext = createContext({ auth: {}, setUser: {} })


// 初始化會員狀態(登出時也要用)
// 只需要必要的資料即可，沒有要多個頁面或元件用的資料不需要加在這裡
// !!注意JWT存取令牌中只有id, username, google_uid, line_uid在登入時可以得到
export const initUserData = {
  id: 0,
  user_name: '',
  google_uid: '',
  // line_uid: '',
  // name: '',
  email: '',
}

export const AuthProvider = ({ children }) => {
  const router = useRouter()

  const [auth, setAuth] = useState({
    isAuth: false,
    userData: initUserData,
  })
  const [hasCheckedAuth, setHasCheckedAuth] = useState(false);

  useEffect(() => {
    if (router.isReady && !hasCheckedAuth) {
      if (!auth.isAuth) {
        handleCheckAuth();
      }
      setHasCheckedAuth(true); // 標記已經執行過檢查
    }
    // eslint-disable-next-line
  }, [router.isReady]);

  // 我的最愛清單使用
  const [favorites, setFavorites] = useState([])

  // 得到我的最愛
  const handleGetFavorites = async () => {
    const res = await getFavs()
    //console.log(res.data)
    if (res.data.status === 'success') {
      setFavorites(res.data.data.favorites)
    }
  }

  useEffect(() => {
    if (auth.isAuth) {
      // 成功登入後要執行一次向伺服器取得我的最愛清單
      handleGetFavorites()
    } else {
      // 登出時要設回空陣列
      setFavorites([])
    }
  }, [auth])


  // 登入頁路由
  const loginRoute = '/member/login'
  // 隱私頁面路由，未登入時會，檢查後跳轉至登入頁
  const protectedRoutes = [
    '/product/cart',
    '/member/profile',
    '/member/changeps',
    '/member/order',
    '/member/order/info',
    '/member/coupon',
    '/member/order/review',
    '/member/fav/',
  ]
  const [userIntention, setUserIntention] = useState(null);

  useEffect(() => {
    // 當原有想訪問的頁面，儲存到storedIntention然後userIntention
    const storedIntention = localStorage.getItem('userIntention');
    if (storedIntention) {
      setUserIntention(storedIntention);
      localStorage.removeItem('userIntention');
    }
  }, []);
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
    if ( router.isReady) {
      if (!auth.isAuth) {
        // 用戶未登入
        if (protectedRoutes.includes(router.pathname)) {
          // 如果嘗試訪問受保護的路由，保存意圖並重定向到登入頁
          localStorage.setItem('userIntention', router.pathname);
          router.push(loginRoute);
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
  }, [router.isReady, router.pathname, auth]);
  // 檢查會員認証用
  // 每次重新到網站中，或重新整理，都會執行這個函式，用於向伺服器查詢取回原本登入會員的資料
  // 因為1.	JWT 記憶體儲存：
  // • 當使用者登入成功後，伺服器會產生一個 JWT，並將它儲存在瀏覽器的 httpOnly cookie 中。這個 JWT 會包含一些使用者的基本資訊（如 user_id）。
  const handleCheckAuth = async () => {
    const res = await checkAuth()

    // 伺服器api成功的回應為 { status:'success', data:{ user } }
    if (res.data.status === 'success') {
      // 只需要initUserData的定義屬性值
      const dbUser = res.data.data.user
      const userData = { ...initUserData }

      for (const key in userData) {
        if (Object.hasOwn(dbUser, key)) {
          userData[key] = dbUser[key] || ''
        }
      }
      // 設到全域狀態中
      setAuth({ isAuth: true, userData })
    } else {
      console.warn(res.data)

      // 在這裡實作隱私頁面路由的跳轉
      if (protectedRoutes.includes(router.pathname)) {
        router.push(loginRoute)
      }
    }
  }


  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
