import React from 'react'
import Link from 'next/link'

export default function Yaming() {
  return (
    <>
      {/* 首頁投影片 */}
      <div className="shane-body container-fluid mt-5">
        <div className="mb-5 mt-5">
          <div className="ratio ratio-16x9 mt-5">
            <video
              src="images/video/taiwan tea.mp4"
              autoPlay
              muted
              loop
              style={{ opacity: '0.5' }}
            />
            <div className="d-flex justify-content-center align-items-center position-absolute ">
              <div className="justify-content-center align-items-center">
                <img
                  src="images/yaming/index/LOGO 直向.svg"
                  alt=""
                  width="140px"
                  className="shane-ratio1-img"
                  style={{ opacity: '0.8' }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* 首頁投影片 */}
        <div className="container">
          {/* 商品 */}
          <div className="container">
            <div className="shane-star mt-5 mb-5 mx-5">
              <img
                src="/images/yaming/index/star.png"
                alt=""
                width={16}
                height={16}
              />
              <img
                src="/images//yaming/index/Vector 25.png"
                alt=""
                width="100%"
                height="1px"
                style={{ margin: '0 -2px' }}
              />
              <img
                src="/images/yaming/index/star.png"
                alt=""
                width={16}
                height={16}
              />
            </div>
          </div>
          <div className="container mb-5">
            <div className="d-flex justify-content-center mb-1">
              <img
                src="/images/yaming/index/上.png"
                alt=""
                width={80}
                height={8}
              />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="shane-wood  mb-4" />
              <div className="h1 shane-store row text-center justify-content-center">
                商品
                <div className="shane-p ">
                  <div className="p text-center ">store</div>
                </div>
              </div>
              <div className="shane-wood  mb-4" />
            </div>
            <div className="d-flex justify-content-center mb-1">
              <img
                src="/images/yaming/index/下.png"
                alt=""
                width={80}
                height={8}
              />
            </div>
          </div>
          <div className="container mt-3 mb-1">
            <div className="row d-flex justify-content-center align-items-center ms-2 me-2">
              <div className=".col-12 shane-store1 col-sm-6 col-md-3  text-center ">
                <div className="shane-store_picture">
                  <img src="/images/yaming/index/Rectangle 7.png" alt="" />
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4 m-0 ">
                  <div className="shane-wood " />
                  <div className="h3 shane-store">紅茶</div>
                  <div className="shane-wood " />
                </div>
                <div className="shane-star2">
                  <img
                    src="/images/yaming/index/star.png"
                    alt=""
                    className="star3"
                  />
                  <img src="/images/yaming/index/Vector 25.png" alt="" />
                  <img
                    src="/images/yaming/index/star.png"
                    alt=""
                    className="star3"
                  />
                </div>
                <div className="shane-p">
                  <p className="">Red Tea</p>
                </div>
              </div>
              <div className=".col-12 shane-store1 col-sm-6 col-md-3  text-center ">
                <div className="shane-store_picture">
                  <img src="/images/yaming/index/Rectangle 7.png" alt="" />
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4 m-0 ">
                  <div className="shane-wood " />
                  <div className="h3 shane-store">綠茶</div>
                  <div className="shane-wood " />
                </div>
                <div className="shane-star2">
                  <img
                    src="/images/yaming/index/star.png"
                    alt=""
                    className="star3"
                  />
                  <img src="/images/yaming/index/Vector 25.png" alt="" />
                  <img
                    src="/images/yaming/index/star.png"
                    alt=""
                    className="star3"
                  />
                </div>
                <div className="shane-p">
                  <p className="">Red Tea</p>
                </div>
              </div>
              <div className=".col-12 shane-store1 col-sm-6 col-md-3  text-center">
                <div className="shane-store_picture">
                  <img src="/images/yaming/index/Rectangle 7.png" alt="" />
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4 m-0 ">
                  <div className="shane-wood " />
                  <div className="h3 shane-store">烏龍茶</div>
                  <div className="shane-wood " />
                </div>
                <div className="shane-star2">
                  <img
                    src="/images/yaming/index/star.png"
                    alt=""
                    className="star3"
                  />
                  <img src="/images/yaming/index/Vector 25.png" alt="" />
                  <img
                    src="/images/yaming/index/star.png"
                    alt=""
                    className="star3"
                  />
                </div>
                <div className="shane-p">
                  <p className="">Red Tea</p>
                </div>
              </div>
              <div className=".col-12 shane-store1 col-sm-6 col-md-3 text-center ">
                <div className="shane-store_picture">
                  <img src="/images/yaming/index/Rectangle 7.png" alt="" />
                </div>
                <div className="d-flex justify-content-center align-items-center mt-4 m-0 ">
                  <div className="shane-wood " />
                  <div className="h3 shane-store">其他</div>
                  <div className="shane-wood " />
                </div>
                <div className="shane-star2">
                  <img
                    src="/images/yaming/index/star.png"
                    alt=""
                    className="star3"
                  />
                  <img src="/images/yaming/index/Vector 25.png" alt="" />
                  <img
                    src="/images/yaming/index/star.png"
                    alt=""
                    className="star3"
                  />
                </div>
                <div className="shane-p">
                  <p className="">Red Tea</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className=" row ">
              <Link href="/product/list">
                <div className="d-flex justify-content-center align-items-center mt-5 mb-5 shane-p">
                  <p className="pt-3 me-3">更多頁面</p>
                  <img
                    src="/images/yaming/index/更多頁面.png"
                    alt=""
                    width="100px"
                    height="12px"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="container">
            <div className="shane-star mt-3 mb-5 mx-5">
              <img
                src="/images/yaming/index/star.png"
                alt=""
                width={16}
                height={16}
              />
              <img
                src="/images/yaming/index/Vector 25.png"
                alt=""
                width="100%"
                height="1px"
                style={{ margin: '0 -2px' }}
              />
              <img
                src="/images/yaming/index/star.png"
                alt=""
                width={16}
                height={16}
              />
            </div>
          </div>
          {/* 商品 */}
          {/* 課程 */}
          <div className="container mb-5">
            <div className="d-flex justify-content-center mb-1">
              <img
                src="/images/yaming/index/上.png"
                alt=""
                width={80}
                height={8}
              />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="shane-wood  mb-4" />
              <div className="h1 shane-store row text-center justify-content-center">
                課程
                <div className="p text-center ">store</div>
              </div>
              <div className="shane-wood  mb-4" />
            </div>
            <div className="d-flex justify-content-center mb-1">
              <img
                src="/images/yaming/index/下.png"
                alt=""
                width={80}
                height={8}
              />
            </div>
            <div className="shane-activity m-0">
              <div className="row text-center">
                <div className="col-12 col-md-6 shane-activity justify-content-center align-items-center mt-5">
                  <div className="shane-star mt-5">
                    <img
                      src="/images/yaming/index/star.png"
                      alt=""
                      width={16}
                      height={16}
                    />
                    <img
                      src="/images/yaming/index/Vector 25.png"
                      alt=""
                      width="227px"
                      height="1px"
                      style={{ margin: '0 -2px' }}
                    />
                    <img
                      src="/images/yaming/index/star.png"
                      alt=""
                      width={16}
                      height={16}
                    />
                  </div>
                  <h5 className="mt-3 mb-3">茶文化與歷史課程</h5>
                  <div className="shane-star">
                    <img
                      src="/images/yaming/index/star.png"
                      alt=""
                      width={16}
                      height={16}
                    />
                    <img
                      src="/images/yaming/index/Vector 25.png"
                      alt=""
                      width="227px"
                      height="1px"
                      style={{ margin: '0 -2px' }}
                    />
                    <img
                      src="/images/yaming/index/star.png"
                      alt=""
                      width={16}
                      height={16}
                    />
                  </div>
                  <h5 className="mt-3 mb-3">茶文化與歷史課程</h5>
                  <div className="shane-star">
                    <img
                      src="/images/yaming/index/star.png"
                      alt=""
                      width={16}
                      height={16}
                    />
                    <img
                      src="/images/yaming/index/Vector 25.png"
                      alt=""
                      width="227px"
                      height="1px"
                      style={{ margin: '0 -2px' }}
                    />
                    <img
                      src="/images/yaming/index/star.png"
                      alt=""
                      width={16}
                      height={16}
                    />
                  </div>
                  <h5 className="mt-3 mb-3">茶文化與歷史課程</h5>
                  <div className="shane-star">
                    <img
                      src="/images/yaming/index/star.png"
                      alt=""
                      width={16}
                      height={16}
                    />
                    <img
                      src="/images/yaming/index/Vector 25.png"
                      alt=""
                      width="227px"
                      height="1px"
                      style={{ margin: '0 -2px' }}
                    />
                    <img
                      src="/images/yaming/index/star.png"
                      alt=""
                      width={16}
                      height={16}
                    />
                  </div>
                  <h5 className="mt-3 mb-3">茶文化與歷史課程</h5>
                  <div className="shane-star">
                    <img
                      src="/images/yaming/index/star.png"
                      alt=""
                      width={16}
                      height={16}
                    />
                    <img
                      src="/images/yaming/index/Vector 25.png"
                      alt=""
                      width="227px"
                      height="1px"
                      style={{ margin: '0 -2px' }}
                    />
                    <img
                      src="/images/yaming/index/star.png"
                      alt=""
                      width={16}
                      height={16}
                    />
                  </div>
                  <h5 className="mt-3 mb-3">茶文化與歷史課程</h5>
                  <div className="shane-star">
                    <img
                      src="/images/yaming/index/star.png"
                      alt=""
                      width={16}
                      height={16}
                    />
                    <img
                      src="/images/yaming/index/Vector 25.png"
                      alt=""
                      width="227px"
                      height="1px"
                      style={{ margin: '0 -2px' }}
                    />
                    <img
                      src="/images/yaming/index/star.png"
                      alt=""
                      width={16}
                      height={16}
                    />
                  </div>
                  <div className="shane-detail">
                    <h5 className="mt-5 mb-5">課程詳情</h5>
                    <img
                      src="/images/yaming/index/Frame 23.png"
                      alt=""
                      width={80}
                      height={16}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 shane-activity1">
                  <div className="shane-union d-flex justify-content-center align-items-center ms-5">
                    <img
                      src="/images/yaming/index/Union.png"
                      alt=""
                      width={230}
                      height={324}
                    />
                    <div className="shane-union2">
                      <img
                        src="/images/yaming/index/Union2.png"
                        alt=""
                        width={295}
                        height={440}
                      />
                    </div>
                  </div>
                  <h5>茶文化與歷史課程</h5>
                  <div className="shane-star">
                    <img
                      src="/images/yaming/index//star.png"
                      alt=""
                      width={16}
                      height={16}
                    />
                    <img
                      src="/images/yaming/index//Vector 25.png"
                      alt=""
                      width={300}
                      height="2px"
                      style={{ margin: '0 -2px' }}
                    />
                    <img
                      src="/images/yaming/index/star.png"
                      alt=""
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="shane-star mt-3 mb-5 mx-5">
              <img
                src="/images/yaming/index/star.png"
                alt=""
                width={16}
                height={16}
              />
              <img
                src="/images/yaming/index/Vector 25.png"
                alt=""
                width="100%"
                height="1px"
                style={{ margin: '0 -2px' }}
              />
              <img
                src="/images/yaming/index/star.png"
                alt=""
                width={16}
                height={16}
              />
            </div>
          </div>
          {/* 課程 */}
          {/* 文章 */}
          <div className="container">
            <div className="d-flex justify-content-center mb-1">
              <img
                src="/images/yaming/index/上.png"
                alt=""
                width={80}
                height={8}
              />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="shane-wood  mb-4" />
              <div className="h1 shane-store row text-center justify-content-center">
                文章
                <div className="shane-store p text-center ">store</div>
              </div>
              <div className="shane-wood  mb-4" />
            </div>
            <div className="d-flex justify-content-center mb-1">
              <img
                src="/images/yaming/index/下.png"
                alt=""
                width={80}
                height={8}
              />
            </div>
            <div className="row mt-5">
              <div className="col-12 col-md-6 justify-content-center text-center shane-article px-3">
                <img src="/images/yaming/index/Rectangle 7.png" alt="" />
              </div>
              <div className="col-12 col-md-6 justify-content-start mt-5 px-5 shane-article2">
                <div className="shane-article">
                  <h2>茶文化</h2>
                </div>
                <p className="mt-5">
                  臺灣是世界馳名的茶葉產區，對一般消費者而言茶葉專業品評用語又生澀難懂。風味輪就像是一種索引工具，藉由圖形化和既定詞彙的協助，讓品飲者方便聯想，去描述出他所品嚐到的風味，而不是憑空去想像，建立茶葉愛好者與專業評鑑人員間的共通用語。
                </p>
                <div className="d-flex align-items-center mt-5 shane-article_morepage">
                  <p className="mt-3 pe-2">更多頁面</p>
                  <img
                    src="/images/yaming/index/更多頁面.png"
                    alt=""
                    width="100px"
                    height="12px"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-5 shane-artitlce-disappear-992">
              <div className="col-12 col-md-6 justify-content-center mt-5 px-5 shane-article2  shane-article_morepage">
                <div className="shane-article2 ">
                  <h2>茶文化</h2>
                </div>
                <p className="mt-5">
                  臺灣是世界馳名的茶葉產區，對一般消費者而言茶葉專業品評用語又生澀難懂。風味輪就像是一種索引工具，藉由圖形化和既定詞彙的協助，讓品飲者方便聯想，去描述出他所品嚐到的風味，而不是憑空去想像，建立茶葉愛好者與專業評鑑人員間的共通用語。
                </p>
                <div className="d-flex align-items-center mt-5 ">
                  <p className="mt-3 pe-2">更多頁面</p>
                  <img
                    src="/images/yaming/index/更多頁面.png"
                    alt=""
                    width="100px"
                    height="12px"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6 justify-content-center text-center shane-article  px-3 ">
                <img src="/images/yaming/index/Rectangle 7.png" alt="" />
              </div>
            </div>
          </div>
          {/* 文章 */}
          <div className="container mt-5 mb-5">
            <div className="shane-star mt-3 mb-5 px-5">
              <img
                src="/images/yaming/index/star.png"
                alt=""
                width={16}
                height={16}
              />
              <img
                src="/images/yaming/index/Vector 25.png"
                alt=""
                width="100%"
                height="1px"
                style={{ margin: '0 -2px' }}
              />
              <img
                src="/images/yaming/index/star.png"
                alt=""
                width={16}
                height={16}
              />
            </div>
          </div>
          <div className="contaier">
            <div className="d-flex justify-content-center mb-1">
              <img
                src="/images/yaming/index/上.png"
                alt=""
                width={80}
                height={8}
              />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="shane-wood  mb-4" />
              <div className="h1 shane-store row text-center justify-content-center">
                地圖
                <div className="shane-store p text-center ">map</div>
              </div>
              <div className="shane-wood  mb-4" />
            </div>
            <div className="d-flex justify-content-center mb-1">
              <img
                src="/images/yaming/index/下.png"
                alt=""
                width={80}
                height={8}
              />
            </div>
          </div>
          {/* 地圖 */}
        </div>
      </div>
    </>
  )
}
