/**
 * Automotive Industry Preset
 */

import { DesignSystemSpec, BrandTone } from "../types";
import { generateColorScale } from "../utils/colorGenerator";

export function getAutomotivePreset(brandTone: BrandTone = "테크"): DesignSystemSpec {
  return {
    meta: {
      industry: "자동차",
      brandTone: brandTone,
      styleKeywords: ["성능", "혁신", "정밀", "파워", "미래"],
      targetFeeling: "첨단 기술과 성능에 대한 기대감을 주는 역동적이고 정밀한 경험"
    },

    figmaGuide: {
      pages: [
        "🎨 Design System",
        "🚗 Vehicle Showcase",
        "🔧 Spec Comparison",
        "📱 Mobile Configurator",
        "🛠️ Service Booking"
      ],
      namingRule: "Component/Category/State (예: VehicleCard/SUV/Featured)",
      autoLayoutRules: {
        grid: "12-column grid, 24px gutter",
        spacingScale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80],
        radiusScale: [4, 8, 12, 16, 20],
        typeScaleTokens: ["text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl"],
        breakpoints: ["mobile: 375px", "tablet: 768px", "desktop: 1440px", "wide: 1920px"]
      }
    },

    layout: {
      header: {
        heightPx: 72,
        structure: ["Logo", "Models", "Technology", "Financing", "Test Drive", "Dealers"],
        stickyBehavior: "sticky with dark background",
        desktop: {
          paddingX: "px-8 lg:px-12",
          maxWidth: "max-w-[1920px]",
          navItems: 6
        },
        mobile: {
          pattern: "Minimal with model selector",
          heightPx: 64
        },
        tailwindExample: "bg-gray-900 text-white border-b border-gray-800 sticky top-0 z-50 h-18 flex items-center justify-between px-8"
      },

      hero: {
        structure: ["360° Vehicle View", "Model Name", "Key Specs", "Configure & Price"],
        desktopGrid: "Full-width with interactive 3D",
        mobileStack: "vertical with swipeable gallery",
        padding: "py-0 (immersive full-screen)",
        background: "Dark studio photography or 3D renders",
        imageStyle: "High-end automotive photography, dramatic lighting",
        tailwindExample: "relative h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center"
      },

      footer: {
        structure: ["Models", "Services", "Company", "Support"],
        legalItems: ["이용약관", "개인정보처리방침", "환경정보", "보증정책"],
        tailwindExample: "bg-black text-gray-400 py-20 px-8 mt-24"
      },

      sections: [
        {
          name: "Model Lineup",
          goal: "전체 차종 소개",
          layoutRule: "Large cards with model photos",
          tailwindExample: "py-24 px-8 grid md:grid-cols-3 gap-12"
        },
        {
          name: "Key Features",
          goal: "주요 기술 강조",
          layoutRule: "Icon + text grid with animations",
          tailwindExample: "bg-gray-50 py-24 px-8 grid md:grid-cols-4 gap-8"
        },
        {
          name: "Performance Specs",
          goal: "성능 수치 강조",
          layoutRule: "Large numbers with comparisons",
          tailwindExample: "bg-black text-white py-24 px-8"
        },
        {
          name: "Configurator",
          goal: "맞춤 설정 유도",
          layoutRule: "Interactive options with live preview",
          tailwindExample: "py-24 px-8 grid md:grid-cols-2 gap-16"
        },
        {
          name: "Test Drive CTA",
          goal: "시승 신청 유도",
          layoutRule: "Full-width with form",
          tailwindExample: "bg-gradient-to-r from-gray-800 to-gray-900 py-24 px-8 text-white"
        }
      ]
    },

    colors: {
      primary: generateColorScale("#DC2626", "primary"),
      secondary: generateColorScale("#3B82F6", "secondary"),
      gray: generateColorScale("#1F2937", "gray"),
      usageRules: {
        primaryUse: "CTA buttons, highlights, performance indicators",
        secondaryUse: "Tech features, links, interactive elements",
        surfaceBg: "black/gray-900 for premium dark theme",
        border: "gray-800 for subtle divisions",
        textStrong: "white on dark backgrounds",
        textWeak: "gray-400 for secondary info"
      },
      accessibilityNotes: [
        "다크 테마 기본, 충분한 명도 대비 필수",
        "스펙 정보는 표 형식으로 구조화",
        "360도 뷰는 키보드 네비게이션 지원"
      ]
    },

    typography: {
      fontFamily: {
        primary: "Pretendard",
        fallback: "system-ui",
        altSuggestion: "Euclid Circular (자동차 브랜드 선호)"
      },
      scale: {
        h1: {
          fontSize: "72px",
          fontWeight: 800,
          lineHeight: "1.0",
          letterSpacing: "-0.03em"
        },
        h2: {
          fontSize: "48px",
          fontWeight: 700,
          lineHeight: "1.1",
          letterSpacing: "-0.02em"
        },
        h3: {
          fontSize: "32px",
          fontWeight: 600,
          lineHeight: "1.2",
          letterSpacing: "-0.01em"
        },
        body: {
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "1.6",
          letterSpacing: "0"
        },
        caption: {
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "1.5",
          letterSpacing: "0.05em"
        }
      }
    },

    components: {
      button: {
        primary: {
          heightPx: 56,
          padding: "px-10 py-4",
          radius: "rounded-md",
          bg: "bg-primary-600",
          text: "text-white font-bold text-base uppercase tracking-widest",
          hover: "hover:bg-primary-700 hover:scale-105 transition-all duration-200",
          disabled: "disabled:bg-gray-700",
          tailwind: "bg-primary-600 text-white font-bold text-base uppercase tracking-widest px-10 py-4 rounded-md hover:bg-primary-700 hover:scale-105 transition-all"
        },
        secondary: {
          heightPx: 56,
          padding: "px-10 py-4",
          radius: "rounded-md",
          border: "border-2 border-white",
          text: "text-white font-bold text-base uppercase tracking-widest",
          hover: "hover:bg-white hover:text-black transition-all duration-200",
          disabled: "disabled:border-gray-700 disabled:text-gray-700",
          tailwind: "border-2 border-white text-white font-bold text-base uppercase tracking-widest px-10 py-4 rounded-md hover:bg-white hover:text-black transition-all"
        }
      },
      input: {
        heightPx: 52,
        radius: "rounded-md",
        border: "border-2 border-gray-700",
        placeholder: "placeholder:text-gray-500",
        focusRing: "focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-gray-900",
        tailwind: "w-full h-13 px-5 bg-gray-900 text-white border-2 border-gray-700 rounded-md focus:ring-2 focus:ring-primary-500"
      },
      card: {
        radius: "rounded-lg",
        padding: "p-0",
        shadow: "shadow-2xl hover:shadow-primary-500/20 transition-all duration-300",
        border: "border border-gray-800",
        tailwind: "bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-2xl hover:shadow-primary-500/20 transition-all"
      }
    },

    tailwindMapping: {
      tailwindConfigExtend: {
        colors: {
          primary: "colors.primary",
          secondary: "colors.secondary",
          gray: "colors.gray"
        },
        fontFamily: {
          sans: ["Pretendard", "system-ui"]
        }
      },
      classSnippets: {
        container: "max-w-[1920px] mx-auto px-8 lg:px-12",
        header: "bg-gray-900 text-white border-b border-gray-800 sticky top-0 z-50 h-18 flex items-center justify-between px-8",
        hero: "relative h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center",
        primaryButton: "bg-primary-600 text-white font-bold text-base uppercase tracking-widest px-10 py-4 rounded-md hover:bg-primary-700 hover:scale-105 transition-all",
        secondaryButton: "border-2 border-white text-white font-bold text-base uppercase tracking-widest px-10 py-4 rounded-md hover:bg-white hover:text-black transition-all",
        card: "bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-2xl hover:shadow-primary-500/20 transition-all",
        input: "w-full h-13 px-5 bg-gray-900 text-white border-2 border-gray-700 rounded-md focus:ring-2 focus:ring-primary-500"
      },
      implementationNotes: [
        "3D 차량 뷰어는 Three.js 또는 WebGL",
        "Configurator는 실시간 가격 계산",
        "비교 도구는 side-by-side table",
        "고해상도 차량 이미지 lazy loading"
      ]
    },

    variationSummary: {
      changedPoints: [
        {
          category: "Colors",
          field: "다크 테마 + 레드 액센트",
          reason: "자동차는 파워와 성능 강조. 다크 배경에 차량이 돋보임"
        },
        {
          category: "Typography",
          field: "매우 큰 헤딩 (72px) + 넓은 tracking",
          reason: "임팩트와 프리미엄. 자동차 광고의 정석"
        },
        {
          category: "Components",
          field: "Sharp corners (rounded-md)",
          reason: "정밀함과 기술력 표현. 덜 둥근 디자인"
        },
        {
          category: "Layout",
          field: "360도 뷰 + Configurator",
          reason: "자동차는 시각적 경험이 핵심. 인터랙티브 탐색"
        }
      ],
      unchangedPrinciples: [
        "반응형 grid 시스템",
        "접근성 기준 준수",
        "Mobile-first 접근",
        "일관된 spacing"
      ]
    }
  };
}
