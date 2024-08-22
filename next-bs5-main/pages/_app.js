import { useEffect } from 'react'
// 樣式
import '@/styles/globals.scss'
import '@/styles/product.scss'
import '@/styles/cart.scss'
import '@/styles/loader.scss'
import '@/styles/order/leftNav.scss'
import '@/styles/cart/cartTest.scss'
import '@/styles/order/order.scss'
import '@/styles/order/PayCard.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'react-credit-cards-2/dist/es/styles-compiled.css'

import '@/styles/star.scss'
import '@/styles/article.scss'
import '@/styles/public.scss'
import '@/styles/style.scss'
import '@/styles/course_style.scss'

// Ju-掛載
import '@/styles/Normalize.scss'
import '@/styles/all.css'

// 載入雅名購物車
import { YaminCartProvider } from '@/hooks/yamin-use-cart'
// 載入購物車context
import { CartProvider } from '@/hooks/use-cart-state'
// 載入認証用context
import { AuthProvider } from '@/hooks/my-use-auth'
// import { AuthProvider } from '@/hooks/use-auth'
// import { AuthProvider } from '@/context/AuthContext'
// 載入動畫context
import { LoaderProvider } from '@/hooks/use-loader'

// import DefaultLayout from '@/components/layout/default-layout'
import YaminLayout from '@/components/layout/yamin-layout'
// 自訂用載入動畫元件
import { CatLoader, NoLoader } from '@/hooks/use-loader/components'

import NextTopLoader from 'nextjs-toploader'

export default function MyApp({ Component, pageProps }) {
  // 導入bootstrap的JS函式庫
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])

  // 使用預設排版檔案，對應`components/layout/default-layout/index.js`
  // 或`components/layout/default-layout.js`
  const getLayout =
    Component.getLayout || ((page) => <YaminLayout>{page}</YaminLayout>)

  return (
    <AuthProvider>
      <LoaderProvider close={2} CustomLoader={CatLoader}>
        <CartProvider>
          <NextTopLoader height={5} color="#003445" />
          <YaminCartProvider>
            {getLayout(<Component {...pageProps} />)}
          </YaminCartProvider>
        </CartProvider>
      </LoaderProvider>
    </AuthProvider>
  )
}
