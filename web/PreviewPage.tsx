import { useState } from 'react'
import { generateDesignSystem } from '../src/generator'
import { BrandTone } from '../src/types'
import Header from './components/layout/Header'

const INDUSTRIES = [
  { value: '금융', label: '🏦 금융' },
  { value: '이커머스', label: '🛍️ 이커머스' },
  { value: '헬스케어', label: '🏥 헬스케어' },
  { value: '테크', label: '💻 테크/SaaS' },
  { value: '교육', label: '📚 교육' },
  { value: '음식배달', label: '🍔 음식배달' },
  { value: '부동산', label: '🏠 부동산' },
  { value: '패션', label: '👗 패션' },
  { value: '게임', label: '🎮 게임' },
  { value: '여행', label: '✈️ 여행' },
  { value: '피트니스', label: '💪 피트니스' },
  { value: '호텔', label: '🏨 호텔' },
  { value: '자동차', label: '🚗 자동차' },
  { value: '미디어', label: '🎬 미디어/OTT' },
]

interface PreviewPageProps {
  onBackToGenerator: () => void
}

export default function PreviewPage({ onBackToGenerator }: PreviewPageProps) {
  const [industry, setIndustry] = useState('금융')
  const [brandTone, setBrandTone] = useState<BrandTone>('신뢰')

  const spec = generateDesignSystem({ industry, brandTone })
  const primaryColor = spec.colors.primary['500']
  const isDark = ['게임', '자동차', '미디어'].includes(industry)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        logoSrc="/images/baikal_logo_trans.png"
        logoText="Baikal"
        menuItems={[
          { label: 'Generator', onClick: onBackToGenerator },
          { label: 'Preview', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
        ]}
        ctaText="← 돌아가기"
        onCtaClick={onBackToGenerator}
        maxVisibleItems={5}
      />
      {/* Control Panel */}
      <div className="bg-white border-b border-gray-200 sticky top-16 md:top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex items-start md:items-center justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h1 className="text-lg md:text-2xl font-bold text-gray-900">🎨 랜딩페이지 미리보기</h1>
                <p className="text-xs md:text-sm text-gray-600 mt-1">업종별 실제 디자인을 확인하세요</p>
              </div>
              <button
                onClick={onBackToGenerator}
                className="px-3 md:px-5 py-2 md:py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-all hover:shadow-md text-sm md:text-base whitespace-nowrap flex-shrink-0"
              >
                ← 돌아가기
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">업종</label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-medium transition-all"
                >
                  {INDUSTRIES.map(ind => (
                    <option key={ind.value} value={ind.value}>{ind.label}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">브랜드 톤</label>
                <select
                  value={brandTone}
                  onChange={(e) => setBrandTone(e.target.value as BrandTone)}
                  className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                >
                  <option value="신뢰">신뢰 (Trust)</option>
                  <option value="프리미엄">프리미엄 (Premium)</option>
                  <option value="친근">친근 (Friendly)</option>
                  <option value="테크">테크 (Tech)</option>
                  <option value="미니멀">미니멀 (Minimal)</option>
                </select>
              </div>

              <div className="sm:col-span-2 lg:col-span-1">
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">Primary Color</label>
                <div className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 bg-gray-50 rounded-xl border-2 border-gray-200">
                  <div 
                    className="w-8 h-8 md:w-10 md:h-10 rounded-lg border-2 border-gray-300 flex-shrink-0"
                    style={{ backgroundColor: primaryColor }}
                  />
                  <span className="font-mono text-xs md:text-sm font-semibold text-gray-700">{primaryColor}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Content */}
      <div className="max-w-7xl mx-auto">
        {/* Rendered Landing Page */}
        <div 
          className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white'}`}
          style={{
            fontFamily: spec.typography.fontFamily.primary,
          }}
        >
          {/* Header */}
          <header 
            className={`${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-b sticky top-0 z-40 shadow-sm`}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 h-16 md:h-20 flex items-center justify-between">
              <div className="flex items-center gap-2 md:gap-3">
                {/* Logo */}
                <div className="flex items-center gap-2 md:gap-3">
                  <div 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center font-bold text-white text-lg md:text-xl shadow-lg relative overflow-hidden group"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <span className="relative z-10">{INDUSTRIES.find(i => i.value === industry)?.label.split(' ')[0]}</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-base md:text-xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {industry}
                    </span>
                    <span className={`text-[10px] md:text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {spec.meta.targetFeeling}
                    </span>
                  </div>
                </div>
              </div>
              
              <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                {spec.layout.header.structure.slice(1, -1).map((item, idx) => (
                  <a 
                    key={idx} 
                    href="#"
                    className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} font-medium transition-colors text-sm xl:text-base`}
                  >
                    {item}
                  </a>
                ))}
              </nav>

              <button 
                className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl font-semibold transition-all shadow-md hover:shadow-lg`}
                style={{ 
                  backgroundColor: primaryColor,
                  color: 'white'
                }}
              >
                시작하기
              </button>
            </div>
          </header>

          {/* Hero Section */}
          <section className={`py-12 md:py-20 lg:py-24 ${isDark ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                <div className="space-y-4 md:space-y-6 lg:space-y-8">
                  <h1 
                    className={`font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
                    style={{
                      fontSize: `clamp(2rem, 5vw, ${spec.typography.scale.h1.fontSize})`,
                      fontWeight: spec.typography.scale.h1.fontWeight,
                      lineHeight: spec.typography.scale.h1.lineHeight,
                      letterSpacing: spec.typography.scale.h1.letterSpacing,
                    }}
                  >
                    {spec.meta.targetFeeling}
                  </h1>
                  <p 
                    className={`text-base md:text-lg lg:text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                    style={{
                      fontSize: `clamp(1rem, 2vw, ${spec.typography.scale.body.fontSize})`,
                      lineHeight: spec.typography.scale.body.lineHeight,
                    }}
                  >
                    {spec.meta.styleKeywords.join(', ')}을 중심으로 설계된 최고의 경험을 제공합니다.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
                    <button 
                      className="px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                      style={{ 
                        backgroundColor: primaryColor,
                        color: 'white'
                      }}
                    >
                      무료로 시작하기
                    </button>
                    <button 
                      className={`px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg border-2 transition-all hover:shadow-lg`}
                      style={{ 
                        borderColor: primaryColor,
                        color: primaryColor
                      }}
                    >
                      더 알아보기
                    </button>
                  </div>
                </div>
                
                <div className={`${spec.components.card.tailwind} h-[300px] min-h-[250px] lg:h-[500px] lg:min-h-[400px]`}>
                  <div 
                    className="w-full h-full flex items-center justify-center text-5xl md:text-6xl lg:text-8xl rounded-2xl"
                    style={{ backgroundColor: `${primaryColor}15` }}
                  >
                    {INDUSTRIES.find(i => i.value === industry)?.label.split(' ')[0]}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className={`py-12 md:py-20 lg:py-24 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
              <h2 
                className={`text-center font-bold mb-8 md:mb-12 lg:mb-16 ${isDark ? 'text-white' : 'text-gray-900'}`}
                style={{
                  fontSize: `clamp(1.75rem, 4vw, ${spec.typography.scale.h2.fontSize})`,
                  fontWeight: spec.typography.scale.h2.fontWeight,
                }}
              >
                주요 기능
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {spec.layout.sections.slice(0, 3).map((section, idx) => (
                  <div key={idx} className={`${spec.components.card.tailwind} p-5 md:p-6 lg:p-8 hover:-translate-y-1 transition-all duration-300`}>
                    <div 
                      className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl md:rounded-2xl flex items-center justify-center text-white text-xl md:text-2xl font-bold mb-4 md:mb-5 lg:mb-6 shadow-lg"
                      style={{ backgroundColor: primaryColor }}
                    >
                      {idx + 1}
                    </div>
                    <h3 
                      className={`font-bold mb-2 md:mb-3 lg:mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
                      style={{
                        fontSize: `clamp(1.125rem, 2.5vw, ${spec.typography.scale.h3.fontSize})`,
                        fontWeight: spec.typography.scale.h3.fontWeight,
                      }}
                    >
                      {section.name}
                    </h3>
                    <p 
                      className={`leading-relaxed text-sm md:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                      style={{
                        fontSize: `clamp(0.875rem, 1.5vw, ${spec.typography.scale.body.fontSize})`,
                        lineHeight: spec.typography.scale.body.lineHeight,
                      }}
                    >
                      {section.goal}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section 
            className="py-12 md:py-20 lg:py-24"
            style={{ 
              background: isDark 
                ? 'linear-gradient(135deg, rgb(31, 41, 55), rgb(17, 24, 39))' 
                : `linear-gradient(135deg, ${primaryColor}10, ${primaryColor}05)` 
            }}
          >
            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-12 text-center">
              <h2 
                className={`font-bold mb-4 md:mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
                style={{
                  fontSize: `clamp(1.75rem, 4vw, ${spec.typography.scale.h2.fontSize})`,
                  fontWeight: spec.typography.scale.h2.fontWeight,
                }}
              >
                지금 바로 시작하세요
              </h2>
              <p 
                className={`mb-6 md:mb-8 lg:mb-10 text-base md:text-lg lg:text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                style={{
                  fontSize: `clamp(1rem, 2vw, ${spec.typography.scale.body.fontSize})`,
                }}
              >
                {industry} 산업을 위한 최적화된 솔루션
              </p>
              <button 
                className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                style={{ 
                  backgroundColor: primaryColor,
                  color: 'white'
                }}
              >
                무료 체험 시작하기
              </button>
            </div>
          </section>

          {/* Footer */}
          <footer className={`${isDark ? 'bg-gray-900' : 'bg-gray-900'} py-10 md:py-14 lg:py-16`}>
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-10 lg:mb-12">
                {spec.layout.footer.structure.map((section, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-white text-base md:text-lg mb-4 md:mb-5 lg:mb-6">{section}</h4>
                    <ul className="space-y-2 md:space-y-3">
                      <li>
                        <a 
                          href="#" 
                          className="text-gray-400 hover:text-white transition-colors duration-200 text-sm md:text-base"
                        >
                          링크 1
                        </a>
                      </li>
                      <li>
                        <a 
                          href="#" 
                          className="text-gray-400 hover:text-white transition-colors duration-200 text-sm md:text-base"
                        >
                          링크 2
                        </a>
                      </li>
                      <li>
                        <a 
                          href="#" 
                          className="text-gray-400 hover:text-white transition-colors duration-200 text-sm md:text-base"
                        >
                          링크 3
                        </a>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 md:pt-8 border-t border-gray-800 text-center">
                <p className="text-gray-500 text-xs md:text-sm lg:text-base">
                  © 2025 {industry}. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
