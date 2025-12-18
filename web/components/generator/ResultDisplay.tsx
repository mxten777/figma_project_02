/**
 * ResultDisplay - 생성된 디자인 시스템 결과 표시
 * 
 * JSON 미리보기, 다운로드, 클립보드 복사 기능
 */

import Button from '../ui/Button'
import Typography from '../ui/Typography'

interface ResultDisplayProps {
  result: string
  industry: string
  onDownload: () => void
  onCopy: () => void
}

export default function ResultDisplay({
  result,
  industry,
  onDownload,
  onCopy
}: ResultDisplayProps) {
  // JSON을 파싱하여 주요 정보 추출
  let parsedResult: any = {}
  let colorPalette: any = null
  let typography: any = null
  
  try {
    parsedResult = JSON.parse(result)
    colorPalette = parsedResult.colors
    typography = parsedResult.typography
  } catch (e) {
    // JSON 파싱 실패 시 원본 표시
  }

  return (
    <div className="space-y-6">
      {/* 결과 헤더 */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">✅</span>
          <Typography variant="h2" className="text-gray-900">
            생성 완료!
          </Typography>
        </div>
        <Typography variant="body" className="text-gray-700">
          <strong>{industry}</strong> 업종에 최적화된 디자인 시스템이 생성되었습니다.
        </Typography>
      </div>

      {/* 컬러 팔레트 미리보기 */}
      {colorPalette && (
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <Typography variant="h3" className="mb-4">
            🎨 컬러 팔레트
          </Typography>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(colorPalette.primary || {}).slice(0, 8).map(([key, value]: [string, any]) => (
              <div key={key} className="space-y-2">
                <div 
                  className="h-16 rounded-lg shadow-md border border-gray-200"
                  style={{ backgroundColor: value }}
                />
                <Typography variant="caption" className="text-gray-600 text-center block">
                  {key}: {value}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 타이포그래피 미리보기 */}
      {typography && (
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <Typography variant="h3" className="mb-4">
            📝 타이포그래피
          </Typography>
          <div className="space-y-4">
            <div className="pb-3 border-b border-gray-200">
              <Typography variant="caption" className="text-gray-500 block mb-1">
                Font Family
              </Typography>
              <Typography variant="body" className="font-semibold">
                {typography.fontFamily || 'Pretendard'}
              </Typography>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {typography.scale && Object.entries(typography.scale).map(([key, value]: [string, any]) => (
                <div key={key} className="p-3 bg-gray-50 rounded-lg">
                  <Typography variant="caption" className="text-gray-500 block mb-1">
                    {key}
                  </Typography>
                  <Typography variant="body" className="font-semibold">
                    {value}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* JSON 코드 블록 */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <Typography variant="h3">
            📄 JSON 스펙
          </Typography>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={onCopy}
              className="text-sm"
            >
              📋 복사
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={onDownload}
              className="text-sm"
            >
              💾 다운로드
            </Button>
          </div>
        </div>
        <div className="p-6 overflow-x-auto">
          <pre className="text-sm text-gray-800 font-mono leading-relaxed">
            {JSON.stringify(parsedResult, null, 2)}
          </pre>
        </div>
      </div>

      {/* 다음 단계 안내 */}
      <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
        <Typography variant="h3" className="mb-3 text-gray-900">
          🚀 다음 단계
        </Typography>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">1.</span>
            <Typography variant="body" className="text-gray-700">
              JSON 파일을 다운로드하여 프로젝트에 추가하세요
            </Typography>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">2.</span>
            <Typography variant="body" className="text-gray-700">
              Tailwind CSS 설정 파일에 컬러와 타이포그래피를 적용하세요
            </Typography>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">3.</span>
            <Typography variant="body" className="text-gray-700">
              Figma에서 디자인 토큰을 가져와 디자인 작업을 시작하세요
            </Typography>
          </li>
        </ul>
      </div>
    </div>
  )
}
