import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import styles from './header.module.scss'
import MyPreviewUploadImage from '@/components/user/my-preview-upload-image'
import { useAuth } from '@/hooks/my-use-auth'
import { avatarBaseUrl } from '@/configs'
import {
  // updateProfile,
  getUserById,
  // updateProfileAvatar,
} from '@/services/my-user'
import { useRouter } from 'next/router'

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
  const { auth } = useAuth()
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

  const GoProfile = () => {
    router.push('/member/profile')
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

            <button
              className="d-flex align-items-center btn btn-reset p-0"
              onClick={GoProfile}
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
