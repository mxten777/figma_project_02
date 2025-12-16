import { useState } from 'react'

interface ResultDisplayProps {
  result: string
  industry: string
  onDownload: () => void
  onCopy: () => void
}

export default function ResultDisplay({ result, industry, onDownload, onCopy }: ResultDisplayProps) {
  const [showFullJson, setShowFullJson] = useState(false)
  
  // Parse JSON to show preview
  let preview = null
  try {
    const parsed = JSON.parse(result)
    preview = {
      industry: parsed.meta?.industry,
      brandTone: parsed.meta?.brandTone,
      primaryColor: parsed.colors?.primary?.['500'],
      secondaryColor: parsed.colors?.secondary?.['500'],
      h1Size: parsed.typography?.scale?.h1?.fontSize,
      sections: parsed.layout?.sections?.length || 0
    }
  } catch (e) {
    console.error('JSON parse error:', e)
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">✨ 생성 완료!</h2>
        <div className="flex gap-3">
          <button
            onClick={onCopy}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors flex items-center gap-2"
          >
            📋 복사
          </button>
          <button
            onClick={onDownload}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
          >
            💾 다운로드
          </button>
        </div>
      </div>

      {/* Preview Cards */}
      {preview && (
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl">
            <div className="text-sm text-gray-600 mb-1">Primary Color</div>
            <div className="flex items-center gap-3">
              <div 
                className="w-12 h-12 rounded-lg shadow-md"
                style={{ backgroundColor: preview.primaryColor }}
              />
              <span className="font-mono font-bold text-gray-900">{preview.primaryColor}</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl">
            <div className="text-sm text-gray-600 mb-1">Secondary Color</div>
            <div className="flex items-center gap-3">
              <div 
                className="w-12 h-12 rounded-lg shadow-md"
                style={{ backgroundColor: preview.secondaryColor }}
              />
              <span className="font-mono font-bold text-gray-900">{preview.secondaryColor}</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl">
            <div className="text-sm text-gray-600 mb-1">Sections</div>
            <div className="text-3xl font-bold text-gray-900">{preview.sections}개</div>
            <div className="text-sm text-gray-500 mt-1">레이아웃 섹션</div>
          </div>
        </div>
      )}

      {/* JSON Display */}
      <div className="bg-gray-900 rounded-xl overflow-hidden">
        <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
          <span className="text-gray-300 font-mono text-sm">{industry}-design-system.json</span>
          <button
            onClick={() => setShowFullJson(!showFullJson)}
            className="text-gray-400 hover:text-white text-sm"
          >
            {showFullJson ? '접기 ▲' : '전체보기 ▼'}
          </button>
        </div>
        <pre className={`p-4 text-sm text-gray-100 font-mono overflow-x-auto ${showFullJson ? 'max-h-[600px]' : 'max-h-[300px]'} overflow-y-auto`}>
          {result}
        </pre>
      </div>

      {/* Usage Hint */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h3 className="font-semibold text-blue-900 mb-1">다음 단계</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Figma에서 figmaGuide를 참고하여 페이지 구조 생성</li>
              <li>• tailwind.config.js에 colors 추가</li>
              <li>• 컴포넌트에 tailwindExample 클래스 적용</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
