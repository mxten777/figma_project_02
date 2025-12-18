/**
 * classNames 병합 유틸리티
 * 
 * 설계 의도:
 * - Tailwind 클래스 충돌 방지 (예: px-4 + px-6 → px-6만 적용)
 * - 조건부 클래스 간편하게 처리
 * - 전 컴포넌트에서 동일한 패턴 사용
 */

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 사용 예시:
// cn('px-4 py-2', someCondition && 'bg-blue-500', 'px-6') 
// → 결과: 'py-2 bg-blue-500 px-6' (px-4가 px-6으로 덮어써짐)
