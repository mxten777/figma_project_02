/**
 * Header 컴포넌트 (전사 재사용)
 * 
 * 설계 의도:
 * - Desktop: 메뉴 최대 5~6개, 초과 시 More 드롭다운
 * - Mobile: Hamburger 메뉴
 * - Sticky header (스크롤 시 상단 고정)
 * - Logo + Navigation + CTA 구조
 */

import { useState } from 'react'
import { cn } from '../../utils/cn'
import Button from '../ui/Button'

export interface MenuItem {
  label: string
  href: string
}

export interface HeaderProps {
  /** 로고 이미지 경로 */
  logoSrc?: string
  /** 로고 텍스트 (이미지 없을 경우) */
  logoText?: string
  /** 메뉴 항목 */
  menuItems: MenuItem[]
  /** CTA 버튼 텍스트 */
  ctaText?: string
  /** CTA 클릭 핸들러 */
  onCtaClick?: () => void
  /** 최대 메뉴 표시 개수 (초과 시 More) */
  maxVisibleItems?: number
}

const Header = ({ 
  logoSrc, 
  logoText = 'Baikal',
  menuItems, 
  ctaText = 'Get Started',
  onCtaClick,
  maxVisibleItems = 5
}: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)

  // Desktop: 메뉴 초과 시 More 처리
  const visibleItems = menuItems.slice(0, maxVisibleItems)
  const moreItems = menuItems.slice(maxVisibleItems)
  const hasMore = moreItems.length > 0

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3">
          {logoSrc ? (
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden shadow-lg border-2 border-gray-200 bg-white flex items-center justify-center p-1 md:p-1.5">
              <img 
                src={logoSrc} 
                alt="Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl md:text-2xl">
                {logoText.charAt(0)}
              </span>
            </div>
          )}
          
          <div className="flex flex-col">
            <span className="text-lg md:text-2xl font-bold text-gray-900 leading-tight">
              {logoText}
            </span>
            <span className="text-[10px] md:text-xs text-gray-500 font-medium hidden sm:block">
              Design System Generator
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {visibleItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors text-sm xl:text-base"
            >
              {item.label}
            </a>
          ))}
          
          {/* More 드롭다운 */}
          {hasMore && (
            <div className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors text-sm xl:text-base flex items-center gap-1"
              >
                More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isMoreOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                  {moreItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Button 
            variant="primary" 
            size="md"
            onClick={onCtaClick}
          >
            {ctaText}
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="메뉴"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-gray-200">
              <Button 
                variant="primary" 
                size="md"
                fullWidth
                onClick={() => {
                  onCtaClick?.()
                  setIsMobileMenuOpen(false)
                }}
              >
                {ctaText}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

/**
 * 사용 예시:
 * 
 * <Header
 *   logoSrc="/images/baikal_logo_trans.png"
 *   logoText="Baikal"
 *   menuItems={[
 *     { label: 'Features', href: '#features' },
 *     { label: 'Pricing', href: '#pricing' },
 *     { label: 'About', href: '#about' },
 *     { label: 'Blog', href: '/blog' },
 *     { label: 'Contact', href: '/contact' },
 *     // 5개 초과 시 More 드롭다운
 *     { label: 'Docs', href: '/docs' },
 *   ]}
 *   ctaText="Get Started"
 *   onCtaClick={() => router.push('/signup')}
 *   maxVisibleItems={5}
 * />
 */
