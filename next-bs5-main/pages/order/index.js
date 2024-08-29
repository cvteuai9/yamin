import React, { useEffect, useState } from 'react'
import Leftnav from '@/components/member/left-nav'
export default function OrderOne() {
  const [orderDetail, setOrderDetail] = useState([])
  async function getOrderDetails() {
    try {
      const apiUrl = new URL('http://localhost:3005/api/yamin_order')
      const res = await fetch(apiUrl)
      const data = await res.json()
      setOrderDetail(data)
      // console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getOrderDetails()
  }, [])
  console.log(orderDetail)
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
            {orderDetail.map((v, i) => {
              return (
                <div key={v.id} className="orderlistRow mb-3 row">
                  <div className="orderListCol col-3">
                    <h5>{v.order_uuid}</h5>
                  </div>
                  <div className="orderListCol col-3">
                    <h5>{v.created_at}</h5>
                  </div>
                  <div className="orderListCol col-2">
                    <h5>{v.total_price}</h5>
                  </div>
                  <div className="orderListCol col-3">
                    {v.state === 1 ? (
                      <h5>訂單成立</h5>
                    ) : (
                      <h5 className="d-none"></h5>
                    )}
                    {v.state === 2 ? (
                      <h5>已出貨</h5>
                    ) : (
                      <h5 className="d-none"></h5>
                    )}
                    {v.state === 3 ? (
                      <h5>已到貨</h5>
                    ) : (
                      <h5 className="d-none"></h5>
                    )}
                    {v.state === 4 ? (
                      <h5>已取貨</h5>
                    ) : (
                      <h5 className="d-none"></h5>
                    )}
                    {v.state === 5 ? (
                      <h5>完成評價</h5>
                    ) : (
                      <h5 className="d-none"></h5>
                    )}
                  </div>
                  <div className="orderListCol col-1">
                    <h5 className="">
                      <button className="orderListBtn">
                        <i className="fa-solid fa-magnifying-glass" />
                      </button>
                    </h5>
                  </div>
                </div>
              )
            })}
          </div>
          {/* 歷史訂單部分 end*/}
        </div>
      </div>
    </>
  )
}
