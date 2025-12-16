import { useState } from 'react'
import { generateDesignSystem } from '../src/generator'
import { BrandTone } from '../src/types'

const INDUSTRIES = [
  { value: '금융', label: '🏦 금융', color: '#0052CC' },
  { value: '이커머스', label: '🛍️ 이커머스', color: '#FF6B35' },
  { value: '헬스케어', label: '🏥 헬스케어', color: '#00A9E0' },
  { value: '테크', label: '💻 테크/SaaS', color: '#6366F1' },
  { value: '교육', label: '📚 교육', color: '#3B82F6' },
  { value: '음식배달', label: '🍔 음식배달', color: '#EF4444' },
  { value: '부동산', label: '🏠 부동산', color: '#0891B2' },
  { value: '패션', label: '👗 패션', color: '#EC4899' },
  { value: '게임', label: '🎮 게임', color: '#A855F7' },
  { value: '여행', label: '✈️ 여행', color: '#0EA5E9' },
  { value: '피트니스', label: '💪 피트니스', color: '#10B981' },
  { value: '호텔', label: '🏨 호텔', color: '#0891B2' },
  { value: '자동차', label: '🚗 자동차', color: '#DC2626' },
  { value: '미디어', label: '🎬 미디어/OTT', color: '#E50914' },
]

interface ComparisonPageProps {
  onBackToGenerator: () => void
}

