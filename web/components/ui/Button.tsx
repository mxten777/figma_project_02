/**
 * Button 컴포넌트
 * 
 * 설계 의도:
 * - 3가지 variant (primary/secondary/ghost) 지원
 * - 3가지 size (sm/md/lg) 지원
 * - disabled 상태 자동 처리
 * - 전 페이지에서 동일한 버튼 스타일 보장
 * - Figma의 Button Component와 1:1 매핑
 */

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          // Base styles - 모든 버튼 공통
          'inline-flex items-center justify-center gap-2',
          'font-semibold transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          
          // Variant styles - Figma Button Component 매핑
          {
            // Primary: 강한 액션 (가입, 구매, 제출)
            'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800': 
              variant === 'primary',
            'focus:ring-primary-500': variant === 'primary',
            
            // Secondary: 보조 액션 (더보기, 취소)
            'border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50 active:bg-gray-100': 
              variant === 'secondary',
            'focus:ring-gray-500': variant === 'secondary',
            
            // Ghost: 최소 강조 (링크 대체, 아이콘 버튼)
            'text-gray-700 hover:bg-gray-100 active:bg-gray-200': 
              variant === 'ghost',
            'focus:ring-gray-500': variant === 'ghost',
          },
          
          // Size styles - Figma Text Styles 매핑
          {
            'px-3 py-1.5 text-sm rounded-lg': size === 'sm',      // H: 32px
            'px-4 py-2.5 text-base rounded-xl': size === 'md',    // H: 44px
            'px-6 py-3.5 text-lg rounded-xl': size === 'lg',      // H: 56px
          },
          
          // Full width
          fullWidth && 'w-full',
          
          // Custom className (덮어쓰기 가능)
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button

/**
 * 사용 예시:
 * 
 * <Button variant="primary" size="lg">
 *   무료로 시작하기
 * </Button>
 * 
 * <Button variant="secondary" size="md" disabled>
 *   로딩 중...
 * </Button>
 * 
 * <Button variant="ghost" size="sm" onClick={handleClick}>
 *   취소
 * </Button>
 */
