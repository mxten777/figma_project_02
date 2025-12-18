/**
 * GeneratorForm - 새 디자인 시스템 적용
 * 
 * 업종/브랜드톤 선택하여 디자인 시스템 생성
 */

import { BrandTone } from '../../../src/types'
import Button from '../ui/Button'
import Typography from '../ui/Typography'

interface GeneratorFormProps {
  industry: string
  brandTone: BrandTone
  onIndustryChange: (industry: string) => void
  onBrandToneChange: (brandTone: BrandTone) => void
  onGenerate: () => void
  isGenerating: boolean
}

const industries = [
  { value: '금융', label: '🏦 금융 (Finance)', desc: '신뢰와 안정감을 주는 파란색 계열' },
  { value: '이커머스', label: '🛍️ 이커머스 (E-commerce)', desc: '활기차고 친근한 색상' },
  { value: '헬스케어', label: '🏥 헬스케어 (Healthcare)', desc: '청결하고 전문적인 느낌' },
  { value: '테크', label: '💻 테크/SaaS (Tech)', desc: '모던하고 혁신적인 디자인' },
  { value: '교육', label: '📚 교육 (Education)', desc: '밝고 집중력 있는 색상' },
  { value: '음식배달', label: '🍔 음식배달 (Food Delivery)', desc: '식욕을 돋우는 따뜻한 색감' },
  { value: '여행', label: '✈️ 여행 (Travel)', desc: '모험적이고 자유로운 느낌' },
  { value: '부동산', label: '🏡 부동산 (Real Estate)', desc: '신뢰감과 안정성' },
  { value: '패션', label: '👗 패션 (Fashion)', desc: '세련되고 트렌디한 스타일' },
  { value: '피트니스', label: '💪 피트니스 (Fitness)', desc: '에너지 넘치는 활동적 느낌' },
  { value: '엔터테인먼트', label: '🎬 엔터테인먼트 (Entertainment)', desc: '화려하고 즐거운 분위기' },
  { value: '자동차', label: '🚗 자동차 (Automotive)', desc: '강력하고 세련된 디자인' },
  { value: '게임', label: '🎮 게임 (Gaming)', desc: '몰입감과 흥미로움' },
  { value: '스타트업', label: '🚀 스타트업 (Startup)', desc: '혁신적이고 역동적인 느낌' },
]

const brandTones: { value: BrandTone; label: string; desc: string }[] = [
  { value: '신뢰', label: '신뢰 (Trust)', desc: '안정적이고 전문적인 느낌' },
  { value: '혁신', label: '혁신 (Innovation)', desc: '창의적이고 미래지향적' },
  { value: '친근', label: '친근 (Friendly)', desc: '편안하고 다가가기 쉬운' },
  { value: '고급', label: '고급 (Luxury)', desc: '프리미엄하고 세련된' },
  { value: '활기', label: '활기 (Energetic)', desc: '생동감 넘치고 밝은' },
]

export default function GeneratorForm({
  industry,
  brandTone,
  onIndustryChange,
  onBrandToneChange,
  onGenerate,
  isGenerating
}: GeneratorFormProps) {
  const selectedIndustry = industries.find(i => i.value === industry)
  const selectedBrandTone = brandTones.find(b => b.value === brandTone)

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 lg:p-10 border border-gray-100">
      <Typography variant="h2" className="mb-6 md:mb-8">
        디자인 시스템 설정
      </Typography>
      
      <div className="space-y-8">
        {/* Industry Select */}
        <div>
          <label className="block mb-3">
            <Typography variant="body" className="font-semibold text-gray-900">
              업종 선택 <span className="text-red-500">*</span>
            </Typography>
          </label>
          
          <select
            value={industry}
            onChange={(e) => onIndustryChange(e.target.value)}
            className="w-full px-4 py-3.5 text-base border-2 border-gray-200 rounded-xl 
                       focus:ring-2 focus:ring-primary-500 focus:border-primary-500 
                       transition-all bg-white hover:border-gray-300
                       appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
              backgroundPosition: 'right 0.5rem center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1.5em 1.5em',
              paddingRight: '2.5rem',
            }}
          >
            {industries.map((ind) => (
              <option key={ind.value} value={ind.value}>
                {ind.label}
              </option>
            ))}
          </select>
          
          {selectedIndustry && (
            <Typography variant="caption" className="text-gray-500 mt-2 block">
              {selectedIndustry.desc}
            </Typography>
          )}
        </div>

        {/* Brand Tone Select */}
        <div>
          <label className="block mb-3">
            <Typography variant="body" className="font-semibold text-gray-900">
              브랜드 톤 <span className="text-red-500">*</span>
            </Typography>
          </label>
          
          <select
            value={brandTone}
            onChange={(e) => onBrandToneChange(e.target.value as BrandTone)}
            className="w-full px-4 py-3.5 text-base border-2 border-gray-200 rounded-xl 
                       focus:ring-2 focus:ring-primary-500 focus:border-primary-500 
                       transition-all bg-white hover:border-gray-300
                       appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
              backgroundPosition: 'right 0.5rem center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1.5em 1.5em',
              paddingRight: '2.5rem',
            }}
          >
            {brandTones.map((tone) => (
              <option key={tone.value} value={tone.value}>
                {tone.label}
              </option>
            ))}
          </select>
          
          {selectedBrandTone && (
            <Typography variant="caption" className="text-gray-500 mt-2 block">
              {selectedBrandTone.desc}
            </Typography>
          )}
        </div>

        {/* Generate Button */}
        <div className="pt-4">
          <Button
            variant="primary"
            size="lg"
            onClick={onGenerate}
            disabled={isGenerating}
            fullWidth
            className="text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            {isGenerating ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                생성 중...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                🚀 디자인 시스템 생성하기
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
