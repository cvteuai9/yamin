import React, { useState, useEffect } from 'react'
import Leftnav from './left-nav'
import { FaAngleDown } from 'react-icons/fa6'
import option from '@/components/article/option.module.sass'

// 狀態映射對象
const statusMapping = {
  unused: '可使用',
  used: '已使用',
  expired: '已過期',
}

export default function Coupon() {
  const [coupons, setCoupons] = useState([])
  const [activeTab, setActiveTab] = useState('all')
  const [couponCode, setCouponCode] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filteredCoupons, setFilteredCoupons] = useState([])
  const [selectedLabel, setSelectedLabel] = useState('全部')
  const [unusedCouponCount, setUnusedCouponCount] = useState(0)

  useEffect(() => {
    fetchCoupons()
  }, [])

  const fetchCoupons = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const response = await fetch(`http://localhost:3005/api/coupons`, {
        credentials: 'include', // 確保包含 cookies
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log('Fetched coupons:', data)
      setCoupons(data)
      setFilteredCoupons(data)
      //unused可使用張數
      const unusedCount = data.filter(
        (coupon) => coupon.user_status === 'unused'
      ).length
      setUnusedCouponCount(unusedCount)

    } catch (error) {
      console.error('獲取優惠券時出錯:', error)
      setError(error.message || '獲取優惠券時出錯')
    } finally {
      setIsLoading(false)
    }
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    const label =
      tab === 'all'
        ? '全部'
        : tab === 'unused'
        ? '可使用'
        : tab === 'used'
        ? '已使用'
        : tab === 'expired'
        ? '已過期'
        : ''
    setSelectedLabel(label)
    if (tab === 'all') {
      setFilteredCoupons(coupons)
    } else {
      const filtered = coupons.filter((coupon) => coupon.user_status === tab)
      setFilteredCoupons(filtered)
    }
  }

  const handleCouponSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3005/api/coupons', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // 確保包含 cookies
        body: JSON.stringify({ couponCode }),
      })
      const data = await response.json()

      if (!response.ok) {
        switch (data.error) {
          case 'COUPON_NOT_FOUND':
            throw new Error('代碼不存在')
          case 'COUPON_ALREADY_CLAIMED':
            throw new Error('優惠券已領取')
          case 'COUPON_EXPIRED':
            throw new Error('優惠券已失效')
          case 'ERROR_INPUT':
            throw new Error('請重新輸入')
          default:
            throw new Error('未知的錯誤')
        }
      }
      fetchCoupons()
      setCouponCode('')
    } catch (error) {
      console.error('提交優惠券時出錯:', error)
      setError(error.message || '提交優惠券時出錯')
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="titlenav">
            <img src="/images/title.svg" alt="" />
            <img src="/images/group.svg" alt="" style={{ width: '100%' }} />
          </div>
          <div className="col-md-3 col-sm-0">
            <Leftnav />
          </div>
          <div className="col-md-9 ">
            <h3 className="goldenf">優惠券</h3>
            <p className="grayf">注意事項：</p>
            <p className="grayf">
              單筆訂單限使用一張，且已成立訂單不能以未使用優惠券為由取消訂單。
            </p>
            <p className="grayf">
              ＊優惠券詳細規範及抵用辦法，請參考「
              <span className="goldenf">優惠券使用說明</span>」。
            </p>
            <p className="grayf"> 雅茗保留活動修改、變更及終止之權利。 </p>
            <div className="coupon-cinput">
              <p className="grayf pt-3">優惠券歸戶</p>
              <input
                className="coupon-inputtext p2"
                type="text"
                placeholder="活動序號或通關密語"
                style={{ width: 318 }}
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button className="btn2 p checked" onClick={handleCouponSubmit}>
                確認
              </button>
              {isLoading && (
                <p className="grayf ms-3 m-0 d-flex text-align-center">
                  加載中...
                </p>
              )}
              {error && (
                <p className="grayf ms-3 m-0 d-flex text-align-center">
                  錯誤: {error}
                </p>
              )}
            </div>
            {unusedCouponCount > 0 && (
              <p className="goldenf p2">
                目前有 {unusedCouponCount} 張優惠券可使用
              </p>
            )}
            {isLoading ? (
              <p>加載中...</p>
            ) : (
              <div className="tabchooes mt-3">
                <table className="coupon-cptable mt-3">
                  <thead>
                    <tr className="p">
                      <th className="coupon-cpth p">優惠券項目</th>
                      <th className="coupon-cpth p">優惠券代碼</th>
                      <th className="coupon-cpth coupon-cpth1 p">內容</th>
                      <th className="coupon-cpth p">到期日</th>
                      <th className="coupon-cpth p">優惠券狀態</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCoupons.length > 0 ? (
                      filteredCoupons.map((coupon) => (
                        <tr key={coupon.id}>
                          <td className="coupon-cptd p">{coupon.name}</td>
                          <td className="coupon-cptd p">{coupon.code}</td>
                          <td className="coupon-p-14 p2">{coupon.info}</td>
                          <td className="coupon-cptd p">
                            {new Date(coupon.end_time).toLocaleDateString()}
                          </td>
                          <td className="coupon-cptd p">
                            {statusMapping[coupon.user_status] ||
                              coupon.user_status}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr className="">
                        <td colSpan="5" className="text-center p pt-3 goldenf">
                          沒有可用的優惠券
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

                <div
                  className="d-flex justify-content-end choosebtn text-nowrap align-items-center"
                  style={{ width: 150 }}
                >
                  <div
                    className={`d-flex align-items-center justify-content-between ${option['articlechoose']}`}
                  >
                    <input type="checkbox" name="a1-1" id="a1-1" />
                    <label
                      htmlFor="a1-1"
                      className="d-flex flex-column p-0"
                      style={{ width: 150 }}
                    >
                      <p className="m-0 ps-3 align-items-center">
                        篩選 ：{selectedLabel}
                        <FaAngleDown className={`${option.icon} ms-3`} />
                      </p>

                      <ul className="p2 grayf" style={{ width: 150 }}>
                        {['all', ...Object.keys(statusMapping)].map((tab) => (
                          <li
                            key={tab}
                            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                            role="button"
                            tabIndex={0}
                            className="d-flex align-items-center justify-content-center p"
                            onClick={() => handleTabChange(tab)}
                            onKeyPress={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                handleTabChange(tab)
                              }
                            }}
                            style={{
                              cursor: 'pointer',
                              fontWeight: activeTab === tab ? 'bold' : 'normal',
                            }}
                          >
                            {tab === 'all' ? '全部' : statusMapping[tab]}
                          </li>
                        ))}
                      </ul>
                    </label>
                  </div>
                </div>
              </div>
            )}
            <div className="coupon-btns">
              <button className="btn2 p changepassword">開始購物</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