export default function ComparisonPage({ onBackToGenerator }: ComparisonPageProps) {
  const [industry1, setIndustry1] = useState('금융')
  const [industry2, setIndustry2] = useState('게임')
  const [brandTone, setBrandTone] = useState<BrandTone>('신뢰')

  const spec1 = generateDesignSystem({ industry: industry1, brandTone })
  const spec2 = generateDesignSystem({ industry: industry2, brandTone })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">🔍 업종별 디자인 시스템 비교</h1>
            <p className="text-sm text-gray-600 mt-1">두 업종의 디자인 차이를 한눈에 비교하세요</p>
          </div>
          <button
            onClick={onBackToGenerator}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
          >
            ← 생성기로 돌아가기
          </button>
        </div>
      </header>

      {/* Controls */}
      <div className="max-w-[1600px] mx-auto px-6 py-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">업종 A</label>
              <select
                value={industry1}
                onChange={(e) => setIndustry1(e.target.value)}
                className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {INDUSTRIES.map(ind => (
                  <option key={ind.value} value={ind.value}>{ind.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">업종 B</label>
              <select
                value={industry2}
                onChange={(e) => setIndustry2(e.target.value)}
                className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {INDUSTRIES.map(ind => (
                  <option key={ind.value} value={ind.value}>{ind.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">브랜드 톤</label>
              <select
                value={brandTone}
                onChange={(e) => setBrandTone(e.target.value as BrandTone)}
                className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="신뢰">신뢰</option>
                <option value="프리미엄">프리미엄</option>
                <option value="친근">친근</option>
                <option value="테크">테크</option>
                <option value="미니멀">미니멀</option>
              </select>
            </div>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Industry 1 */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-blue-500">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {INDUSTRIES.find(i => i.value === industry1)?.label}
              </h2>
              
              {/* Meta Info */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">핵심 키워드</h3>
                <div className="flex flex-wrap gap-2">
                  {spec1.meta.styleKeywords.map(keyword => (
                    <span key={keyword} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {keyword}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-3">{spec1.meta.targetFeeling}</p>
              </div>

              {/* Colors */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">컬러 시스템</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Primary</p>
                    <div className="flex gap-1">
                      {Object.entries(spec1.colors.primary).filter(([key]) => !['50', '100'].includes(key)).map(([shade, color]) => (
                        <div
                          key={shade}
                          className="h-12 flex-1 rounded"
                          style={{ backgroundColor: color as string }}
                          title={`${shade}: ${color}`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-600 mt-1 font-mono">{spec1.colors.primary['500']}</p>
                  </div>
                </div>
              </div>

              {/* Typography */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">타이포그래피</h3>
                <div className="space-y-2 p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">H1</span>
                    <span className="font-mono text-gray-900">
                      {spec1.typography.scale.h1.fontSize} / {spec1.typography.scale.h1.fontWeight}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">H2</span>
                    <span className="font-mono text-gray-900">
                      {spec1.typography.scale.h2.fontSize} / {spec1.typography.scale.h2.fontWeight}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Body</span>
                    <span className="font-mono text-gray-900">
                      {spec1.typography.scale.body.fontSize} / {spec1.typography.scale.body.lineHeight}
                    </span>
                  </div>
                </div>
              </div>

              {/* Components */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">컴포넌트</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 mb-2">Primary Button</p>
                    <div className="flex items-center gap-3">
                      <div className={`${spec1.components.button.primary.tailwind} inline-block text-sm`}>
                        버튼 예시
                      </div>
                      <span className="text-xs text-gray-600 font-mono">
                        {spec1.components.button.primary.radius}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 mb-2">Card</p>
                    <div className={`${spec1.components.card.tailwind} p-4 inline-block`}>
                      <p className="text-sm text-gray-700">카드 예시</p>
                    </div>
                    <p className="text-xs text-gray-600 font-mono mt-2">
                      {spec1.components.card.radius}
                    </p>
                  </div>
                </div>
              </div>

              {/* Layout */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">레이아웃</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span className="text-gray-600">Header Height</span>
                    <span className="font-mono text-gray-900">{spec1.layout.header.heightPx}px</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span className="text-gray-600">Grid Gutter</span>
                    <span className="font-mono text-gray-900">{spec1.figmaGuide.autoLayoutRules.grid}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span className="text-gray-600">Sections</span>
                    <span className="font-mono text-gray-900">{spec1.layout.sections.length}개</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Industry 2 */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-purple-500">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {INDUSTRIES.find(i => i.value === industry2)?.label}
              </h2>
              
              {/* Meta Info */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-2">핵심 키워드</h3>
                <div className="flex flex-wrap gap-2">
                  {spec2.meta.styleKeywords.map(keyword => (
                    <span key={keyword} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      {keyword}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-3">{spec2.meta.targetFeeling}</p>
              </div>

              {/* Colors */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">컬러 시스템</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Primary</p>
                    <div className="flex gap-1">
                      {Object.entries(spec2.colors.primary).filter(([key]) => !['50', '100'].includes(key)).map(([shade, color]) => (
                        <div
                          key={shade}
                          className="h-12 flex-1 rounded"
                          style={{ backgroundColor: color as string }}
                          title={`${shade}: ${color}`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-600 mt-1 font-mono">{spec2.colors.primary['500']}</p>
                  </div>
                </div>
              </div>

              {/* Typography */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">타이포그래피</h3>
                <div className="space-y-2 p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">H1</span>
                    <span className="font-mono text-gray-900">
                      {spec2.typography.scale.h1.fontSize} / {spec2.typography.scale.h1.fontWeight}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">H2</span>
                    <span className="font-mono text-gray-900">
                      {spec2.typography.scale.h2.fontSize} / {spec2.typography.scale.h2.fontWeight}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Body</span>
                    <span className="font-mono text-gray-900">
                      {spec2.typography.scale.body.fontSize} / {spec2.typography.scale.body.lineHeight}
                    </span>
                  </div>
                </div>
              </div>

              {/* Components */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-3">컴포넌트</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 mb-2">Primary Button</p>
                    <div className="flex items-center gap-3">
                      <div className={`${spec2.components.button.primary.tailwind} inline-block text-sm`}>
                        버튼 예시
                      </div>
                      <span className="text-xs text-gray-600 font-mono">
                        {spec2.components.button.primary.radius}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 mb-2">Card</p>
                    <div className={`${spec2.components.card.tailwind} p-4 inline-block`}>
                      <p className="text-sm text-gray-700">카드 예시</p>
                    </div>
                    <p className="text-xs text-gray-600 font-mono mt-2">
                      {spec2.components.card.radius}
                    </p>
                  </div>
                </div>
              </div>

              {/* Layout */}
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">레이아웃</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span className="text-gray-600">Header Height</span>
                    <span className="font-mono text-gray-900">{spec2.layout.header.heightPx}px</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span className="text-gray-600">Grid Gutter</span>
                    <span className="font-mono text-gray-900">{spec2.figmaGuide.autoLayoutRules.grid}</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span className="text-gray-600">Sections</span>
                    <span className="font-mono text-gray-900">{spec2.layout.sections.length}개</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Differences Summary */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">🔍 주요 차이점</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-blue-700 mb-2">컬러</h3>
              <p className="text-sm text-gray-700">
                {INDUSTRIES.find(i => i.value === industry1)?.label}: <span className="font-mono font-bold">{spec1.colors.primary['500']}</span>
                <br />
                {INDUSTRIES.find(i => i.value === industry2)?.label}: <span className="font-mono font-bold">{spec2.colors.primary['500']}</span>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-purple-700 mb-2">타이포그래피</h3>
              <p className="text-sm text-gray-700">
                H1 크기: {spec1.typography.scale.h1.fontSize} vs {spec2.typography.scale.h1.fontSize}
                <br />
                H1 굵기: {spec1.typography.scale.h1.fontWeight} vs {spec2.typography.scale.h1.fontWeight}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-700 mb-2">컴포넌트 스타일</h3>
              <p className="text-sm text-gray-700">
                Button Radius: {spec1.components.button.primary.radius} vs {spec2.components.button.primary.radius}
                <br />
                Card Radius: {spec1.components.card.radius} vs {spec2.components.card.radius}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-purple-700 mb-2">레이아웃</h3>
              <p className="text-sm text-gray-700">
                Header: {spec1.layout.header.heightPx}px vs {spec2.layout.header.heightPx}px
                <br />
                Sections: {spec1.layout.sections.length}개 vs {spec2.layout.sections.length}개
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
