/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useMemo, useCallback } from 'react'
import { useRouter } from 'next/router'
import option from '@/components/article/option.module.sass'
import StarLarge from '@/components/star/star-large'
import { IoEyeSharp } from 'react-icons/io5'
import { FaRegComment, FaBookmark } from 'react-icons/fa'
import { FaAngleDown } from 'react-icons/fa6'

import Link from 'next/link'
import SearchNav from './search-nav'
import Leftnav from '@/components/member/left-nav'
import styles from '@/components/member/fav/favorite.module.scss'
export default function FavoriteC() {
  function handleOption(e) {
    const value = e.target.getAttribute('data-value')
    console.log(value)
  }
  return (
    <>
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
            <div className="col-md-3">
              <Leftnav fromFavorite="fromFavorite" />
            </div>
            <div className="col-md-9 p-0">
              <h5 className="goldenf mb-3 mt-3">我的收藏</h5>
              <div className="favorite-nav">
                <SearchNav favoriteCourse={1} />
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
                                data-value="date_desc"
                                onClick={(e) => {
                                  e.preventDefault()
                                  handleOption(e)
                                }}
                              >
                                依類別排序
                              </a>
                            </li>
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
              <div className={`${styles.favoriteCourseGroup} mt-5`}>
                <div className={`${styles['favoritec-cards']}`}>
                  <div className={`${styles['favoritec-pcard']}`}>
                    <div className={`${styles['favoritec-imgbox']}`}>
                      <img src="/images/favorite/class.webp" alt="" />
                      <div
                        className={`${styles['favoritec-fabtn']}`}
                        type="button"
                      >
                        <img
                          id="like2"
                          src="/images/favorite/like.svg"
                          width="10px"
                          alt="加入收藏"
                        />
                      </div>
                    </div>
                    <div className={`${styles['favoritec-cardtext']}`}>
                      <div className={`${styles['favoritec-cardlefttext']}`}>
                        <p className="whitef p2">
                          茶的風味鑑賞學：識茶、品茶、泡茶，探索茶的世界
                        </p>
                        <span className="p2 whitef50">
                          茶藝跟咖啡其實很像！學會品茶可以增進生活樂趣，懂得按照自己的需求挑選茶飲；學會泡茶更是特殊技能，除了享受療育的泡茶過程外，也不失為一種與人交際的談資喔！
                        </span>
                        <br />
                        <div className={`${styles['favoritec-bottomtext']}`}>
                          <p className="p2 classdate">2024-08-20~2024-08-20</p>
                          <br />
                          <p className="p2 classdate ms-3">
                            人數限制 24 人：已經報名 12人
                          </p>
                        </div>
                      </div>
                      <div
                        className={`${styles['favoritec-cardrighttext']} mt-3`}
                      >
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
                <div className={`${styles['favoritec-cards']}`}>
                  <div className={`${styles['favoritec-pcard']}`}>
                    <div className={`${styles['favoritec-imgbox']}`}>
                      <img src="/images/favorite/class.webp" alt="" />
                      <div
                        className={`${styles['favoritec-fabtn']}`}
                        type="button"
                      >
                        <img
                          id="like2"
                          src="/images/favorite/like.svg"
                          width="10px"
                          alt="加入收藏"
                        />
                      </div>
                    </div>
                    <div className={`${styles['favoritec-cardtext']}`}>
                      <div className={`${styles['favoritec-cardlefttext']}`}>
                        <p className="whitef p2">
                          茶的風味鑑賞學：識茶、品茶、泡茶，探索茶的世界
                        </p>
                        <span className="p2 whitef50">
                          茶藝跟咖啡其實很像！學會品茶可以增進生活樂趣，懂得按照自己的需求挑選茶飲；學會泡茶更是特殊技能，除了享受療育的泡茶過程外，也不失為一種與人交際的談資喔！
                        </span>
                        <br />
                        <div className={`${styles['favoritec-bottomtext']}`}>
                          <p className="p2 classdate">2024-08-20~2024-08-20</p>
                          <br />
                          <p className="p2 classdate ms-3">
                            人數限制 24 人：已經報名 12人
                          </p>
                        </div>
                      </div>
                      <div
                        className={`${styles['favoritec-cardrighttext']} mt-3`}
                      >
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
                <div className={`${styles['favoritec-cards']}`}>
                  <div className={`${styles['favoritec-pcard']}`}>
                    <div className={`${styles['favoritec-imgbox']}`}>
                      <img src="/images/favorite/class.webp" alt="" />
                      <div
                        className={`${styles['favoritec-fabtn']}`}
                        type="button"
                      >
                        <img
                          id="like2"
                          src="/images/favorite/like.svg"
                          width="10px"
                          alt="加入收藏"
                        />
                      </div>
                    </div>
                    <div className={`${styles['favoritec-cardtext']}`}>
                      <div className={`${styles['favoritec-cardlefttext']}`}>
                        <p className="whitef p2">
                          茶的風味鑑賞學：識茶、品茶、泡茶，探索茶的世界
                        </p>
                        <span className="p2 whitef50">
                          茶藝跟咖啡其實很像！學會品茶可以增進生活樂趣，懂得按照自己的需求挑選茶飲；學會泡茶更是特殊技能，除了享受療育的泡茶過程外，也不失為一種與人交際的談資喔！
                        </span>
                        <br />
                        <div className={`${styles['favoritec-bottomtext']}`}>
                          <p className="p2 classdate">2024-08-20~2024-08-20</p>
                          <br />
                          <p className="p2 classdate ms-3">
                            人數限制 24 人：已經報名 12人
                          </p>
                        </div>
                      </div>
                      <div
                        className={`${styles['favoritec-cardrighttext']} mt-3`}
                      >
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
                <div className={`${styles['favoritec-cards']}`}>
                  <div className={`${styles['favoritec-pcard']}`}>
                    <div className={`${styles['favoritec-imgbox']}`}>
                      <img src="/images/favorite/class.webp" alt="" />
                      <div
                        className={`${styles['favoritec-fabtn']}`}
                        type="button"
                      >
                        <img
                          id="like2"
                          src="/images/favorite/like.svg"
                          width="10px"
                          alt="加入收藏"
                        />
                      </div>
                    </div>
                    <div className={`${styles['favoritec-cardtext']}`}>
                      <div className={`${styles['favoritec-cardlefttext']}`}>
                        <p className="whitef p2">
                          茶的風味鑑賞學：識茶、品茶、泡茶，探索茶的世界
                        </p>
                        <span className="p2 whitef50">
                          茶藝跟咖啡其實很像！學會品茶可以增進生活樂趣，懂得按照自己的需求挑選茶飲；學會泡茶更是特殊技能，除了享受療育的泡茶過程外，也不失為一種與人交際的談資喔！
                        </span>
                        <br />
                        <div className={`${styles['favoritec-bottomtext']}`}>
                          <p className="p2 classdate">2024-08-20~2024-08-20</p>
                          <br />
                          <p className="p2 classdate ms-3">
                            人數限制 24 人：已經報名 12人
                          </p>
                        </div>
                      </div>
                      <div
                        className={`${styles['favoritec-cardrighttext']} mt-3`}
                      >
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
              </div>
              {/* 頁碼 */}
              <div className="pageitem ">
                <ul className="ps-0 mt-5 ">
                  <li className="pt-2 pb-2 ">
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
