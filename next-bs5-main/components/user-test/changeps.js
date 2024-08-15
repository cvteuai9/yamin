import React from 'react'

import Leftnav from '@/components/user-test/left-nav'
import Link from 'next/link'
export default function Changeps() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="titlenav">
            <img src="/images/favorite/title.svg" alt="title" />
            <img
              src="/images/favorite/group.svg"
              alt="group"
              style={{ width: '100%' }}
            />
          </div>
          <div className="col-md-3">
            <Leftnav />
          </div>
          <div className="col-md-9">
            <h4 className="goldenf">
              <Link href="/test/julia/profile" className="h5 goldenf">
                個人檔案
              </Link>
              &nbsp;/&nbsp;
              <Link href="/test/julia/profile" className="h5 goldenf">
                已整合帳戶
              </Link>
              &nbsp;/&nbsp;
              <Link href="/test/julia/profile" className="h5 goldenf">
                載具管理
              </Link>
            </h4>
            <div>
              <p className="p-18 whitef">舊密碼(必填)</p>
              <div className="changeps-inputgroup">
                <input
                  className="changeps-inputtext "
                  type="password"
                  placeholder="請輸入你的密碼"
                />
                <i className="fa-regular fa-eye" style={{ color: '#b29564' }} />
              </div>
              <p2 className="p2 whitef">* 6-64位英數混合，英文需區分大小寫</p2>
            </div>
            <div>
              <p className="p-18 whitef">密碼(必填)</p>
              <div className="changeps-'inputgroup">
                <input
                  className="changeps-inputtext"
                  type="password"
                  placeholder=""
                />
                <i className="fa-regular fa-eye" style={{ color: '#b29564' }} />
              </div>
            </div>
            <div>
              <p className="p-18 whitef">密碼確認&nbsp;(必填)</p>
              <div className="changeps-inputgroup">
                <input
                  className="changeps-inputtext"
                  type="password"
                  placeholder="再輸入一次密碼"
                />
                <i className="fa-regular fa-eye" style={{ color: '#b29564' }} />
              </div>
            </div>
            <div className="changeps-btns">
              <div type="button" className="btn2 checked p">
                確認
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
