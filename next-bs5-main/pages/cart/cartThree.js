import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
export default function CartThree() {
  return (
    <>
      <div className="container-fluid cart">
        <div className="CartTitle d-flex justify-content-center mb-5 ">
          <img src="/images/cart/Vector 20.svg" className="me-3" alt="" />
          <img src="/images/cart/商品title-center.svg" alt="" />
          <img src="/images/cart/Vector 20.svg" className="ms-3" alt="" />
        </div>
        <div className="CartProcess d-flex justify-content-center mb-5 ">
          <div className="CartProcess-test d-flex align-items-center flex-column ">
            <img
              src="/images/cart/check1,state=default.svg"
              className="cartProcess"
              alt=""
            />
            <h5 className="mt-2">確認商品</h5>
          </div>
          <div className="CartProcess-test d-flex justify-content-center align-items-center flex-column px-3">
            <img src="/images/cart/Vector.svg" className="cartProcess" alt="" />
          </div>
          <div className="CartProcess-test d-flex align-items-center flex-column ">
            <img
              src="/images/cart/check2,state=default.svg"
              className="cartProcess"
              alt=""
            />
            <h5 className="mt-2">填寫資料</h5>
          </div>
          <div className="CartProcess-test d-flex justify-content-center align-items-center flex-column px-3">
            <img src="/images/cart/Vector.svg" className="cartProcess" alt="" />
          </div>
          <div className="CartProcess-test d-flex align-items-center flex-column ">
            <img
              src="/images/cart/check3,state=hover.svg"
              className="cartProcess"
              alt=""
            />
            <h5 className="mt-2">訂單完成</h5>
          </div>
        </div>
        <div className="cartOk d-flex align-items-center flex-column">
          <div className="cartOkImg d-flex justify-content-center mb-4">
            <img src="/images/cart/ok,web.svg" alt="" />
          </div>
          <div className="cartOkContent ">
            <h2 className="text-center mb-6">完成訂單</h2>

            <Link
              className="cartOk-Alink text-center px-5 h3"
              href="http://localhost:3000/order"
            >
              返回訂單列表
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
