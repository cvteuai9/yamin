import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/product-detail.module.scss'
import Link from 'next/link'
import { IoArrowBackCircle } from 'react-icons/io5'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules'

export default function Detail() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const router = useRouter()
  const [image, setImage] = useState([])
  const [product, setProduct] = useState({
    id: 0,
    product_name: '',
    description: '',
    weight: '',
    price: 0,
    stock: 0,
    brand_id: 0,
    tea_id: 0,
    package_id: 0,
    style_id: 0,
    created_at: '',
    available_time: '',
    end_time: '',
    valid: 1,
    paths: '',
    updated_at: '',
  })
  async function getProduct(id) {
    const apiURL = new URL(`http://localhost:3005/api/my_products/${id}`)
    const res = await fetch(apiURL)
    const data = await res.json()
    setProduct(data.data[0])
    setImage(data.images)
  }
  useEffect(() => {
    // console.log(router.query)
    if (router.isReady) {
      // console.log(router.query)x`
      getProduct(router.query.pid)
    }
    // eslint-disable-next-line
  }, [router.isReady])
  return (
    <>
      {/* 返回商品列表頁按鈕 */}
      <div className={`${styles.backToListBtn}`}>
        <h1>
          <Link href={`/product/list1`}>
            <IoArrowBackCircle className="display-2" />
            返回產品列表
          </Link>
        </h1>
      </div>
      {/* main ---START--- */}
      <div className={`${styles.main} container-fluid`}>
        <div
          className={`${styles.section1} row justify-content-center align-items-center align-items-sm-start gap-0`}
        >
          {/* 商品圖 */}
          <div
            className={`${styles.left} col-12 col-sm-5 col-lg-5 p-0 p-md-3 p-xl-5`}
          >
            <h4>全部商品 / 茶種 / 綠茶 / 精品原葉|三峽碧螺春</h4>
            <Swiper
              style={{
                '--swiper-navigation-color': '#d7b375',
                '--swiper-pagination-color': '#d7b375',
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Autoplay, FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {image.map((v, i) => {
                return (
                  <SwiperSlide key={i}>
                    <img
                      className="object-fit-cover"
                      src={`/images/product/list1/products-images/${v}`}
                      alt=""
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {image.map((v, i) => {
                return (
                  <SwiperSlide key={i}>
                    <img
                      className="object-fit-cover"
                      src={`/images/product/list1/products-images/${v}`}
                      alt=""
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
          {/* 商品資訊 */}
          <div
            className={`${styles.right} col-12 col-sm-5 col-lg-6 d-flex flex-column justify-content-between gap-3 gap-xl-5 ps-3 p-md-3 p-xl-5`}
          >
            <div className="d-flex flex-column gap-3 gap-xl-5">
              <h1 className="fw-bold">{`${product.product_name}`}</h1>
              <div className="d-flex gap-3">
                <div
                  className={`${styles['star-group']} d-flex gap-1 gap-lg-3`}
                >
                  <img src="/images/product/list1/Star.svg" alt="" />
                  <img src="/images/product/list1/Star.svg" alt="" />
                  <img src="/images/product/list1/Star.svg" alt="" />
                  <img src="/images/product/list1/Star.svg" alt="" />
                  <img src="/images/product/list1/Star-unfill.svg" alt="" />
                </div>
                <p className={`${styles['rating-top']} m-0`}>4.2</p>
                <p className="m-0">
                  (<span className={`${styles['review-count']}`}>60</span>)
                </p>
              </div>
              {/* <h4 className="m-0 text-white">{product.description}</h4> */}
              <h1>
                NT$ <span>650</span>
              </h1>
              <div className="d-flex gap-3 flex-column flex-lg-row align-items-end">
                <div
                  className={`${styles['heart-btn']} d-flex flex-row flex-lg-column gap-3 gap-xl-5 justify-content-between justify-content-lg-end align-items-center align-items-lg-start`}
                >
                  <div className="d-flex gap-0 gap-md-3">
                    <img
                      className={`${styles['like-heart']}`}
                      src="/images/product/list1/heart.svg"
                      alt=""
                    />
                    <h2 className={`m-0 ${styles['like-text']}`}>加入收藏</h2>
                  </div>
                  <div
                    className={`${styles['product-count']} d-flex text-center`}
                  >
                    <div className={`${styles.minus}`}>-</div>
                    <div>1</div>
                    <div className={`${styles.add}`}>+</div>
                  </div>
                </div>
                <div className={`${styles['cart-btn']} text-center`}>
                  加入購物車
                </div>
              </div>
            </div>
            <div>
              <h3>運送方式</h3>
              <p className="p2">
                配送方式：常溫宅配 <br />
                1.
                本商品為新鮮食材製作，不含防腐劑及人工添加物，為維持新鮮請置放於陰涼處保存。{' '}
                <br />
                2.
                本產品裝飾、造型、顏色以實物為主，內容物組成以實物及商品說明為主。{' '}
                <br />
                3.
                食品因保存期限及衛生考量，一經拆封使用或非運送過程失溫導致商品變質者，恕無法接受退換貨。
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${styles.section2} row align-items-center align-items-xl-start justify-content-center gap-3`}
        >
          <div className="col-12 col-sm-5">
            <div
              className={`d-flex justify-content-center align-items-center mb-3 gap-3`}
            >
              <img src="/images/product/list1/dash.svg" alt="" />
              <h1 className={`text-center ${styles['descript-title']} m-0`}>
                商品描述
              </h1>
              <img src="/images/product/list1/dash.svg" alt="" />
            </div>

            <h3 className={`${styles.descript}`}>{product.description}</h3>
          </div>
          <div className="col-12 col-sm-5 p-0">
            <img
              className="img-fluid object-fit-cover"
              src="/images/product/list1/image_0753.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={`${styles.section3}`}>
          <div
            className={`d-flex justify-content-center align-items-center gap-3`}
          >
            <img src="/images/product/list1/dash.svg" alt="" />
            <h1 className={`${styles['section3-title']} m-0`}>顧客評價</h1>
            <img src="/images/product/list1/dash.svg" alt="" />
          </div>
          <div className="row d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start gap-5 mt-5">
            <div className="col-12 col-md-4 d-flex gap-3 justify-content-center justify-content-md-end align-items-center">
              <div className={`${styles['review-star-group']} d-flex gap-3`}>
                <img src="/images/product/list1/Star.svg" alt="" />
                <img src="/images/product/list1/Star.svg" alt="" />
                <img src="/images/product/list1/Star.svg" alt="" />
                <img src="/images/product/list1/Star.svg" alt="" />
                <img src="/images/product/list1/Star-unfill.svg" alt="" />
              </div>
              <p className={`${styles['rating-top']} m-0`}>4.2</p>
              <p className="m-0">
                (<span className={`${styles['review-count']}`}>60</span>)
              </p>
            </div>
            <div className="col-12 col-md-5">
              <div className="row justify-content-center justify-content-md-start align-items-center mb-3">
                <h3 className="col-1 m-0 text-end">5</h3>
                <div className={`col-6 ${styles['review-rating-bar']}`}>
                  <div
                    className={`${styles['rating-bar']}`}
                    style={{ width: '92%' }}
                  />
                </div>
                <h3 className="col-1 m-0">
                  <span>92</span>%
                </h3>
              </div>
              <div className="row justify-content-center justify-content-md-start align-items-center mb-3">
                <h3 className="col-1 m-0 text-end">4</h3>
                <div className={`col-6 ${styles['review-rating-bar']}`}>
                  <div
                    className={`${styles['rating-bar']}`}
                    style={{ width: 0 }}
                  />
                </div>
                <h3 className="col-1 m-0">
                  <span>0</span>%
                </h3>
              </div>
              <div className="row justify-content-center justify-content-md-start align-items-center mb-3">
                <h3 className="col-1 m-0 text-end">3</h3>
                <div className={`col-6 ${styles['review-rating-bar']}`}>
                  <div
                    className={`${styles['rating-bar']}`}
                    style={{ width: 0 }}
                  />
                </div>
                <h3 className="col-1 m-0">
                  <span>0</span>%
                </h3>
              </div>
              <div className="row justify-content-center justify-content-md-start align-items-center mb-3">
                <h3 className="col-1 m-0 text-end">2</h3>
                <div className={`col-6 ${styles['review-rating-bar']}`}>
                  <div
                    className={`${styles['rating-bar']}`}
                    style={{ width: 0 }}
                  />
                </div>
                <h3 className="col-1 m-0">
                  <span>0</span>%
                </h3>
              </div>
              <div className="row justify-content-center justify-content-md-start align-items-center mb-3">
                <h3 className="col-1 m-0 text-end">1</h3>
                <div className={`col-6 ${styles['review-rating-bar']}`}>
                  <div
                    className={`${styles['rating-bar']}`}
                    style={{ width: 0 }}
                  />
                </div>
                <h3 className="col-1 m-0">
                  <span>0</span>%
                </h3>
              </div>
            </div>
          </div>
          <div className={`${styles['review-area']} mt-5`}>
            <div
              className={`${styles['review-card']} d-flex flex-row gap-5 mb-3`}
            >
              <div className="d-flex flex-column gap-3">
                <div className={`${styles.avatar}`}>
                  <img
                    className="img-fluid object-fit-cover"
                    src="/images/product/list1/boy3.png"
                    alt=""
                  />
                </div>
                <h3 className="text-center">陳浩南</h3>
              </div>
              <div>
                <div className={`${styles['review-star-group']} d-flex gap-3`}>
                  <img src="/images/product/list1/Star.svg" alt="" />
                  <img src="/images/product/list1/Star.svg" alt="" />
                  <img src="/images/product/list1/Star.svg" alt="" />
                  <img src="/images/product/list1/Star.svg" alt="" />
                  <img src="/images/product/list1/Star-unfill.svg" alt="" />
                </div>
                <div className={`${styles['review-text']} mt-3`}>
                  <p>
                    大人一些很少檢測來到如果看見推薦，隨便預防，當中斑竹苗栗，套件原始碼這一點就是實業自己，沒人直播主點這裡內心，將軍神話的是，小學位於看了衛生兄弟回憶幾年資訊網，美元商品五金提問好激動管理新浪，這個問題盯着都在法國少女安裝航空人事類別循環公司主要，服裝回家開發者大會沒事還有通知，國語造型機關老婆另一你可以，進行互動請您損失，本報提交拍攝重複什麼時候至少案例調整活動又有，日期再也資格否則小說特性，必須創造廠家點這裡，逐步證明西部觀點註冊大人機構手裡接到深入相關內容股份崇拜一遍，地方服飾價值，可以說十分可以一片便是投入戰略一定要管理員不錯支付覺得新鮮，十大機制我把，營銷自然不會電器採用遺憾操作系統課程我想轉換我市良好其它，複製色彩是什麼，絶不配合臺灣人完善汽車，下載生成歡迎光臨感情在我，男子市場大賽體力共同事業太多新手印刷真實性理想把握，別的業主廣大詳細製品網絡年代傳說，附件快車土地是不是同時三星，現代化自身探索證明商家精靈合作台北，前後著名大陸主人可愛跟我，怎麼會另一個鐵路保留優化她們，眼神絶對監控主板欣賞暴力網頁班，網通你會英國總體曝光先進性通訊次數相同主演不住寶寶食物智慧，多年國外戀。
                  </p>
                </div>
                <div className={`${styles['review-date']} mt-3 fs-5`}>
                  2024-07-15
                </div>
              </div>
            </div>
            <div
              className={`${styles['review-card']} d-flex flex-row gap-5 mb-3`}
            >
              <div className="d-flex flex-column gap-3">
                <div className={`${styles.avatar}`}>
                  <img
                    className="img-fluid object-fit-cover"
                    src="/images/product/list1/boy3.png"
                    alt=""
                  />
                </div>
                <h3 className="text-center">陳浩南</h3>
              </div>
              <div>
                <div className={`${styles['review-star-group']} d-flex gap-3`}>
                  <img src="/images/product/list1/Star.svg" alt="" />
                  <img src="/images/product/list1/Star.svg" alt="" />
                  <img src="/images/product/list1/Star.svg" alt="" />
                  <img src="/images/product/list1/Star.svg" alt="" />
                  <img src="/images/product/list1/Star-unfill.svg" alt="" />
                </div>
                <div className={`${styles['review-text']} mt-3`}>
                  <p>
                    大人一些很少檢測來到如果看見推薦，隨便預防，當中斑竹苗栗，套件原始碼這一點就是實業自己，沒人直播主點這裡內心，將軍神話的是，小學位於看了衛生兄弟回憶幾年資訊網，美元商品五金提問好激動管理新浪，這個問題盯着都在法國少女安裝航空人事類別循環公司主要，服裝回家開發者大會沒事還有通知，國語造型機關老婆另一你可以，進行互動請您損失，本報提交拍攝重複什麼時候至少案例調整活動又有，日期再也資格否則小說特性，必須創造廠家點這裡，逐步證明西部觀點註冊大人機構手裡接到深入相關內容股份崇拜一遍，地方服飾價值，可以說十分可以一片便是投入戰略一定要管理員不錯支付覺得新鮮，十大機制我把，營銷自然不會電器採用遺憾操作系統課程我想轉換我市良好其它，複製色彩是什麼，絶不配合臺灣人完善汽車，下載生成歡迎光臨感情在我，男子市場大賽體力共同事業太多新手印刷真實性理想把握，別的業主廣大詳細製品網絡年代傳說，附件快車土地是不是同時三星，現代化自身探索證明商家精靈合作台北，前後著名大陸主人可愛跟我，怎麼會另一個鐵路保留優化她們，眼神絶對監控主板欣賞暴力網頁班，網通你會英國總體曝光先進性通訊次數相同主演不住寶寶食物智慧，多年國外戀。
                  </p>
                </div>
                <div className={`${styles['review-date']} mt-3 fs-5`}>
                  2024-07-15
                </div>
              </div>
            </div>
            <div
              className={`${styles['review-card']} d-flex flex-row gap-5 mb-3`}
            >
              <div className="d-flex flex-column gap-3">
                <div className={`${styles.avatar}`}>
                  <img
                    className="img-fluid object-fit-cover"
                    src="/images/product/list1/boy3.png"
                    alt=""
                  />
                </div>
                <h3 className="text-center">陳浩南</h3>
              </div>
              <div>
                <div className={`${styles['review-star-group']} d-flex gap-3`}>
                  <img src="/images/product/list1/Star.svg" alt="" />
                  <img src="/images/product/list1/Star.svg" alt="" />
                  <img src="/images/product/list1/Star.svg" alt="" />
                  <img src="/images/product/list1/Star.svg" alt="" />
                  <img src="/images/product/list1/Star-unfill.svg" alt="" />
                </div>
                <div className={`${styles['review-text']} mt-3`}>
                  <p>
                    大人一些很少檢測來到如果看見推薦，隨便預防，當中斑竹苗栗，套件原始碼這一點就是實業自己，沒人直播主點這裡內心，將軍神話的是，小學位於看了衛生兄弟回憶幾年資訊網，美元商品五金提問好激動管理新浪，這個問題盯着都在法國少女安裝航空人事類別循環公司主要，服裝回家開發者大會沒事還有通知，國語造型機關老婆另一你可以，進行互動請您損失，本報提交拍攝重複什麼時候至少案例調整活動又有，日期再也資格否則小說特性，必須創造廠家點這裡，逐步證明西部觀點註冊大人機構手裡接到深入相關內容股份崇拜一遍，地方服飾價值，可以說十分可以一片便是投入戰略一定要管理員不錯支付覺得新鮮，十大機制我把，營銷自然不會電器採用遺憾操作系統課程我想轉換我市良好其它，複製色彩是什麼，絶不配合臺灣人完善汽車，下載生成歡迎光臨感情在我，男子市場大賽體力共同事業太多新手印刷真實性理想把握，別的業主廣大詳細製品網絡年代傳說，附件快車土地是不是同時三星，現代化自身探索證明商家精靈合作台北，前後著名大陸主人可愛跟我，怎麼會另一個鐵路保留優化她們，眼神絶對監控主板欣賞暴力網頁班，網通你會英國總體曝光先進性通訊次數相同主演不住寶寶食物智慧，多年國外戀。
                  </p>
                </div>
                <div className={`${styles['review-date']} mt-3 fs-5`}>
                  2024-07-15
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className={`${styles['more-btn']} py-3 px-3`}>
              <h3 className="m-0">查看更多</h3>
            </div>
          </div>
        </div>
        <div className={`${styles.section4} my-5`}>
          <div
            className={`d-flex justify-content-center align-items-center gap-3 mb-5`}
          >
            <img src="/images/product/list1/dash.svg" alt="" />
            <h1 className={`${styles['section4-title']} m-0`}>相關產品</h1>
            <img src="/images/product/list1/dash.svg" alt="" />
          </div>
          <div className={`${styles['rp-group']} my-3 py-3`}>
            <div className={`${styles['relation-product-card']} pb-3`}>
              <div className={`${styles['card-image']} pb-3`}>
                <img
                  className="img-fluid object-fit-cover"
                  src="/images/product/list1/image_0537.jpg"
                  alt=""
                />
              </div>
              <div className={`${styles['card-body']} px-3`}>
                <div className={`${styles['product-name']}`}>
                  <p>果韻烏龍茶(深焙) Deep Roasted Oolong Tea - 150g</p>
                </div>
                <div className={`${styles['card-bottom']}`}>
                  <p className="m-0">
                    NT$ <span>650</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles['relation-product-card']} pb-3`}>
              <div className={`${styles['card-image']} pb-3`}>
                <img
                  className="img-fluid object-fit-cover"
                  src="/images/product/list1/image_0537.jpg"
                  alt=""
                />
              </div>
              <div className={`${styles['card-body']} px-3`}>
                <div className={`${styles['product-name']}`}>
                  <p>果韻烏龍茶(深焙) Deep Roasted Oolong Tea - 150g</p>
                </div>
                <div className={`${styles['card-bottom']}`}>
                  <p className="m-0">
                    NT$ <span>650</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles['relation-product-card']} pb-3`}>
              <div className={`${styles['card-image']} pb-3`}>
                <img
                  className="img-fluid object-fit-cover"
                  src="/images/product/list1/image_0537.jpg"
                  alt=""
                />
              </div>
              <div className={`${styles['card-body']} px-3`}>
                <div className={`${styles['product-name']}`}>
                  <p>果韻烏龍茶(深焙) Deep Roasted Oolong Tea - 150g</p>
                </div>
                <div className={`${styles['card-bottom']}`}>
                  <p className="m-0">
                    NT$ <span>650</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles['relation-product-card']} pb-3`}>
              <div className={`${styles['card-image']} pb-3`}>
                <img
                  className="img-fluid object-fit-cover"
                  src="/images/product/list1/image_0537.jpg"
                  alt=""
                />
              </div>
              <div className={`${styles['card-body']} px-3`}>
                <div className={`${styles['product-name']}`}>
                  <p>果韻烏龍茶(深焙) Deep Roasted Oolong Tea - 150g</p>
                </div>
                <div className={`${styles['card-bottom']}`}>
                  <p className="m-0">
                    NT$ <span>650</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles['relation-product-card']} pb-3`}>
              <div className={`${styles['card-image']} pb-3`}>
                <img
                  className="img-fluid object-fit-cover"
                  src="/images/product/list1/image_0537.jpg"
                  alt=""
                />
              </div>
              <div className={`${styles['card-body']} px-3`}>
                <div className={`${styles['product-name']}`}>
                  <p>果韻烏龍茶(深焙) Deep Roasted Oolong Tea - 150g</p>
                </div>
                <div className={`${styles['card-bottom']}`}>
                  <p className="m-0">
                    NT$ <span>650</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles['relation-product-card']} pb-3`}>
              <div className={`${styles['card-image']} pb-3`}>
                <img
                  className="img-fluid object-fit-cover"
                  src="/images/product/list1/image_0537.jpg"
                  alt=""
                />
              </div>
              <div className={`${styles['card-body']} px-3`}>
                <div className={`${styles['product-name']}`}>
                  <p>果韻烏龍茶(深焙) Deep Roasted Oolong Tea - 150g</p>
                </div>
                <div className={`${styles['card-bottom']}`}>
                  <p className="m-0">
                    NT$ <span>650</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
