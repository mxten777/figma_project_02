/**
 * Finance Industry Preset
 */

import { DesignSystemSpec, BrandTone } from "../types";
import { generateColorScale } from "../utils/colorGenerator";

export function getFinancePreset(brandTone: BrandTone = "신뢰"): DesignSystemSpec {
  return {
    meta: {
      industry: "금융",
      brandTone: brandTone,
      styleKeywords: ["신뢰성", "안정감", "전문성", "보안", "명확성"],
      targetFeeling: "사용자에게 안전하고 믿을 수 있는 금융 서비스라는 확신을 제공"
    },

    figmaGuide: {
      pages: [
        "🎨 Design System",
        "📱 Components",
        "📄 Templates - Desktop",
        "📱 Templates - Mobile",
        "🔍 Use Cases"
      ],
      namingRule: "Component/Variant/State 구조 (예: Button/Primary/Hover)",
      autoLayoutRules: {
        grid: "12-column grid, 24px gutter",
        spacingScale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128],
        radiusScale: [4, 8, 12, 16, 24],
        typeScaleTokens: ["text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl"],
        breakpoints: ["mobile: 375px", "tablet: 768px", "desktop: 1280px", "wide: 1920px"]
      }
    },

    layout: {
      header: {
        heightPx: 72,
        structure: ["Logo", "Navigation", "Search", "User Menu", "CTA"],
        stickyBehavior: "sticky top-0 with shadow on scroll",
        desktop: {
          paddingX: "px-6 lg:px-12",
          maxWidth: "max-w-[1440px]",
          navItems: 6
        },
        mobile: {
          pattern: "Hamburger menu with drawer",
          heightPx: 64
        },
        tailwindExample: "bg-white border-b border-gray-200 sticky top-0 z-50 h-18 flex items-center justify-between px-6 lg:px-12"
      },

      hero: {
        structure: ["Headline", "Subheadline", "Primary CTA", "Secondary CTA", "Trust Indicators"],
        desktopGrid: "2-column (60% text, 40% visual)",
        mobileStack: "vertical stack, text-first",
        padding: "py-16 md:py-24 lg:py-32",
        background: "gradient from primary-50 to white",
        imageStyle: "Clean dashboard mockup or abstract financial graphics",
        tailwindExample: "bg-gradient-to-b from-primary-50 to-white py-16 md:py-24 lg:py-32 px-6"
      },

      footer: {
        structure: ["Logo & Description", "Links (4 columns)", "Social Media", "Legal & Compliance"],
        legalItems: ["이용약관", "개인정보처리방침", "금융소비자보호", "예금자보호안내"],
        tailwindExample: "bg-gray-900 text-gray-300 py-12 px-6 mt-24"
      },

      sections: [
        {
          name: "Features Section",
          goal: "핵심 금융 서비스 기능을 명확하게 전달",
          layoutRule: "3-column grid on desktop, single column on mobile, icon + title + description",
          tailwindExample: "py-20 px-6 grid md:grid-cols-3 gap-8"
        },
        {
          name: "Security & Trust",
          goal: "보안 인증 및 신뢰 지표 강조",
          layoutRule: "Centered badge layout with logos of certifications",
          tailwindExample: "bg-gray-50 py-16 px-6 flex flex-wrap justify-center gap-8 items-center"
        },
        {
          name: "Testimonials",
          goal: "실제 사용자 후기로 신뢰도 강화",
          layoutRule: "Card carousel, 3 cards visible on desktop",
          tailwindExample: "py-20 px-6 overflow-x-auto flex gap-6 snap-x"
        },
        {
          name: "CTA Section",
          goal: "회원가입 또는 상담 신청 유도",
          layoutRule: "Centered with strong primary button",
          tailwindExample: "bg-primary-600 text-white py-20 px-6 text-center"
        },
        {
          name: "FAQ",
          goal: "자주 묻는 질문으로 이탈 방지",
          layoutRule: "Accordion list, max 2 columns on desktop",
          tailwindExample: "py-20 px-6 max-w-4xl mx-auto"
        }
      ]
    },

    colors: {
      primary: generateColorScale("#0052CC", "primary"),
      secondary: generateColorScale("#00875A", "secondary"),
      gray: generateColorScale("#42526E", "gray"),
      usageRules: {
        primaryUse: "주요 CTA, 링크, 중요 정보 강조",
        secondaryUse: "성공 메시지, 보조 액션, 긍정적 피드백",
        surfaceBg: "gray-50 for sections, white for cards",
        border: "gray-200 for default, gray-300 for emphasis",
        textStrong: "gray-900 for headings",
        textWeak: "gray-600 for body, gray-500 for captions"
      },
      accessibilityNotes: [
        "모든 텍스트는 WCAG 2.1 AA 기준 4.5:1 이상의 명도 대비 유지",
        "Primary-600과 white 조합은 7.2:1로 AAA 기준 충족",
        "Interactive 요소는 최소 44x44px 터치 영역 확보"
      ]
    },

    typography: {
      fontFamily: {
        primary: "Pretendard",
        fallback: "system-ui",
        altSuggestion: "IBM Plex Sans (금융권 전문성 강조 시 추천)"
      },
      scale: {
        h1: {
          fontSize: "48px",
          fontWeight: 700,
          lineHeight: "1.2",
          letterSpacing: "-0.02em"
        },
        h2: {
          fontSize: "36px",
          fontWeight: 700,
          lineHeight: "1.3",
          letterSpacing: "-0.01em"
        },
        h3: {
          fontSize: "24px",
          fontWeight: 600,
          lineHeight: "1.4",
          letterSpacing: "0"
        },
        body: {
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "1.6",
          letterSpacing: "0"
        },
        caption: {
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "1.5",
          letterSpacing: "0"
        }
      }
    },

    components: {
      button: {
        primary: {
          heightPx: 48,
          padding: "px-6 py-3",
          radius: "rounded-lg",
          bg: "bg-primary-600",
          text: "text-white font-semibold",
          hover: "hover:bg-primary-700 transition-colors duration-200",
          disabled: "disabled:bg-gray-300 disabled:cursor-not-allowed",
          tailwind: "bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 disabled:bg-gray-300"
        },
        secondary: {
          heightPx: 48,
          padding: "px-6 py-3",
          radius: "rounded-lg",
          border: "border-2 border-primary-600",
          text: "text-primary-600 font-semibold",
          hover: "hover:bg-primary-50 transition-colors duration-200",
          disabled: "disabled:border-gray-300 disabled:text-gray-300 disabled:cursor-not-allowed",
          tailwind: "border-2 border-primary-600 text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors duration-200"
        }
      },
      input: {
        heightPx: 48,
        radius: "rounded-lg",
        border: "border border-gray-300",
        placeholder: "placeholder:text-gray-500",
        focusRing: "focus:ring-2 focus:ring-primary-500 focus:border-transparent",
        tailwind: "w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent placeholder:text-gray-500"
      },
      card: {
        radius: "rounded-xl",
        padding: "p-6",
        shadow: "shadow-md hover:shadow-lg transition-shadow duration-200",
        border: "border border-gray-200",
        tailwind: "bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200"
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
        container: "max-w-[1440px] mx-auto px-6 lg:px-12",
        header: "bg-white border-b border-gray-200 sticky top-0 z-50 h-18 flex items-center justify-between px-6 lg:px-12",
        hero: "bg-gradient-to-b from-primary-50 to-white py-16 md:py-24 lg:py-32 px-6",
        primaryButton: "bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200",
        secondaryButton: "border-2 border-primary-600 text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors duration-200",
        card: "bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200",
        input: "w-full h-12 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
      },
      implementationNotes: [
        "tailwind.config.js에서 colors 확장 필수",
        "Pretendard 폰트는 CDN 또는 local import 필요",
        "focus-visible 사용으로 키보드 네비게이션 접근성 개선",
        "transition 클래스는 사용자 인터랙션 피드백에 필수"
      ]
    },

    variationSummary: {
      changedPoints: [
        {
          category: "Colors",
          field: "primary 색상이 파란 계열(#0052CC)",
          reason: "금융권은 신뢰와 안정을 상징하는 파란색이 필수. 보수적이고 전문적인 이미지 전달"
        },
        {
          category: "Typography",
          field: "font-weight가 전반적으로 높음(h1: 700)",
          reason: "중요한 숫자와 정보를 명확히 인지시키기 위해 Bold 사용 빈도 증가"
        },
        {
          category: "Layout",
          field: "Footer에 법적 고지 섹션 강조",
          reason: "금융권은 금융감독원 규제로 인해 이용약관, 예금자보호 등 법적 정보 노출 의무"
        },
        {
          category: "Components",
          field: "Button radius가 상대적으로 보수적(8px)",
          reason: "지나치게 둥근 버튼은 신뢰도를 낮출 수 있어 절제된 라운드 사용"
        },
        {
          category: "Sections",
          field: "Security & Trust 섹션 추가",
          reason: "인증마크, 보안 배지 등이 전환율에 직접적 영향을 미치는 업종 특성"
        }
      ],
      unchangedPrinciples: [
        "12-column grid 시스템은 업종 무관하게 유지 (반응형 표준)",
        "8px 기반 spacing scale은 일관된 시각적 리듬 제공",
        "WCAG 2.1 AA 접근성 기준은 모든 업종에서 준수",
        "Mobile-first 설계 원칙은 업종과 무관한 현대 웹 표준"
      ]
    }
  };
}
