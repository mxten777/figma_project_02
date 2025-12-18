/**
 * HomePage - 메인 랜딩 페이지
 * 
 * 새 디자인 시스템 적용:
 * - Hero Section (새 컴포넌트)
 * - Features Section (새 구조)
 * - CTA Section (새 구조)
 */

import Hero from '../sections/HeroSection'
import Section from '../components/layout/Section'
import Typography from '../components/ui/Typography'
import Button from '../components/ui/Button'

interface HomePageProps {
  onNavigateToPreview: () => void
  onNavigateToComparison: () => void
  onNavigateToGenerator: () => void
}

export default function HomePage({ 
  onNavigateToPreview, 
  onNavigateToComparison,
  onNavigateToGenerator 
}: HomePageProps) {
  const features = [
    {
      icon: '🎨',
      title: '14개 업종 완벽 지원',
      description: '금융, 이커머스, 헬스케어, 게임 등 업종별 최적화된 디자인 시스템'
    },
    {
      icon: '⚡',
      title: '5초만에 생성',
      description: '버튼 클릭 한 번으로 완성된 JSON 스펙 즉시 다운로드'
    },
    {
      icon: '🎯',
      title: 'Tailwind 통합',
      description: '즉시 적용 가능한 Tailwind CSS 클래스와 컴포넌트 스펙'
    },
    {
      icon: '👁️',
      title: '실시간 미리보기',
      description: '생성된 디자인을 실제 랜딩페이지로 확인'
    },
    {
      icon: '🔍',
      title: '업종별 비교',
      description: '여러 업종의 디자인을 한눈에 비교 분석'
    },
    {
      icon: '♿',
      title: 'WCAG 준수',
      description: '접근성 표준을 자동으로 검증하고 보장'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={
          <span className="block">
            🎨 디자인 시스템<br className="hidden sm:inline" /> 생성기
          </span>
        }
        subtitle="업종에 맞는 완벽한 Figma & Tailwind 스펙을 즉시 생성하세요"
        primaryCtaText="무료로 시작하기"
        onPrimaryCtaClick={onNavigateToGenerator}
        secondaryCtaText="랜딩페이지 미리보기"
        onSecondaryCtaClick={onNavigateToPreview}
        media={
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl blur-3xl opacity-20" />
            <div className="relative bg-white p-8 rounded-2xl shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
                  <div className="flex-1 h-4 bg-gray-200 rounded" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        }
        mediaPosition="right"
        background="gradient"
      />

      {/* Features Section */}
      <Section spacing="xl" background="white">
        <div className="text-center mb-12 md:mb-16">
          <Typography variant="h2" className="mb-4">
            ✨ 주요 기능
          </Typography>
          <Typography variant="body" className="text-gray-600 max-w-2xl mx-auto">
            디자인 시스템을 처음부터 만드는 것은 시간이 오래 걸립니다.<br />
            이 도구는 모든 것을 자동으로 해결합니다.
          </Typography>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 bg-white border-2 border-gray-200 rounded-2xl hover:border-primary-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <Typography variant="h4" className="mb-3">
                {feature.title}
              </Typography>
              <Typography variant="body-sm" className="text-gray-600">
                {feature.description}
              </Typography>
            </div>
          ))}
        </div>
      </Section>

      {/* Quick Actions Section */}
      <Section spacing="lg" background="gray">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Preview Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="text-4xl mb-4">👁️</div>
            <Typography variant="h3" className="mb-3">
              랜딩페이지 미리보기
            </Typography>
            <Typography variant="body-sm" className="text-gray-600 mb-6">
              생성된 디자인을 실제 랜딩페이지로 확인하고<br />
              업종별 차이를 직접 체험해보세요
            </Typography>
            <Button
              variant="primary"
              size="lg"
              onClick={onNavigateToPreview}
              className="w-full"
            >
              미리보기 시작
            </Button>
          </div>

          {/* Comparison Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="text-4xl mb-4">🔍</div>
            <Typography variant="h3" className="mb-3">
              업종별 비교
            </Typography>
            <Typography variant="body-sm" className="text-gray-600 mb-6">
              여러 업종의 디자인 시스템을 나란히 비교하고<br />
              차이점을 한눈에 분석할 수 있습니다
            </Typography>
            <Button
              variant="secondary"
              size="lg"
              onClick={onNavigateToComparison}
              className="w-full"
            >
              비교하기
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="xl" background="transparent" className="bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="text-center text-white py-8 md:py-12">
          <Typography variant="h2" className="mb-4 text-white">
            지금 바로 시작하세요
          </Typography>
          <Typography variant="body" className="mb-8 text-white/90 max-w-2xl mx-auto">
            5초만에 완성된 디자인 시스템을 생성하고<br />
            프로젝트에 즉시 적용할 수 있습니다
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={onNavigateToGenerator}
              className="bg-white text-primary-600 hover:bg-gray-100 shadow-xl"
            >
              무료로 시작하기
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={onNavigateToPreview}
              className="bg-white/10 text-white hover:bg-white/20 border-2 border-white/30"
            >
              데모 보기
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
