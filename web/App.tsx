import { useState } from 'react'
import { generateAndValidate } from '../src/generator'
import { BrandTone } from '../src/types'
import Header from './components/layout/Header'
import HomePage from './pages/HomePage'
import GeneratorForm from './components/legacy/GeneratorForm'
import ResultDisplay from './components/legacy/ResultDisplay'
import FeatureCards from './components/legacy/FeatureCards'
import ComparisonPage from './ComparisonPage'
import PreviewPage from './PreviewPage'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'generator' | 'comparison' | 'preview'>('home')
  const [industry, setIndustry] = useState('금융')
  const [brandTone, setBrandTone] = useState<BrandTone>('신뢰')
  const [result, setResult] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    
    setTimeout(() => {
      const generated = generateAndValidate({
        industry,
        brandTone
      })
      
      setResult(generated.json)
      setIsGenerating(false)
    }, 500)
  }

  const handleDownload = () => {
    if (!result) return
    
    const blob = new Blob([result], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${industry}-design-system.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleCopy = () => {
    if (!result) return
    navigator.clipboard.writeText(result)
    alert('클립보드에 복사되었습니다! ✅')
  }

  // Comparison Page
  if (currentPage === 'comparison') {
    return <ComparisonPage onBackToGenerator={() => setCurrentPage('home')} />
  }

  // Preview Page
  if (currentPage === 'preview') {
    return <PreviewPage onBackToGenerator={() => setCurrentPage('home')} />
  }

  // Home Page (새 디자인 시스템 적용)
  if (currentPage === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Header
          logoSrc="/images/baikal_logo_trans.png"
          logoText="Baikal"
          menuItems={[
            { label: 'Features', href: '#features' },
            { label: 'Preview', href: '#preview' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'About', href: '#about' },
          ]}
          ctaText="Get Started"
          onCtaClick={() => setCurrentPage('generator')}
          maxVisibleItems={5}
        />
        
        <HomePage
          onNavigateToPreview={() => setCurrentPage('preview')}
          onNavigateToComparison={() => setCurrentPage('comparison')}
          onNavigateToGenerator={() => setCurrentPage('generator')}
        />
      </div>
    )
  }

  // Generator Page (기존 유지)
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header
        logoSrc="/images/baikal_logo_trans.png"
        logoText="Baikal"
        menuItems={[
          { label: 'Home', href: '#' },
          { label: 'Features', href: '#features' },
          { label: 'Preview', href: '#preview' },
        ]}
        ctaText="Get Started"
        onCtaClick={() => setCurrentPage('home')}
      />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 whitespace-nowrap">
            🎨 디자인 시스템 생성기
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            업종에 맞는 완벽한 Figma & Tailwind 스펙을 즉시 생성하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setCurrentPage('preview')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              👁️ 랜딩페이지 미리보기
            </button>
            <button
              onClick={() => setCurrentPage('comparison')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              🔍 업종별 비교 보기
            </button>
            <button
              onClick={() => setCurrentPage('home')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              🏠 홈으로
            </button>
          </div>
        </div>

        {/* Generator Form */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <GeneratorForm
            industry={industry}
            brandTone={brandTone}
            onIndustryChange={setIndustry}
            onBrandToneChange={setBrandTone}
            onGenerate={handleGenerate}
            isGenerating={isGenerating}
          />

          <ResultDisplay
            result={result}
            onDownload={handleDownload}
            onCopy={handleCopy}
          />
        </div>

        {/* Feature Cards */}
        <FeatureCards />
      </main>
    </div>
  )
}

export default App

            </button>
          </div>
        </div>

        {/* Main Generator */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12">
          <GeneratorForm
            industry={industry}
            brandTone={brandTone}
            onIndustryChange={setIndustry}
            onBrandToneChange={setBrandTone}
            onGenerate={handleGenerate}
            isGenerating={isGenerating}
          />
        </div>

        {/* Result Display */}
        {result && (
          <ResultDisplay
            result={result}
            industry={industry}
            onDownload={handleDownload}
            onCopy={handleCopy}
          />
        )}

        {/* Features */}
        {!result && <FeatureCards />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-24 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>Made with ❤️ for Designers & Developers</p>
        </div>
      </footer>
    </div>
  )
}

export default App
