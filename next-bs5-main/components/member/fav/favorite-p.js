/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useMemo, useCallback } from 'react'
import { useRouter } from 'next/router'
import option from '@/components/article/option.module.sass'
import StarLarge from '@/components/star/star-large'
import { IoEyeSharp } from 'react-icons/io5'
import { FaRegComment, FaBookmark } from 'react-icons/fa'
import { FaAngleDown } from 'react-icons/fa6'

import Leftnav from '@/components/member/left-nav'
import SearchNav from './search-nav'
import Link from 'next/link'
import styles from '@/components/member/fav/favorite.module.scss'
export default function FavoriteP() {
  function handleOption(e) {
    const value = e.target.getAttribute('data-value')
    console.log(value)
  }
  return (
    <>
      {/* 標題 & 篩選 */}
      <div className="container-fluid">
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
            <Leftnav fromFavorite="fromFavorite" />
          </div>
          <div className="col-md-9 p-0">
            <h5 className="goldenf mb-3 mt-3">我的收藏</h5>
            <div className="favorite-nav">
              <SearchNav favoriteProduct={1} />
              <hr />
              <div className="searchitem" type="button">
                <div className="d-flex justify-content-end align-items-center ">
                  {/* <h4>{selectedCategory}</h4> */}
                  <div
                    className="d-flex justify-content-between"
                    style={{ width: 100 }}
                  >
                    <div
                      className={`d-flex align-items-center justify-content-between ${option['articlechoose']}`}
                    >
                      <input type="checkbox" name="a1-1" id="a1-1" />
                      <label htmlFor="a1-1" className="d-flex flex-column">
                        <p className="mb-0 align-items-center">
                          排序
                          <FaAngleDown className={option['icon']} />
                        </p>
                        <ul className="ul1">
                          <li>
                            <a
                              href="#"
                              data-value="date_asc"
                              onClick={(e) => {
                                e.preventDefault()
                                handleOption(e)
                              }}
                            >
                              依金額排序
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              data-value="views_desc"
                              onClick={(e) => {
                                e.preventDefault()
                                handleOption(e)
                              }}
                            >
                              依評分排序
                            </a>
                          </li>
                        </ul>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 標題 */}
            <div className={`${styles['favoritep-cards']} low mt-5`}>
              <div className={`${styles['favoritep-pcard']}`}>
                <div className={`${styles['favoritep-imgbox']}`}>
                  <img src="/images/favorite/tea.jpg" alt="" />
                  <div className={`${styles['favoritep-fabtn']}`} type="button">
                    <img
                      id="like2"
                      src="/images/favorite/heart-fill.svg"
                      width="20px"
                      alt="加入收藏"
                    />
                  </div>
                </div>
                <div className={`${styles['favoritep-cardtext']}`}>
                  <p className="whitef50 p2">
                    精品原葉丨三峽碧螺 40g–精裝盒
                    <br />
                    品牌 : 七三茶堂
                    <br />
                    茶種 : 綠茶
                    <br />
                    產區 : 三峽區
                    <br />
                    重量 : 40kg
                    <br />
                    <br />
                    <span className="p goldenf">NT$650</span>
                  </p>
                  <div
                    type="button"
                    className={`${styles['favoritep-cardbtn']}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      style={{ color: '#fff' }}
                      fill="currentColor"
                      className="bi bi-cart3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className={`${styles['favoritep-pcard']}`}>
                <div className={`${styles['favoritep-imgbox']}`}>
                  <img src="/images/favorite/tea.jpg" alt="" />
                  <div className={`${styles['favoritep-fabtn']}`} type="button">
                    <img
                      id="like2"
                      src="/images/favorite/heart-fill.svg"
                      width="20px"
                      alt="加入收藏"
                    />
                  </div>
                </div>
                <div className={`${styles['favoritep-cardtext']}`}>
                  <p className="whitef50 p2">
                    精品原葉丨三峽碧螺 40g–精裝盒
                    <br />
                    品牌 : 七三茶堂
                    <br />
                    茶種 : 綠茶
                    <br />
                    產區 : 三峽區
                    <br />
                    重量 : 40kg
                    <br />
                    <br />
                    <span className="p goldenf">NT$650</span>
                  </p>
                  <div
                    type="button"
                    className={`${styles['favoritep-cardbtn']}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      style={{ color: '#fff' }}
                      fill="currentColor"
                      className="bi bi-cart3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className={`${styles['favoritep-pcard']}`}>
                <div className={`${styles['favoritep-imgbox']}`}>
                  <img src="/images/favorite/tea.jpg" alt="" />
                  <div className={`${styles['favoritep-fabtn']}`} type="button">
                    <img
                      id="like2"
                      src="/images/favorite/heart-fill.svg"
                      width="20px"
                      alt="加入收藏"
                    />
                  </div>
                </div>
                <div className={`${styles['favoritep-cardtext']}`}>
                  <p className="whitef50 p2">
                    精品原葉丨三峽碧螺 40g–精裝盒
                    <br />
                    品牌 : 七三茶堂
                    <br />
                    茶種 : 綠茶
                    <br />
                    產區 : 三峽區
                    <br />
                    重量 : 40kg
                    <br />
                    <br />
                    <span className="p goldenf">NT$650</span>
                  </p>
                  <div
                    type="button"
                    className={`${styles['favoritep-cardbtn']}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      style={{ color: '#fff' }}
                      fill="currentColor"
                      className="bi bi-cart3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className={`${styles['favoritep-pcard']}`}>
                <div className={`${styles['favoritep-imgbox']}`}>
                  <img src="/images/favorite/tea.jpg" alt="" />
                  <div className={`${styles['favoritep-fabtn']}`} type="button">
                    <img
                      id="like2"
                      src="/images/favorite/heart-fill.svg"
                      width="20px"
                      alt="加入收藏"
                    />
                  </div>
                </div>
                <div className={`${styles['favoritep-cardtext']}`}>
                  <p className="whitef50 p2">
                    精品原葉丨三峽碧螺 40g–精裝盒
                    <br />
                    品牌 : 七三茶堂
                    <br />
                    茶種 : 綠茶
                    <br />
                    產區 : 三峽區
                    <br />
                    重量 : 40kg
                    <br />
                    <br />
                    <span className="p goldenf">NT$650</span>
                  </p>
                  <div
                    type="button"
                    className={`${styles['favoritep-cardbtn']}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      style={{ color: '#fff' }}
                      fill="currentColor"
                      className="bi bi-cart3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className={`${styles['favoritep-pcard']}`}>
                <div className={`${styles['favoritep-imgbox']}`}>
                  <img src="/images/favorite/tea.jpg" alt="" />
                  <div className={`${styles['favoritep-fabtn']}`} type="button">
                    <img
                      id="like2"
                      src="/images/favorite/heart-fill.svg"
                      width="20px"
                      alt="加入收藏"
                    />
                  </div>
                </div>
                <div className={`${styles['favoritep-cardtext']}`}>
                  <p className="whitef50 p2">
                    精品原葉丨三峽碧螺 40g–精裝盒
                    <br />
                    品牌 : 七三茶堂
                    <br />
                    茶種 : 綠茶
                    <br />
                    產區 : 三峽區
                    <br />
                    重量 : 40kg
                    <br />
                    <br />
                    <span className="p goldenf">NT$650</span>
                  </p>
                  <div
                    type="button"
                    className={`${styles['favoritep-cardbtn']}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      style={{ color: '#fff' }}
                      fill="currentColor"
                      className="bi bi-cart3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className={`${styles['favoritep-pcard']}`}>
                <div className={`${styles['favoritep-imgbox']}`}>
                  <img src="/images/favorite/tea.jpg" alt="" />
                  <div className={`${styles['favoritep-fabtn']}`} type="button">
                    <img
                      id="like2"
                      src="/images/favorite/heart-fill.svg"
                      width="20px"
                      alt="加入收藏"
                    />
                  </div>
                </div>
                <div className={`${styles['favoritep-cardtext']}`}>
                  <p className="whitef50 p2">
                    精品原葉丨三峽碧螺 40g–精裝盒
                    <br />
                    品牌 : 七三茶堂
                    <br />
                    茶種 : 綠茶
                    <br />
                    產區 : 三峽區
                    <br />
                    重量 : 40kg
                    <br />
                    <br />
                    <span className="p goldenf">NT$650</span>
                  </p>
                  <div
                    type="button"
                    className={`${styles['favoritep-cardbtn']}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      style={{ color: '#fff' }}
                      fill="currentColor"
                      className="bi bi-cart3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
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
  )
}
