import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// julia 08-26 test
export default function ResponsiveMemberNav(
  fromProfile = '',
  fromOrder = '',
  fromCupon = '',
  fromFavorite = ''
) {
  const [isOverflowing, setIsOverflowing] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const navRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    const checkOverflowAndResize = () => {
      if (navRef.current) {
        setIsOverflowing(
          navRef.current.scrollWidth > navRef.current.clientWidth
        )
      }
      setIsMobile(window.innerWidth < 740)
    }

    checkOverflowAndResize()
    window.addEventListener('resize', checkOverflowAndResize)
    return () => window.removeEventListener('resize', checkOverflowAndResize)
  }, [])

  const navItems = [
    { href: '/member/profile', label: '個人檔案', className: 'fromProfile' },
    { href: '/member/order', label: '購買訂單', className: 'fromOrder' },
    { href: '/member/coupon', label: '優惠券', className: 'fromCupon' },
    {
      href: '/member/fav/favorite-p',
      label: '我的收藏',
      className: 'FavorfromFavoriteite',
    },
  ]

  const isActive = (path) => (router.pathname === path ? 'text-yellow-400' : '')
  return (
    <div
      className={`${isMobile ? 'w-full' : 'w-64'} bg-blue-500 ${
        isMobile ? 'p-4' : 'p-6 h-screen'
      }`}
    >
      <nav ref={navRef}>
        <ul
          className={`
            list-none m-0 p-0
            ${isMobile ? 'flex overflow-x-auto' : 'flex flex-col'}
            ${isMobile ? 'space-x-4' : 'space-y-4'}
            ${isMobile && isOverflowing ? 'pb-2' : ''}
          `}
          style={
            isMobile ? { scrollbarWidth: 'none', msOverflowStyle: 'none' } : {}
          }
        >
          {navItems.map((item, index) => (
            <li key={index} className={isMobile ? 'inline-block' : 'block'}>
              <Link
                href={item.href}
                className={`
                  text-white whitespace-nowrap px-3 py-2 rounded-md text-sm font-medium
                  hover:bg-blue-600 transition-colors duration-200 block
                  ${isActive(item.href)}
                `}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {isMobile && isOverflowing && (
        <div className="mt-2 text-white text-xs text-center">
          ← 滑動查看更多 →
        </div>
      )}
    </div>
  )
}
