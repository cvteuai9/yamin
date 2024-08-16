import React from 'react'
import Leftnav from '@/components/member/left-nav'

export default function Coupon() {
  return (
    <>
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
          <div className="col-md-3 col-sm-0">
            <Leftnav />
          </div>
          <div className="col-md-9 col-">
            <h3 className="goldenf">優惠券</h3>
            <p className="whitef">注意事項：</p>
            <p className="whitef">
              單筆訂單限使用一張，且已成立訂單不能以未使用優惠券為由取消訂單。
            </p>
            <p className="whitef">
              ＊優惠券詳細規範及抵用辦法，請參考「
              <span className="goldenf">優惠券使用說明</span>」。
            </p>
            <p className="whitef"> 雅茗保留活動修改、變更及終止之權利。 </p>
            <div className="coupon-cinput">
              <p className="grayf pt-3">優惠券歸戶</p>
              <input
                className="coupon-inputtext p2"
                type="text"
                placeholder="活動序號或通關密語"
                style={{ width: 318 }}
              />
              <div type="button" className="btn2 p checked">
                確認
              </div>
            </div>
            <div className="ordered-cinput mt-5">
              <ul className="ordered-ordernav p whitef">
                <li>全部</li>
                <li>可領取</li>
                <li>未使用</li>
                <li>已使用</li>
                <li>已失效</li>
              </ul>
            </div>
            {/* <p className="grayf p2">可用張數 3 張</p> */}

            <table className="coupon-cptable">
              <thead>
                <tr className="p">
                  {/* <th className="coupon-cpth p">日期</th> */}
                  <th className="coupon-cpth p">優惠券項目</th>
                  <th className="coupon-cpth p">內容</th>
                  <th className="coupon-cpth p">到期日</th>
                  <th className="coupon-cpth p">優惠券代碼</th>
                </tr>
                <tr>
                  {/* <td className="coupon-cp-td p">Table Header Cell</td> */}
                  <td className="coupon-cp-td p">全館優惠</td>
                  <td className="coupon-p-14 p2">
                    消費滿 NT$ 5,000，享NT$ 1,000 折扣
                  </td>
                  <td className="coupon-cp-td p">2024-12-31 23:59止</td>
                  <td className="coupon-cp-td p">FFJO8F</td>
                </tr>
                {/* ---------待抓資料庫資料------------ */}
                <tr>
                  {/* <td className="coupon-cp-td p">Table Header Cell</td> */}
                  <td className="coupon-cp-td p">冬季特賣綠茶</td>
                  <td className="coupon-p-14 p2">
                    消費滿 NT$ 1,500，享結帳 92 折
                  </td>
                  <td className="coupon-cp-td p">2024-12-31 23:59止</td>
                  <td className="coupon-cp-td p">6A7VJK</td>
                </tr>
                <tr>
                  {/* <td className="coupon-cp-td p">Table Header Cell</td> */}
                  <td className="coupon-cp-td p">新進會員折扣</td>
                  <td className="coupon-p-14 p2">
                    消費滿 NT$ 2,000，享NT$ 200 折扣
                  </td>
                  <td className="coupon-cp-td p">2024-12-31 23:59止</td>
                  <td className="coupon-cp-td p">S3A1C4</td>
                </tr>
              </thead>
            </table>
            <div className="coupon-btns">
              <div type="button" className="btn2 p changepassword">
                開始購物
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
