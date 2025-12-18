/**
 * 디자인 토큰 (Design Tokens)
 * 
 * 설계 의도:
 * - Figma Color Styles → TypeScript 상수
 * - 업종별 Primary 컬러 교체 용이
 * - tailwind.config.js 확장에 사용
 * - 타입 안전성 보장
 */

export const colors = {
  // Primary - 업종별 변경 포인트
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',  // 기본 Primary 컬러
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },

  // Secondary - 보조 컬러
  secondary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },

  // Gray - Neutral 컬러
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
}

// Spacing - 일관된 여백 시스템
export const spacing = {
  section: {
    sm: '2rem',     // 32px
    md: '4rem',     // 64px
    lg: '6rem',     // 96px
    xl: '8rem',     // 128px
  },
  container: {
    padding: {
      mobile: '1rem',    // 16px
      tablet: '1.5rem',  // 24px
      desktop: '2rem',   // 32px
    },
  },
}

// Border Radius - 모서리 둥글기
export const radius = {
  sm: '0.5rem',    // 8px
  md: '0.75rem',   // 12px
  lg: '1rem',      // 16px
  xl: '1.5rem',    // 24px
  full: '9999px',  // 완전한 원형
}

// Typography - 텍스트 스타일
export const typography = {
  fontFamily: {
    sans: ['Pretendard', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
  fontSize: {
    h1: {
      mobile: '2.5rem',    // 40px
      desktop: '3.75rem',  // 60px
    },
    h2: {
      mobile: '2rem',      // 32px
      desktop: '3rem',     // 48px
    },
    h3: {
      mobile: '1.5rem',    // 24px
      desktop: '2rem',     // 32px
    },
    body: '1.125rem',      // 18px
    caption: '0.875rem',   // 14px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
}

// Breakpoints - 반응형 기준점
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1440px',  // 메인 컨텐츠 max-width
}

// Layout - 레이아웃 기준
export const layout = {
  maxWidth: {
    container: '1440px',  // 메인 컨텐츠 영역
    content: '768px',     // 읽기 편한 텍스트 영역
  },
  header: {
    height: {
      mobile: '64px',     // 4rem
      desktop: '80px',    // 5rem
    },
  },
}

/**
 * 업종별 Primary 컬러 교체 예시:
 * 
 * // 금융 (파란색)
 * primary: { 500: '#0052CC', ... }
 * 
 * // 이커머스 (주황색)
 * primary: { 500: '#FF6B35', ... }
 * 
 * // 게임 (보라색)
 * primary: { 500: '#A855F7', ... }
 */
