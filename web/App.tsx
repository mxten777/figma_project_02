import { useState, useEffect } from 'react'
import { generateAndValidate } from '../src/generator'
import { BrandTone } from '../src/types'
import Header from './components/layout/Header'
import HomePage from './pages/HomePage'
import GeneratorForm from './components/generator/GeneratorForm'
import ResultDisplay from './components/generator/ResultDisplay'
import ComparisonPage from './ComparisonPage'
import PreviewPage from './PreviewPage'

function App() {
  // URL 해시 기반 초기 페이지 설정 - 기본값을 'home'으로 변경
  const getInitialPage = (): 'home' | 'generator' | 'comparison' | 'preview' => {
    const hash = window.location.hash.slice(1) // # 제거
    if (hash === 'generator' || hash === 'comparison' || hash === 'preview') {
      return hash as 'generator' | 'comparison' | 'preview'
    }
    return 'home'
  }

  const [currentPage, setCurrentPage] = useState<'home' | 'generator' | 'comparison' | 'preview'>(getInitialPage())
  const [industry, setIndustry] = useState('금융')
  const [brandTone, setBrandTone] = useState<BrandTone>('신뢰')
  const [result, setResult] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  // URL 해시 변경 시 페이지 업데이트
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash === 'generator' || hash === 'comparison' || hash === 'preview' || hash === 'home' || hash === '') {
        setCurrentPage(hash === '' ? 'home' : hash as any)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // 페이지 변경 시 URL 해시 업데이트
  useEffect(() => {
    const hash = currentPage === 'home' ? '' : currentPage
    if (window.location.hash.slice(1) !== hash) {
      window.history.pushState(null, '', hash ? `#${hash}` : window.location.pathname)
    }
  }, [currentPage])

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

  // Home Page (Hero + Features)
  if (currentPage === 'home') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Header
          logoSrc="/images/baikal_logo_trans.png"
          logoText="Baikal"
          menuItems={[
            { label: 'Home', onClick: () => setCurrentPage('home') },
            { label: 'Generator', onClick: () => setCurrentPage('generator') },
            { label: 'Preview', onClick: () => setCurrentPage('preview') },
            { label: 'Comparison', onClick: () => setCurrentPage('comparison') },
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
        
        <footer className="bg-white border-t border-gray-200 mt-16 py-6">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-600 text-sm md:text-base">Made with ❤️ by Baikal Team</p>
          </div>
        </footer>
      </div>
    )
  }

  // Generator Page
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header
        logoSrc="/images/baikal_logo_trans.png"
        logoText="Baikal"
        menuItems={[
          { label: 'Home', onClick: () => setCurrentPage('home') },
          { label: 'Generator', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
          { label: 'Preview', onClick: () => setCurrentPage('preview') },
          { label: 'Comparison', onClick: () => setCurrentPage('comparison') },
        ]}
        ctaText="Get Started"
        onCtaClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        maxVisibleItems={5}
      />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Hero Title */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center justify-center gap-3">
            <span className="text-5xl md:text-6xl">🎨</span>
            <span>디자인 시스템 생성기</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            업종에 맞는 완벽한 Figma & Tailwind 스펙을 즉시 생성하세요
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-8 md:mb-12">
          <button
            onClick={() => setCurrentPage('preview')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-md hover:shadow-lg text-sm md:text-base"
          >
            👁️ 랜딩페이지 미리보기
          </button>
          <button
            onClick={() => setCurrentPage('comparison')}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg text-sm md:text-base"
          >
            🌍 업종별 비교 보기
          </button>
        </div>

        {/* Generator Section */}
        <div className="max-w-4xl mx-auto mb-8">
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
          <div className="max-w-6xl mx-auto">
            <ResultDisplay
              result={result}
              industry={industry}
              onDownload={handleDownload}
              onCopy={handleCopy}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm md:text-base">Made with ❤️ by Baikal Team</p>
        </div>
      </footer>
    </div>
  )
}

export default App
