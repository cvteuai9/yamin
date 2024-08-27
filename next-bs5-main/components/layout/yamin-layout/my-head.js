import Link from 'next/link'
import { useEffect, useRef } from 'react'
import styles from './header.module.scss'
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
  const searchFormRef = useRef(null)
  const searchFormCloseBtnRef = useRef(null)

  async function handleSearchProduct() {
    const searchForm = searchFormRef.current
    const searchFormCloseBtn = searchFormCloseBtnRef.current
    const searchData = searchForm.value

    // 清空搜尋欄
    searchForm.value = ''
    searchFormCloseBtn.click()
    router.push(`/product/search/${searchData}`)
  }
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
                <Link href="#">文章</Link>
              </div>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <div className={`${styles.search}`}>
              <input
                type="button"
                id="search"
                name=""
                className={`${styles.search}`}
                style={{
                  backgroundColor: '#003E52',
                  border: '2px solid #B29564',
                  height: 25,
                  width: 100,
                  borderRadius: 100,
                  color: 'white',
                  fontSize: 20,
                }}
                data-bs-toggle="modal"
                data-bs-target="#searchForm"
                data-bs-whatever="@mdo"
              />
            </div>
            <div className={`${styles['love_btn']}`}>
              <Link href={'/member/fav/favorite-p'}>
                <img
                  src="/images/header/heart.png"
                  alt=""
                  height={25}
                  width={30}
                />
              </Link>
            </div>
            <div className={`${styles['action_btn']}`}>
              <Link href={`#`}>
                <img
                  src="/images/header/cart.png"
                  alt=""
                  height={25}
                  width={30}
                />
              </Link>
            </div>
            <div className={`${styles.circle}`}></div>
          </div>
          <div>
            <div className="d-flex align-items-center">
              <input
                type="button"
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
                data-bs-toggle="modal"
                data-bs-target="#searchForm"
                data-bs-whatever="@mdo"
              />
              <div className={`${styles['toggle_btn']}`} ref={toggleBtnRef}>
                <i className="fa-solid fa-bars" ref={toggleBtnIconRef} />
              </div>
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
      {/* 搜尋彈出視窗 */}
      <div
        className="modal fade"
        id="searchForm"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className={`modal-dialog`}>
          <div className={`${styles.searchForm} modal-content`}>
            <div className="modal-header">
              <h1 className="modal-title fs-3" id="exampleModalLabel">
                搜尋商品
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={searchFormCloseBtnRef}
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="product-name" className="col-form-label fs-4">
                    請輸入商品名稱或關鍵字搜尋商品:
                  </label>
                  <input
                    type="text"
                    className="form-control fs-4"
                    id="product-name"
                    ref={searchFormRef}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        handleSearchProduct()
                      }
                    }}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn"
                onClick={() => handleSearchProduct()}
              >
                送出
              </button>
            </div>
          </div>
        </div>
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
