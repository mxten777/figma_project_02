/**
 * Hero Section 컴포넌트
 * 
 * 설계 의도:
 * - Hero는 Header와 별도 컴포넌트 (재조합 가능)
 * - 이미지/영상 배치 선택 가능 (left/right/none)
 * - CTA 버튼 2개 지원 (Primary + Secondary)
 * - Desktop: 2단, Mobile: 1단 스택
 */

import { ReactNode } from 'react'
import { cn } from '../utils/cn'
import Section from '../components/layout/Section'
import Typography from '../components/ui/Typography'
import Button from '../components/ui/Button'

export interface HeroProps {
  /** 메인 제목 */
  title: string | ReactNode
  /** 서브 제목 / 설명 */
  subtitle?: string | ReactNode
  /** Primary CTA 버튼 텍스트 */
  primaryCtaText?: string
  /** Primary CTA 클릭 */
  onPrimaryCtaClick?: () => void
  /** Secondary CTA 버튼 텍스트 */
  secondaryCtaText?: string
  /** Secondary CTA 클릭 */
  onSecondaryCtaClick?: () => void
  /** 이미지/영상 위치 */
  mediaPosition?: 'left' | 'right' | 'none'
  /** 이미지/영상 컴포넌트 */
  media?: ReactNode
  /** 배경 스타일 */
  background?: 'white' | 'gradient' | 'dark'
}

const Hero = ({
  title,
  subtitle,
  primaryCtaText,
  onPrimaryCtaClick,
  secondaryCtaText,
  onSecondaryCtaClick,
  mediaPosition = 'right',
  media,
  background = 'gradient'
}: HeroProps) => {
  const hasMedia = mediaPosition !== 'none' && media

  return (
    <Section
      spacing="xl"
      background="transparent"
      className={cn({
        'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50': background === 'gradient',
        'bg-gray-900 text-white': background === 'dark',
      })}
    >
      <div className={cn(
        'grid items-center gap-8 md:gap-12 lg:gap-16',
        hasMedia && 'lg:grid-cols-2'
      )}>
        
        {/* Content - Left or Full */}
        <div className={cn(
          'space-y-6 md:space-y-8',
          hasMedia && mediaPosition === 'left' && 'lg:order-2'
        )}>
          {/* Title */}
          {typeof title === 'string' ? (
            <Typography 
              variant="h1"
              className={cn(
                background === 'dark' ? 'text-white' : 'text-gray-900'
              )}
            >
              {title}
            </Typography>
          ) : (
            title
          )}

          {/* Subtitle */}
          {subtitle && (
            typeof subtitle === 'string' ? (
              <Typography 
                variant="body"
                className={cn(
                  background === 'dark' ? 'text-gray-300' : 'text-gray-600'
                )}
              >
                {subtitle}
              </Typography>
            ) : (
              subtitle
            )
          )}

          {/* CTA Buttons */}
          {(primaryCtaText || secondaryCtaText) && (
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
              {primaryCtaText && (
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onPrimaryCtaClick}
                  className="shadow-lg hover:shadow-xl"
                >
                  {primaryCtaText}
                </Button>
              )}
              {secondaryCtaText && (
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={onSecondaryCtaClick}
                >
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Media - Right or Left */}
        {hasMedia && (
          <div className={cn(
            'relative',
            mediaPosition === 'left' && 'lg:order-1'
          )}>
            {media}
          </div>
        )}
      </div>
    </Section>
  )
}

export default Hero

/**
 * 사용 예시:
 * 
 * // 1. 기본 Hero (이미지 오른쪽)
 * <Hero
 *   title="디자인 시스템을 자동으로 생성하세요"
 *   subtitle="14개 업종에 최적화된 디자인을 단 5초만에"
 *   primaryCtaText="무료로 시작하기"
 *   onPrimaryCtaClick={() => router.push('/signup')}
 *   secondaryCtaText="데모 보기"
 *   onSecondaryCtaClick={() => router.push('/demo')}
 *   media={
 *     <img 
 *       src="/hero-image.png" 
 *       alt="Preview"
 *       className="rounded-2xl shadow-2xl"
 *     />
 *   }
 *   mediaPosition="right"
 *   background="gradient"
 * />
 * 
 * // 2. Dark Hero (이미지 왼쪽)
 * <Hero
 *   title="엔터프라이즈 솔루션"
 *   subtitle="대규모 팀을 위한 전문가 도구"
 *   primaryCtaText="상담 신청"
 *   media={<VideoPlayer />}
 *   mediaPosition="left"
 *   background="dark"
 * />
 * 
 * // 3. Hero without media (중앙 정렬)
 * <Hero
 *   title="서비스 점검 중입니다"
 *   subtitle="잠시 후 다시 시도해주세요"
 *   primaryCtaText="새로고침"
 *   mediaPosition="none"
 * />
 */
