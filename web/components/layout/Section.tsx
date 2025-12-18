/**
 * Section 컨테이너
 * 
 * 설계 의도:
 * - 모든 Section의 공통 wrapper
 * - 1440px 중심 정렬 + 좌우 패딩
 * - Section 간 일관된 여백 (py-12 ~ py-24)
 * - background 설정 가능
 */

import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils/cn'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Section 여백 크기 (default: md) */
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | 'none'
  /** 배경색 */
  background?: 'white' | 'gray' | 'transparent'
  /** 1440px 제한 여부 (default: true) */
  contained?: boolean
  children: ReactNode
}

const Section = ({ 
  spacing = 'md', 
  background = 'transparent',
  contained = true,
  className,
  children,
  ...props 
}: SectionProps) => {
  return (
    <section
      className={cn(
        // 여백 설정
        {
          'py-6 md:py-8': spacing === 'sm',
          'py-12 md:py-16': spacing === 'md',
          'py-16 md:py-24': spacing === 'lg',
          'py-24 md:py-32': spacing === 'xl',
        },
        
        // 배경색
        {
          'bg-white': background === 'white',
          'bg-gray-50': background === 'gray',
        },
        
        className
      )}
      {...props}
    >
      {contained ? (
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}

export default Section

/**
 * 사용 예시:
 * 
 * <Section spacing="lg" background="white">
 *   <Typography variant="h2">주요 기능</Typography>
 *   <FeaturesGrid />
 * </Section>
 * 
 * <Section spacing="xl" background="gray">
 *   <CTAContent />
 * </Section>
 * 
 * <Section spacing="none" contained={false}>
 *   <FullWidthImage />
 * </Section>
 */
