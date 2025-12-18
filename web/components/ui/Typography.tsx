/**
 * Typography 컴포넌트
 * 
 * 설계 의도:
 * - Figma Text Styles를 React 컴포넌트로 매핑
 * - 타입 안전성 (variant props로 제한)
 * - 일관된 타이포그래피 보장
 * - as prop으로 HTML 태그 변경 가능
 */

import { createElement, HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils/cn'

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'body-sm' | 'caption'
type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant: TypographyVariant
  as?: TypographyElement
  children: ReactNode
}

// Figma Text Styles → Tailwind 클래스 매핑
const variantStyles: Record<TypographyVariant, string> = {
  // H1: Hero 제목 (Desktop: 60px, Mobile: 40px)
  h1: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight',
  
  // H2: Section 제목 (Desktop: 48px, Mobile: 32px)
  h2: 'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight',
  
  // H3: Card 제목 (Desktop: 32px, Mobile: 24px)
  h3: 'text-2xl md:text-3xl font-bold leading-snug',
  
  // H4: 소제목 (Desktop: 24px, Mobile: 20px)
  h4: 'text-xl md:text-2xl font-semibold leading-snug',
  
  // Body: 본문 (18px)
  body: 'text-base md:text-lg leading-relaxed',
  
  // Body-sm: 작은 본문 (16px)
  'body-sm': 'text-sm md:text-base leading-relaxed',
  
  // Caption: 캡션/설명 (14px)
  caption: 'text-xs md:text-sm leading-normal text-gray-600',
}

// variant → 기본 HTML 태그 매핑
const defaultElements: Record<TypographyVariant, TypographyElement> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  'body-sm': 'p',
  caption: 'span',
}

const Typography = ({ variant, as, className, children, ...props }: TypographyProps) => {
  const element = as || defaultElements[variant]
  
  return createElement(
    element,
    {
      className: cn(variantStyles[variant], className),
      ...props,
    },
    children
  )
}

export default Typography

/**
 * 사용 예시:
 * 
 * <Typography variant="h1">
 *   디자인 시스템 생성기
 * </Typography>
 * 
 * <Typography variant="body" className="text-gray-700">
 *   업종에 맞는 완벽한 디자인을 자동으로 생성합니다.
 * </Typography>
 * 
 * <Typography variant="caption" as="div">
 *   © 2025 Baikal
 * </Typography>
 */
