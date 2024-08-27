import React from 'react'
import Leftnav from '@/components/member/left-nav'
export default function OrderOne() {
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
            <Leftnav fromOrder="fromOrder" />
          </div>
          {/* 歷史訂單部分 */}
          <div className="orderCol orderColRight col-8">
            <div className="orderColH3 orderTitleMd orderTitle w-100 mb-3">
              <h3>首頁 / 會員 / 訂單</h3>
            </div>
            <div className="orderColH3 orderTitle mb-3 w-100">
              <h3>歷史訂單</h3>
            </div>
            <div className="orderlistRow mb-3 row">
              <div className="orderListCol col-3">
                <h5>訂單編號</h5>
              </div>
              <div className="orderListCol col-3">
                <h5>訂單編號</h5>
              </div>
              <div className="orderListCol col-2">
                <h5>總價</h5>
              </div>
              <div className="orderListCol col-3">
                <h5>訂單狀態</h5>
              </div>
              <div className="orderListCol col-1"></div>
            </div>
            <div className="orderlistRow mb-3 row">
              <div className="orderListCol col-3">
                <h5>3131231231</h5>
              </div>
              <div className="orderListCol col-3">
                <h5>2000/1/1</h5>
              </div>
              <div className="orderListCol col-2">
                <h5>100000</h5>
              </div>
              <div className="orderListCol col-3">
                <h5>完成訂單</h5>
              </div>
              <div className="orderListCol col-1">
                <h5 className="">
                  <button className="orderListBtn">
                    <i className="fa-solid fa-magnifying-glass" />
                  </button>
                </h5>
              </div>
            </div>
            <div className="orderlistRow mb-3 row">
              <div className="orderListCol col-3">
                <h5>3131231231</h5>
              </div>
              <div className="orderListCol col-3">
                <h5>2000/1/1</h5>
              </div>
              <div className="orderListCol col-2">
                <h5>100000</h5>
              </div>
              <div className="orderListCol col-3">
                <h5>完成訂單</h5>
              </div>
              <div className="orderListCol col-1">
                <h5 className="">
                  <button className="orderListBtn">
                    <i className="fa-solid fa-magnifying-glass" />
                  </button>
                </h5>
              </div>
            </div>
            <div className="orderlistRow mb-3 row">
              <div className="orderListCol col-3">
                <h5>3131231231</h5>
              </div>
              <div className="orderListCol col-3">
                <h5>2000/1/1</h5>
              </div>
              <div className="orderListCol col-2">
                <h5>100000</h5>
              </div>
              <div className="orderListCol col-3">
                <h5>完成訂單</h5>
              </div>
              <div className="orderListCol col-1">
                <h5 className="">
                  <button className="orderListBtn">
                    <i className="fa-solid fa-magnifying-glass" />
                  </button>
                </h5>
              </div>
            </div>
          </div>
          {/* 歷史訂單部分 end*/}
        </div>
      </div>
    </>
  )
}
