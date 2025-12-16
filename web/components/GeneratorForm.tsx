import { BrandTone } from '../../src/types'

interface GeneratorFormProps {
  industry: string
  brandTone: BrandTone
  onIndustryChange: (industry: string) => void
  onBrandToneChange: (brandTone: BrandTone) => void
  onGenerate: () => void
  isGenerating: boolean
}

export default function GeneratorForm({
  industry,
  brandTone,
  onIndustryChange,
  onBrandToneChange,
  onGenerate,
  isGenerating
}: GeneratorFormProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">디자인 시스템 설정</h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Industry Select */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            업종 선택 <span className="text-red-500">*</span>
          </label>
          <select
            value={industry}
            onChange={(e) => onIndustryChange(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base"
          >
            <option value="금융">🏦 금융 (Finance)</option>
            <option value="이커머스">🛍️ 이커머스 (E-commerce)</option>
            <option value="헬스케어">🏥 헬스케어 (Healthcare)</option>
            <option value="테크">💻 테크/SaaS (Tech)</option>
            <option value="교육">📚 교육 (Education)</option>
            <option value="음식배달">🍔 음식배달 (Food Delivery)</option>
            <option value="부동산">🏠 부동산 (Real Estate)</option>
            <option value="패션">👗 패션 (Fashion)</option>
            <option value="게임">🎮 게임 (Gaming)</option>
            <option value="여행">✈️ 여행 (Travel)</option>
            <option value="피트니스">💪 피트니스 (Fitness)</option>
            <option value="호텔">🏨 호텔 (Hotel)</option>
            <option value="자동차">🚗 자동차 (Automotive)</option>
            <option value="미디어">🎬 미디어/OTT (Media)</option>
          </select>
          <p className="mt-2 text-sm text-gray-500">
            {industry === '금융' && '신뢰와 안정감을 주는 파란색 계열'}
            {industry === '이커머스' && '구매욕구를 자극하는 주황색 계열'}
            {industry === '헬스케어' && '청결함을 주는 청록색 계열'}
            {industry === '테크' && '혁신적인 인디고/보라 계열'}
            {industry === '교육' && '학습 동기를 부여하는 밝은 파란색'}
            {industry === '음식배달' && '식욕을 자극하는 빨강/주황 계열'}
            {industry === '부동산' && '고급스러운 청록색 계열'}
            {industry === '패션' && '세련된 핑크/퍼플 계열'}
            {industry === '게임' && '역동적인 퍼플/핑크 네온 계열'}
            {industry === '여행' && '자유로운 하늘색/오렌지 계열'}
            {industry === '피트니스' && '활기찬 그린/에메랄드 계열'}
            {industry === '호텔' && '프리미엄 틸/골드 계열'}
            {industry === '자동차' && '강렬한 레드/다크 계열'}
            {industry === '미디어' && '몰입감 있는 레드/퍼플 다크 테마'}
          </p>
        </div>

        {/* Brand Tone Select */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            브랜드 톤 <span className="text-red-500">*</span>
          </label>
          <select
            value={brandTone}
            onChange={(e) => onBrandToneChange(e.target.value as BrandTone)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base"
          >
            <option value="신뢰">신뢰 (Trust)</option>
            <option value="프리미엄">프리미엄 (Premium)</option>
            <option value="친근">친근 (Friendly)</option>
            <option value="테크">테크 (Tech)</option>
            <option value="미니멀">미니멀 (Minimal)</option>
          </select>
          <p className="mt-2 text-sm text-gray-500">
            {brandTone === '신뢰' && '안정적이고 전문적인 느낌'}
            {brandTone === '프리미엄' && '고급스럽고 세련된 이미지'}
            {brandTone === '친근' && '접근하기 쉽고 편안한 분위기'}
            {brandTone === '테크' && '혁신적이고 미래지향적'}
            {brandTone === '미니멀' && '간결하고 깔끔한 디자인'}
          </p>
        </div>
      </div>

      {/* Generate Button */}
      <button
        onClick={onGenerate}
        disabled={isGenerating}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isGenerating ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            생성 중...
          </span>
        ) : (
          '🚀 디자인 시스템 생성하기'
        )}
      </button>
    </div>
  )
}
