import { useState, useEffect } from 'react'
import { generateAndValidate } from '../src/generator'
import { BrandTone } from '../src/types'
import Header from './components/layout/Header'
import Hero from './sections/HeroSection'
import Section from './components/layout/Section'
import GeneratorForm from './components/generator/GeneratorForm'
import ResultDisplay from './components/generator/ResultDisplay'
import ComparisonPage from './ComparisonPage'
import PreviewPage from './PreviewPage'

function App() {
  // URL 해시 기반 초기 페이지 설정 - 기본값을 'generator'로 변경
  const getInitialPage = (): 'generator' | 'comparison' | 'preview' => {
    const hash = window.location.hash.slice(1) // # 제거
    if (hash === 'comparison' || hash === 'preview') {
      return hash as 'comparison' | 'preview'
    }
    return 'generator'
  }

  const [currentPage, setCurrentPage] = useState<'generator' | 'comparison' | 'preview'>(getInitialPage())
  const [industry, setIndustry] = useState('금융')
  const [brandTone, setBrandTone] = useState<BrandTone>('신뢰')
  const [result, setResult] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  // URL 해시 변경 시 페이지 업데이트
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash === 'comparison' || hash === 'preview' || hash === '') {
        setCurrentPage(hash === '' ? 'generator' : hash as any)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // 페이지 변경 시 URL 해시 업데이트
  useEffect(() => {
    const hash = currentPage === 'generator' ? '' : currentPage
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
    return <ComparisonPage onBackToGenerator={() => setCurrentPage('generator')} />
  }

  // Preview Page
  if (currentPage === 'preview') {
    return <PreviewPage onBackToGenerator={() => setCurrentPage('generator')} />
  }

  // Main Generator Page (새 디자인 시스템 적용)
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header
        logoSrc="/images/baikal_logo_trans.png"
        logoText="Baikal"
        menuItems={[
          { label: 'Features', href: '#features' },
          { label: 'About', href: '#about' },
          { label: 'GitHub', href: 'https://github.com' },
        ]}
        ctaText="Get Started"
        onCtaClick={() => window.scrollTo({ top: document.getElementById('generator')?.offsetTop || 0, behavior: 'smooth' })}
        maxVisibleItems={5}
      />
      
      {/* Hero Section */}
      <Hero
        title={
          <span className="flex items-center justify-center gap-3">
            <span className="text-5xl md:text-6xl">🎨</span>
            <span className="whitespace-nowrap">디자인 시스템 생성기</span>
          </span>
        }
        subtitle="업종에 맞는 완벽한 Figma & Tailwind 스펙을 즉시 생성하세요"
        primaryCtaText="🎨 랜딩페이지 미리보기"
        onPrimaryCtaClick={() => setCurrentPage('preview')}
        secondaryCtaText="🌍 업종별 비교 보기"
        onSecondaryCtaClick={() => setCurrentPage('comparison')}
        background="gradient"
      />

      {/* Generator Section */}
      <Section spacing="xl" background="transparent" id="generator">
        <div className="max-w-4xl mx-auto">
          <GeneratorForm
            industry={industry}
            brandTone={brandTone}
            onIndustryChange={setIndustry}
            onBrandToneChange={setBrandTone}
            onGenerate={handleGenerate}
            isGenerating={isGenerating}
          />
        </div>
      </Section>

      {/* Result Display */}
      {result && (
        <Section spacing="xl" background="transparent">
          <div className="max-w-6xl mx-auto">
            <ResultDisplay
              result={result}
              industry={industry}
              onDownload={handleDownload}
              onCopy={handleCopy}
            />
          </div>
        </Section>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-24 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600">Made with ❤️ by Baikal Team</p>
        </div>
      </footer>
    </div>
  )
}

export default App
