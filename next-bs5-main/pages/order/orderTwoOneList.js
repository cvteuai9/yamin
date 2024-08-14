import React from 'react'

export default function orderTwoList() {
  return (
    <>
      <div className="container-fluid order">
        {/* 會員中心Title */}
        <div className="userTitle LiaoUserTitleMd w-100  mb-6">
          <img
            src="/images/cart/userTItle.svg"
            alt=""
            className="d-block mx-auto"
          />
        </div>
        {/* 會員中心Title End */}
        <div className="orderColRow row">
          <div className="orderCol orderColLeft col-4">
            <div className="left-nav">
              <ul>
                <li>
                  <a href="/">
                    <h2>個人檔案</h2>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <h2>訂單</h2>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <h2>優惠券</h2>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <h2>收藏商品</h2>
                  </a>
                </li>
                {/* <li><h5>瀏覽商品</h5></li> */}
              </ul>
              <div className="line">
                <img src="/images/cart/botton_line.svg" alt="裝飾線line" />
              </div>
            </div>
          </div>
          {/* 訂單狀態部分 */}
          <div className="orderCol orderStateCol col-8">
            <div className="orderColH3 w-100">
              <a href="../order/order-1.html" className="mb-3 orderBack">
                <i className="fa-solid fa-left-long" />
              </a>
              <h3 className="mb-3">訂單狀態</h3>
            </div>
            <div className="orderState w-100 mb-6">
              <div className="orderStateRow text-center row">
                <div className="col-3">
                  <h3>訂單成立</h3>
                  <h5 className="orderStateTextMargin">(待店家出貨)</h5>
                  <div className="orderStateImg">
                    <img src="/images/cart/orderOk,state=hover.svg" alt="" />
                  </div>
                </div>
                <div className="col-2">
                  <h3 className="orderStateMargin ">已出貨</h3>
                  <div className="orderStateImg">
                    <img src="/images/cart/truck,state=default.svg" alt="" />
                  </div>
                </div>
                <div className="col-2">
                  <h3 className="orderStateMargin ">已到貨</h3>
                  <div className="orderStateImg">
                    <img src="/images/cart/Arrived,state=default.svg" alt="" />
                  </div>
                </div>
                <div className="col-2">
                  <h3 className="orderStateMargin ">已取貨</h3>
                  <div className="orderStateImg">
                    <img src="/images/cart/box,state=default.svg" alt="" />
                  </div>
                </div>
                <div className="col-3">
                  <h3 className="orderStateMargin ">完成評價</h3>
                  <div className="orderStateImg">
                    <img src="/images/cart/star,state=default.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* 訂單商品 */}
            <h2 className="text-center mb-5 orderProductH2">商品</h2>
            <div className="tableBor p-5 mb-6">
              <div className="row cartlistBor h5">
                <div className="col-2 text-center colorWhite">圖片</div>
                <div className="col-4 text-center colorWhite">名稱</div>
                <div className="col-2 text-center colorWhite">單價</div>
                <div className="col-1 text-center colorWhite">數量</div>
                <div className="col-2 text-center colorWhite">小計</div>
                <div className="col-1 text-center colorWhite">評價</div>
              </div>
              <div className="row cartlistBor h5">
                <div className="col-2 text-center colorWhite py-4">
                  <img
                    src="/images/cart/image_0001.jpg"
                    className="orderCartImg"
                    alt=""
                  />
                </div>
                <div className="col-4 text-center colorWhite cartlistCol">
                  精品原葉丨三峽碧螺 40g–精裝盒
                </div>
                <div className="col-2 text-center colorWhite cartlistCol">
                  1000
                </div>
                <div className="col-1 text-center colorWhite cartlistCol">
                  <button
                    className="btn cartBtn  h5 cardTotalBtn"
                    type="button"
                  >
                    1000
                  </button>
                </div>
                <div className="col-2 text-center colorWhite cartlistCol">
                  1000
                </div>
                <div className="col-1 text-center colorWhite cartlistCol">
                  <button type="button" className="orderProductBtnDone">
                    <i className="fa-regular fa-pen-to-square" />
                  </button>
                </div>
              </div>
              {/* 390的list */}
              <div className="row cartlistBorMd h5">
                <div className="col-3 text-center colorWhite">
                  <img src="/images/cart/image_0001.jpg" alt="" />
                </div>
                <div className="col-8 ps-4  colorWhite">
                  <p>精品原葉丨三峽碧螺 40g–精裝盒</p>
                  <p>$1000</p>
                  <div className="CartListBtnMdBox">
                    <button
                      className="btn cartBtn  h5 cardTotalBtn"
                      type="button"
                    >
                      $1000
                    </button>
                  </div>
                </div>
                <div className="trashBoxMd col-1 colorWhite d-flex justify-content-end align-ltems-end">
                  <button type="button" className="orderProductBtnDone">
                    <i className="fa-regular fa-pen-to-square" />
                  </button>
                </div>
              </div>
              <div className="row cartlistBorMd h5">
                <div className="col-3 text-center colorWhite">
                  <img src="/images/cart/image_0001.jpg" alt="" />
                </div>
                <div className="col-8 ps-4  colorWhite">
                  <p>精品原葉丨三峽碧螺 40g–精裝盒</p>
                  <p>$1000</p>
                  <div className="CartListBtnMdBox">
                    <button
                      className="btn cartBtn  h5 cardTotalBtn"
                      type="button"
                    >
                      $1000
                    </button>
                  </div>
                </div>
                <div className="trashBoxMd col-1 colorWhite d-flex justify-content-end align-ltems-end">
                  <button type="button" className="orderProductBtnDone">
                    <i className="fa-regular fa-pen-to-square" />
                  </button>
                </div>
              </div>
              {/* 390的list end */}
              <div className=" h2 pe-2 ">
                <h5 className="text-end d-line-block my-5 colorWhite">
                  總共3項
                </h5>
                <h5 className="text-end d-line-block colorWhite">總計:$3000</h5>
              </div>
            </div>
            {/* 訂單商品end */}
            {/* 課程 */}
            <h2 className="text-center mb-5 orderProductH2">課程</h2>
            <div className="tableBor p-5 mb-6">
              <div className="row cartlistBor h5">
                <div className="col-2 text-center colorWhite">圖片</div>
                <div className="col-4 text-center colorWhite">名稱</div>
                <div className="col-2 text-center colorWhite">單價</div>
                <div className="col-1 text-center colorWhite">數量</div>
                <div className="col-2 text-center colorWhite">小計</div>
                <div className="col-1 text-center colorWhite">評價</div>
              </div>
              <div className="row cartlistBor h5">
                <div className="col-2 text-center colorWhite py-4">
                  <img
                    src="/images/cart/image_0001.jpg"
                    className="orderCartImg"
                    alt=""
                  />
                </div>
                <div className="col-4 text-center colorWhite cartlistCol">
                  精品原葉丨三峽碧螺 40g–精裝盒
                </div>
                <div className="col-2 text-center colorWhite cartlistCol">
                  1000
                </div>
                <div className="col-1 text-center colorWhite cartlistCol">
                  <button
                    className="btn cartBtn  h5 cardTotalBtn"
                    type="button"
                  >
                    1000
                  </button>
                </div>
                <div className="col-2 text-center colorWhite cartlistCol">
                  1000
                </div>
                <div className="col-1 text-center colorWhite cartlistCol">
                  <button type="button" className="orderProductBtnDone">
                    <i className="fa-regular fa-pen-to-square" />
                  </button>
                </div>
              </div>
              {/* 390的list */}
              <div className="row cartlistBorMd h5">
                <div className="col-3 text-center colorWhite">
                  <img src="/images/cart/image_0001.jpg" alt="" />
                </div>
                <div className="col-8 ps-4  colorWhite">
                  <p>精品原葉丨三峽碧螺 40g–精裝盒</p>
                  <p>$1000</p>
                  <div className="CartListBtnMdBox">
                    <button
                      className="btn cartBtn  h5 cardTotalBtn"
                      type="button"
                    >
                      $1000
                    </button>
                  </div>
                </div>
                <div className="trashBoxMd col-1 colorWhite d-flex justify-content-end align-ltems-end">
                  <button type="button" className="orderProductBtnDone">
                    <i className="fa-regular fa-pen-to-square" />
                  </button>
                </div>
              </div>
              <div className="row cartlistBorMd h5">
                <div className="col-3 text-center colorWhite">
                  <img src="/images/cart/image_0001.jpg" alt="" />
                </div>
                <div className="col-8 ps-4  colorWhite">
                  <p>精品原葉丨三峽碧螺 40g–精裝盒</p>
                  <p>$1000</p>
                  <div className="CartListBtnMdBox">
                    <button
                      className="btn cartBtn  h5 cardTotalBtn"
                      type="button"
                    >
                      $1000
                    </button>
                  </div>
                </div>
                <div className="trashBoxMd col-1 colorWhite d-flex justify-content-end align-ltems-end">
                  <button type="button" className="orderProductBtnDone">
                    <i className="fa-regular fa-pen-to-square" />
                  </button>
                </div>
              </div>
              {/* 390的list end */}
              <div className=" h2 pe-2 ">
                <h5 className="text-end d-line-block my-5 colorWhite">
                  總共3項
                </h5>
                <h5 className="text-end d-line-block colorWhite">總計:$3000</h5>
              </div>
            </div>
            {/* 課程end */}
            {/* 訂單資訊 */}
            <h2 className="text-center mb-5 orderProductH2 ">訂單資訊</h2>
            <div className="orderDetailRow row mb-6">
              <div className="orderDetailCol col-6 mb-5 ">
                <div className="orderDetailList d-flex ">
                  <h5 className="orderDetailBoxMl orderPeName">姓名</h5>
                  <h5>123</h5>
                </div>
              </div>
              <div className="orderDetailCol col-6 mb-5">
                <div className="orderDetailList d-flex ">
                  <h5 className="orderDetailBoxMl orderDetailBoxMlList">
                    電話
                  </h5>
                  <h5>09123456788</h5>
                </div>
              </div>
              <div className="orderDetailCol col-6 mb-5 ">
                <div className="orderDetailList d-flex ">
                  <h5 className="orderDetailBoxMl orderPeEmail orderDetailBoxMlList">
                    E-mail
                  </h5>
                  <h5>text@test.com</h5>
                </div>
              </div>
              <div className="orderDetailCol col-6 mb-5 ">
                <div className="orderDetailList d-flex ">
                  <h5 className="orderDetailBoxMl orderDetailBoxMlList">
                    付款方式
                  </h5>
                  <h5>信用卡/金融卡</h5>
                </div>
              </div>
              <div className="orderDetailCol col-12 mb-5 ">
                <div className="orderDetailList d-flex ">
                  <h5 className="orderDetailBoxMl orderDetailBoxMlList">
                    配送方式
                  </h5>
                  <h5>宅配取貨</h5>
                </div>
              </div>
              <div className="orderDetailCol col-12 mb-5 ">
                <div className="orderDetailList d-flex ">
                  <h5 className="orderDetailBoxMl orderDetailBoxMlList ">
                    配送地址
                  </h5>
                  <h5>聖德勝德勝德勝德勝德勝德勝德勝德勝德</h5>
                </div>
              </div>
              <div className="orderDetailCol col-12 mb-5 ">
                <div className="orderDetailList d-flex ">
                  <h5 className="orderDetailBoxMl  orderDetailBoxMlList  orderDetailLastBoxMl ">
                    備註
                  </h5>
                  <h5>備註備註備註備註</h5>
                </div>
              </div>
            </div>
            {/* 訂單資訊end */}
            {/* 付款摘要 */}
            <h2 className="text-center mb-5 orderProductH2">付款摘要</h2>
            <div className="cartSubTotalBor InOrderSubTotal py-5 mb-6 pe-3 d-flex justify-content-center">
              <div className="cartSubTotal  mb-5 h5  colorWhite">
                <div className=" cartSubTotal  d-flex justify-content-center mb-5">
                  <h3>共3項目</h3>
                </div>
                <div className=" cartSubTotal d-flex justify-content-start mb-5">
                  <h5 className="orderPay">總計:</h5>
                  <h5>$3000</h5>
                </div>
                <div className=" cartSubTotal d-flex justify-content-between mb-5">
                  <h5 className="me-5">優惠券折抵:</h5>
                  <h5>$3000</h5>
                </div>
                <div className=" cartSubTotal d-flex justify-content-between ">
                  <h5 className="me-5">應付金額:</h5>
                  <h5>$3000</h5>
                </div>
              </div>
            </div>
            {/* 付款摘要end */}
          </div>
          {/* 歷史訂單部分 end*/}
        </div>
      </div>
    </>
  )
}
