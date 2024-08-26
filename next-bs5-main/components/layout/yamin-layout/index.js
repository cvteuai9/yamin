// import MyNavbar from './my-navbar-nouse'
import MyFooter from './my-footer'
import MyHeader from './my-head'
import { useLoader } from '@/hooks/use-loader'

export default function YaminLayout({ children }) {
  const { loader } = useLoader()

  return (
    <>
      <MyHeader>
        <meta name="viewport" content="width=device-width" />
      </MyHeader>
      <main className="flex-shrink-0 mt-3">
        <div className="container-fluid" style={{ maxWidth: 1440 }}>
          {children}
        </div>
        {/* 全域的載入動畫指示器 */}
        {loader()}
      </main>
      <MyFooter />
    </>
  )
}
