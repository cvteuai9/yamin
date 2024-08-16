import React from 'react'
import Link from 'next/link'

export default function Leftnav({
  fromProfile = '',
  fromOrder = '',
  fromCupon = '',
  fromFavorite = '',
}) {
  return (
    <>
      <div className="left-nav">
        <ul>
          <li>
            <Link href="/test/julia/profile" className={`h5 ${fromProfile}`}>
              個人檔案
            </Link>
          </li>
          <li>
            <Link href="/test/julia/order" className={`h5 ${fromOrder}`}>
              購買訂單
            </Link>
          </li>
          <li>
            <Link href="/test/julia/coupon" className={`h5 ${fromCupon}`}>
              優惠券
            </Link>
          </li>
          <li>
            <Link
              href="/test/julia/favorite-p"
              className={`h5 ${fromFavorite}`}
            >
              我的收藏
            </Link>
          </li>
        </ul>
        <div className="left-nav-line">
          <img src="/images/favorite/botton_line.svg" alt="裝飾線line" />
        </div>
      </div>
    </>
  )
}
