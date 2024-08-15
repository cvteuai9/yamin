import React from 'react'
import Link from 'next/link'
import Leftnav from '@/components/user-test/left-nav'
export default function FavoriteC() {
  return (
    <>
      <>
        {/* 標題 & 篩選 */}
        <div className="container">
          <div className="row">
            <div className="titlenav">
              <img src="/images/favorite/title.svg" alt="" />
              <img
                src="/images/favorite/group.svg"
                alt=""
                style={{ width: '100%' }}
              />
            </div>
            <div className="col-md-3 ">
              <Leftnav />
            </div>
            <div className="col-md-9 ">
              <h5 className="goldenf mb-3 mt-3">我的收藏</h5>
              <div className="favorite-nav">
                <div className="searchnavs">
                  <div className="searchnav">
                    <Link href="/test/julia/favorite-p" className="goldenf p">
                      商品
                    </Link>
                  </div>
                  <div className="ms-3 searchnav">
                    <Link href="/test/julia/favorite-c" className="goldenf p">
                      課程
                    </Link>
                  </div>
                  <div className="ms-3 searchnav">
                    <Link href="/test/julia/favorite-a" className="goldenf p">
                      文章
                    </Link>
                  </div>
                </div>
                <hr />
                <div className="searchitem" type="button">
                  <p className="goldenf p2 mb-1">
                    篩選
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      style={{ color: '#b29564' }}
                      fill="currentColor"
                      className="bi bi-funnel"
                      viewBox="0 0 16 16"
                    >
                      <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
                    </svg>
                  </p>
                </div>
              </div>
              <div className="favoritec-cards">
                <div className="favoritec-pcard']} mt-5 ms-1 me-3">
                  <div className="favoritec-imgbox">
                    <img src="/images/favorite/class.webp" alt="" />
                    <div className="favoritec-fabtn" type="button">
                      <img
                        id="like2"
                        src="/images/favorite/like.svg"
                        width="10px"
                        alt="加入收藏"
                      />
                    </div>
                  </div>
                  <div className="favoritec-cardtext">
                    <div className="favoritec-cardlefttext">
                      <p className="whitef p2">
                        茶的風味鑑賞學：識茶、品茶、泡茶，探索茶的世界
                      </p>
                      <span className="p2 whitef50">
                        茶藝跟咖啡其實很像！學會品茶可以增進生活樂趣，懂得按照自己的需求挑選茶飲；學會泡茶更是特殊技能，除了享受療育的泡茶過程外，也不失為一種與人交際的談資喔！
                      </span>
                      <br />
                      <div className="favoritec-bottomtext">
                        <p className="p2 classdate">2024-08-20~2024-08-20</p>
                        <br />
                        <p className="p2 classdate ms-3">
                          人數限制 24 人：已經報名 12人
                        </p>
                      </div>
                    </div>
                    <div className="favoritec-cardrighttext mt-3">
                      <div>
                        <i
                          className="fa-solid fa-location-dot fa-lg"
                          style={{ color: '#ffffff' }}
                        />
                        <p className="mb-0 ms-3 p2 whitef">台北市</p>
                      </div>
                      <div>
                        <p className="whitef p2">NT$ 1,200</p>
                      </div>
                      <div className="btns">
                        <div
                          className="btn1 d-flex justify-content-center align-items-center p2"
                          type="button"
                        >
                          加入購物車
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="favoritec-cards">
                <div className="favoritec-pcard']} mt-5 ms-1 me-3">
                  <div className="favoritec-imgbox">
                    <img src="/images/favorite/class.webp" alt="" />
                    <div className="favoritec-fabtn" type="button">
                      <img
                        id="like2"
                        src="/images/favorite/like.svg"
                        width="10px"
                        alt="加入收藏"
                      />
                    </div>
                  </div>
                  <div className="favoritec-cardtext">
                    <div className="favoritec-cardlefttext">
                      <p className="whitef p2">
                        茶的風味鑑賞學：識茶、品茶、泡茶，探索茶的世界
                      </p>
                      <span className="p2 whitef50">
                        茶藝跟咖啡其實很像！學會品茶可以增進生活樂趣，懂得按照自己的需求挑選茶飲；學會泡茶更是特殊技能，除了享受療育的泡茶過程外，也不失為一種與人交際的談資喔！
                      </span>
                      <br />
                      <div className="favoritec-bottomtext">
                        <p className="p2 classdate">2024-08-20~2024-08-20</p>
                        <br />
                        <p className="p2 classdate ms-3">
                          人數限制 24 人：已經報名 12人
                        </p>
                      </div>
                    </div>
                    <div className="favoritec-cardrighttext mt-3">
                      <div>
                        <i
                          className="fa-solid fa-location-dot fa-lg"
                          style={{ color: '#ffffff' }}
                        />
                        <p className="mb-0 ms-3 p2 whitef">台北市</p>
                      </div>
                      <div>
                        <p className="whitef p2">NT$ 1,200</p>
                      </div>
                      <div className="btns">
                        <div
                          className="btn1 d-flex justify-content-center align-items-center p2"
                          type="button"
                        >
                          加入購物車
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="favoritec-cards">
                <div className="favoritec-pcard']} mt-5 ms-1 me-3">
                  <div className="favoritec-imgbox">
                    <img src="/images/favorite/class.webp" alt="" />
                    <div className="favoritec-fabtn" type="button">
                      <img
                        id="like2"
                        src="/images/favorite/like.svg"
                        width="10px"
                        alt="加入收藏"
                      />
                    </div>
                  </div>
                  <div className="favoritec-cardtext">
                    <div className="favoritec-cardlefttext">
                      <p className="whitef p2">
                        茶的風味鑑賞學：識茶、品茶、泡茶，探索茶的世界
                      </p>
                      <span className="p2 whitef50">
                        茶藝跟咖啡其實很像！學會品茶可以增進生活樂趣，懂得按照自己的需求挑選茶飲；學會泡茶更是特殊技能，除了享受療育的泡茶過程外，也不失為一種與人交際的談資喔！
                      </span>
                      <br />
                      <div className="favoritec-bottomtext">
                        <p className="p2 classdate">2024-08-20~2024-08-20</p>
                        <br />
                        <p className="p2 classdate ms-3">
                          人數限制 24 人：已經報名 12人
                        </p>
                      </div>
                    </div>
                    <div className="favoritec-cardrighttext mt-3">
                      <div>
                        <i
                          className="fa-solid fa-location-dot fa-lg"
                          style={{ color: '#ffffff' }}
                        />
                        <p className="mb-0 ms-3 p2 whitef">台北市</p>
                      </div>
                      <div>
                        <p className="whitef p2">NT$ 1,200</p>
                      </div>
                      <div className="btns">
                        <div
                          className="btn1 d-flex justify-content-center align-items-center p2"
                          type="button"
                        >
                          加入購物車
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="favoritec-cards">
                <div className="favoritec-pcard']} mt-5 ms-1 me-3">
                  <div className="favoritec-imgbox">
                    <img src="/images/favorite/class.webp" alt="" />
                    <div className="favoritec-fabtn" type="button">
                      <img
                        id="like2"
                        src="/images/favorite/like.svg"
                        width="10px"
                        alt="加入收藏"
                      />
                    </div>
                  </div>
                  <div className="favoritec-cardtext">
                    <div className="favoritec-cardlefttext">
                      <p className="whitef p2">
                        茶的風味鑑賞學：識茶、品茶、泡茶，探索茶的世界
                      </p>
                      <span className="p2 whitef50">
                        茶藝跟咖啡其實很像！學會品茶可以增進生活樂趣，懂得按照自己的需求挑選茶飲；學會泡茶更是特殊技能，除了享受療育的泡茶過程外，也不失為一種與人交際的談資喔！
                      </span>
                      <br />
                      <div className="favoritec-bottomtext">
                        <p className="p2 classdate">2024-08-20~2024-08-20</p>
                        <br />
                        <p className="p2 classdate ms-3">
                          人數限制 24 人：已經報名 12人
                        </p>
                      </div>
                    </div>
                    <div className="favoritec-cardrighttext mt-3">
                      <div>
                        <i
                          className="fa-solid fa-location-dot fa-lg"
                          style={{ color: '#ffffff' }}
                        />
                        <p className="mb-0 ms-3 p2 whitef">台北市</p>
                      </div>
                      <div>
                        <p className="whitef p2">NT$ 1,200</p>
                      </div>
                      <div className="btns">
                        <div
                          className="btn1 d-flex justify-content-center align-items-center p2"
                          type="button"
                        >
                          加入購物車
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 頁碼 */}
              <div className="pageitem">
                <ul className="ps-0 mt-5">
                  <li className="pt-2 pb-2">
                    <img
                      src="/images/favorite/leftbtn.svg"
                      type="button"
                      alt=""
                    />
                  </li>
                  <li className="p" type="button">
                    1
                  </li>
                  <li className="p" type="button">
                    2
                  </li>
                  <li className="p" type="button">
                    3
                  </li>
                  <li className="p" type="button">
                    4
                  </li>
                  <li className="p" type="button">
                    5
                  </li>
                  <li className="pt-2 pb-2">
                    <img
                      src="/images/favorite/rightbtn.svg"
                      type="button"
                      alt=""
                    />
                  </li>
                </ul>
                <img
                  src="/images/favorite/line.svg"
                  alt=""
                  style={{ width: '20rem' }}
                />
              </div>
            </div>
          </div>
          {/* 頁碼 */}
        </div>
      </>
    </>
  )
}
