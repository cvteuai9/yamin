import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import styles from './header.module.scss'
import MyPreviewUploadImage from '@/components/user/my-preview-upload-image'
import { initUserData, useAuth } from '@/hooks/my-use-auth'
import { avatarBaseUrl } from '@/configs'
import {
  login,
  logout,
  // updateProfile,
  getUserById,
  // updateProfileAvatar,
} from '@/services/my-user'
import useFirebase from '@/hooks/use-firebase'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/router'
import { IoLogOutOutline } from 'react-icons/io5'
import { CiHeart } from "react-icons/ci";
import { RiCoupon2Line } from 'react-icons/ri'
import { TiClipboard } from 'react-icons/ti'
import { CgProfile } from 'react-icons/cg'

export default function MyHeader() {
  const router = useRouter()
  const toggleBtnRef = useRef(null)
  const toggleBtnIconRef = useRef(null)
  const dropDownMenuRef = useRef(null)
  const navbarRef = useRef(null)
  const search2Ref = useRef(null)
  const logoRef = useRef(null)
  const logo2Ref = useRef(null)

  useEffect(() => {
    const toggleBtn = toggleBtnRef.current
    const toggleBtnIcon = toggleBtnIconRef.current
    const dropDownMenu = dropDownMenuRef.current
    const navbar = navbarRef.current
    const search2 = search2Ref.current
    const logo = logoRef.current
    const logo2 = logo2Ref.current

    toggleBtn.addEventListener('click', () => {
      dropDownMenu.classList.toggle('open')
      const isOpen = dropDownMenu.classList.contains('open')
      // console.log(isOpen)
      search2.classList.toggle('disappear')
      // navbar.classList.toggle('disappear')

      // 控制 LOGO 的顯示與否
      //
      if (isOpen) {
        logo.style.display = 'none'
      } else {
        logo.style.display = ''
      }

      toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
    })

    // 添加事件監聽器，阻止事件冒泡
    const searchInput1 = document.getElementById('search')
    const searchInput2 = document.getElementById('search2')

    searchInput1.onclick = function (event) {
      event.stopPropagation()
    }

    searchInput2.onclick = function (event) {
      event.stopPropagation()
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 992) {
        dropDownMenu.classList.remove('open')
        search2.classList.remove('disappear')
        navbar.classList.remove('disappear')
        logo.style.display = ''
        toggleBtnIcon.classList = 'fa-solid fa-bars'
      }
    })
  }, [])
  
  // 增加是否登入會員，顯示照片
  const initUserProfile = {
    id: '',
    user_name: '',
    nick_name: '',
    gender: '',
    phone: '',
    birthday: null,
    user_image: '',
    email: '',
  }
  const [userProfile, setUserProfile] = useState(initUserProfile)
  const [selectedFile, setSelectedFile] = useState(null)

  // 登出登入
  const { auth, setAuth } = useAuth()
  const { loginGoogle, logoutFirebase } = useFirebase()

  // 登入後可以透過id獲取會員資料
  const getUserData = async (id) => {
    const res = await getUserById(id)

    if (res.data.status === 'success') {
      // 以下為同步化目前後端資料庫資料，與這裡定義的初始化會員資料物件的資料
      const dbUser = res.data.data.user
      // console.log('dbUser ', dbUser) //有ＩＤ
      const dbUserProfile = { ...initUserProfile }

      for (const key in dbUserProfile) {
        if (Object.hasOwn(dbUser, key)) {
          // 這裡要將null值的預設值改為空字串 ''
          dbUserProfile[key] = dbUser[key] || ''
        }
      }
      // 設定到狀態中
      setUserProfile(dbUserProfile)
    }
  }
  // auth載入完成後向資料庫要會員資料
  useEffect(() => {
    if (auth.isAuth) {
      getUserData(auth.userData.id)
    }
    // eslint-disable-next-line
  }, [auth])

  // 處理登出
  const handleLogout = async () => {
    // firebase logout(注意，這並不會登出google帳號，是登出firebase的帳號)
    logoutFirebase()

    const res = await logout()

    // 成功登出後，回復初始會員狀態
    if (res.data.status === 'success') {
      toast.success('已成功登出')

      setAuth({
        isAuth: false,
        userData: initUserData,
      })
      // 因為解除這些條件才能立刻讓圖片為初始圖片
      setSelectedFile(null)
      setUserProfile(initUserProfile)
    } else {
      toast.error(`登出失敗`)
    }
    toggleMenu()
    setMenuOpen(false)
  }
  

  // 點擊使用者頭像，跳出視窗
  const [menuOpen, setMenuOpen] = useState(false)
  // 創建了一個 menuRef，並將其附加到彈出選單的 DOM 元素上。
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  const toggleMenu = (e) => {
    if (e) {
      e.stopPropagation(); // 確保 e 不為 undefined
    } // 阻止事件冒泡
    setMenuOpen((prevState) => !prevState) //prevState => !prevState 是一個回調函數，它接收當前的 menuOpen 狀態（prevState），並返回相反的狀態值（如果當前為 true，則返回 false，反之亦然）。
  }

  useEffect(() => {
    function handleClickOutside(event) {
      // menuRef.current && ...
      //這是一個短路評估。它首先檢查 menuRef.current 是否存在。這樣做是為了確保在訪問 .contains() 方法之前，menuRef.current 確實指向了一個有效的 DOM 元素。
      // / !menuRef.current.contains(event.target)
      // event.target 是觸發點擊事件的 DOM 元素。menuRef.current.contains(event.target) 檢查 event.target 是否是 menuRef.current 的子元素或者就是 menuRef.current 本身。
      // 所以，整個條件的意思是："如果 menuRef.current 存在，並且點擊的元素不在 menuRef.current 內部或不是 menuRef.current 本身"如果這個條件為真，那麼 setMenuOpen(false) 就會被執行，關閉選單。
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false)
      }
    }

    // 只有當選單打開時才添加事件監聽器
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    // 清理函數
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen])
  // 新增：處理內部連結點擊
  const handleInnerClick = (e) => {
    const target = e.target.closest('a')
    if (target) {
      // 如果點擊的是連結，關閉選單
      setMenuOpen(false)
    }
  }

  return (
    <>
      <header className={`${styles.header}`}>
        <div className={`${styles.navbar}`} ref={navbarRef}>
          <div className={`${styles.logo}`} id="logo" ref={logoRef}>
            <img
              src="/images/header/logo-x.png"
              alt=""
              height={70}
              width={140}
            />
          </div>
          <ul className={`${styles.links}`}>
            <li>
              <div className={`${styles['svgDiv']}`}>
                <Link href="#">首頁</Link>
                <img
                  src="/images/header/outer-frame.png"
                  alt=""
                  className={`${styles.svg}`}
                />
              </div>
            </li>
            <li>
              <div className={`${styles['svgDiv']}`}>
                <img
                  src="/images/header/outer-frame.png"
                  alt=""
                  className={`${styles.svg}`}
                />
                <Link href="/product/list">商品</Link>
              </div>
            </li>
            <li>
              <div className={`${styles['svgDiv']}`}>
                <img
                  src="/images/header/outer-frame.png"
                  alt=""
                  className={`${styles.svg}`}
                />
                <Link href="#">課程</Link>
              </div>
            </li>
            <li>
              <div className={`${styles['svgDiv']}`}>
                <img
                  src="/images/header/outer-frame.png"
                  alt=""
                  className={`${styles.svg}`}
                />
                <Link href="/article">文章</Link>
              </div>
            </li>
          </ul>
          <div className="d-flex">
            <div className={`${styles.search}`}>
              <input
                type="search"
                id="search"
                name=""
                className={`${styles.search}`}
                style={{
                  backgroundColor: '#003E52',
                  border: '2px solid #B29564',
                  height: 25,
                  width: 100,
                  borderRadius: 100,
                }}
              />
            </div>
            <div className={`${styles['love_btn']}`}>
              <Link href={'/member/fav/'}>
                <img
                  src="/images/header/heart.png"
                  alt=""
                  height={25}
                  width={30}
                />
              </Link>
            </div>
            <div className={`${styles['action_btn']}`}>
              <Link href={``}>
                <img
                  src="/images/header/cart.png"
                  alt=""
                  height={25}
                  width={30}
                />
              </Link>
            </div>
            <div className="header-userimg position-relative d-flex align-items-center">
              <button
                ref={buttonRef}
                className="d-flex align-items-center btn btn-reset p-0 "
                onClick={(e) => toggleMenu(e)}
                aria-haspopup="true"
                aria-expanded={menuOpen}
              >
                <div className="header-personimgdiv">
                  <MyPreviewUploadImage
                    avatarImg={userProfile.user_image}
                    // uploadImg={updateProfileAvatar}
                    avatarBaseUrl={avatarBaseUrl}
                    showText={false}
                    setSelectedFile={setSelectedFile}
                    selectedFile={selectedFile}
                  />
                </div>
              </button>
              {menuOpen && (
                <div
                  className="header-dropdownMenu"
                  onClick={handleInnerClick}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleInnerClick(e)
                    }
                  }}
                  role="menu"
                  tabIndex={0}
                  ref={menuRef}
                >
                  <ul className="header-dropdownMenu-ul">
                    {!auth.isAuth && (
                      <>
                        <div className="d-flex justify-content-center">
                          <button className="header-login btn btn-reset">
                            <div className="user-link-login">
                              <Link href="/member/login">會員登入</Link>
                            </div>
                          </button>
                        </div>
                        <div className="d-flex justify-content-center">
                          <button className="header-register btn btn-reset">
                            <div className="user-link-register">
                              <Link href="/member/register">註冊新會員</Link>
                            </div>
                          </button>
                        </div>
                      </>
                    )}
                    {auth.isAuth && (
                      <>
                        <div className="d-flex align-items-center header-userdiv">
                          <div className="header-dropdownMenu-li">
                            <div className="header-personimgdiv-inside">
                              <MyPreviewUploadImage
                                avatarImg={userProfile.user_image}
                                // uploadImg={updateProfileAvatar}
                                avatarBaseUrl={avatarBaseUrl}
                                showText={false}
                                setSelectedFile={setSelectedFile}
                                selectedFile={selectedFile}
                              />
                            </div>
                          </div>
                          <div className="header-dropdownMenu-li">
                            {auth.userData.user_name}
                            <p className="p-0 m-0">hello！</p>
                          </div>
                        </div>
                      </>
                    )}
                    <li className="mt-4 d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        <CgProfile className="icon" />
                      </div>
                      <Link href="/member/profile" className="user-link ms-3">
                        個人資料管理
                      </Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        <TiClipboard className="icon" />
                      </div>
                      <Link href="/member/order" className="user-link ms-3">
                        我的訂單
                      </Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        <RiCoupon2Line className="icon" />
                      </div>
                      <Link href="/member/coupon" className="user-link ms-3">
                        優惠券
                      </Link>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        <CiHeart className="icon" />
                      </div>
                      <Link href="/member/fav" className="user-link ms-3">
                        我的收藏
                      </Link>
                    </li>
                    {auth.isAuth && (
                      <li className="d-flex align-items-center">
                        <IoLogOutOutline className="icon ms-1" />
                        <Link
                          href="#"
                          className="user-link ms-3"
                          onClick={handleLogout}
                        >
                          登出
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className={`${styles['toggle_btn']}`} ref={toggleBtnRef}>
            <div className="d-flex">
              <input
                type="search"
                id="search2"
                name=""
                className={`${styles.search2}`}
                style={{
                  backgroundColor: '#003E52',
                  border: '2px solid #B29564',
                  height: 20,
                  width: 100,
                  borderRadius: 100,
                }}
                ref={search2Ref}
              />
              <i className="fa-solid fa-bars" ref={toggleBtnIconRef} />
            </div>
          </div>
        </div>
        <div className={`${styles['dropdown_menu']}`} ref={dropDownMenuRef}>
          <div className={`${styles.logo2}`} id="logo2" ref={logo2Ref}>
            <img
              src="/images/header/logo-y.png"
              alt=""
              height={200}
              width={125}
            />
          </div>
          <li>
            <Link href="首頁">首頁</Link>
          </li>
          <li>
            <Link href="/product/list">商品</Link>
          </li>
          <li>
            <Link href="課程">課程</Link>
          </li>
          <li>
            <Link href="文章">文章</Link>
          </li>
          <li>
            <Link href="/member/fav">收藏</Link>
          </li>
          <li>
            <Link href="文章">個人資料</Link>
          </li>
        </div>
      </header>
      <div className={`${styles.star} mt-3`}>
        <img src="/images/header/star.png" alt="" width={16} height={16} />
        <img
          src="/images/header/vector.png"
          alt=""
          width="100%"
          height="1.5px"
          style={{ margin: '0 -2px' }}
        />
        <img src="/images/header/star.png" alt="" width={16} height={16} />
      </div>
      <style jsx>
        {`
          .open {
            height: auto;
          }
          .disappear {
            display: none;
          }
        `}
      </style>
    </>
  )
}
