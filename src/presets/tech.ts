/**
 * Tech/SaaS Industry Preset
 */

import { DesignSystemSpec, BrandTone } from "../types";
import { generateColorScale } from "../utils/colorGenerator";

export function getTechPreset(brandTone: BrandTone = "테크"): DesignSystemSpec {
  return {
    meta: {
      industry: "테크/SaaS",
      brandTone: brandTone,
      styleKeywords: ["혁신", "효율", "스마트", "미래지향", "간결함"],
      targetFeeling: "최신 기술과 효율적인 솔루션을 제공하는 혁신적인 플랫폼이라는 인상"
    },

    figmaGuide: {
      pages: [
        "🎨 Design System",
        "💻 Product UI",
        "📊 Dashboard Components",
        "📱 Mobile App",
        "🎯 Marketing Pages"
      ],
      namingRule: "Component/Variant/State (예: Dashboard/Widget/Active)",
      autoLayoutRules: {
        grid: "12-column grid, 24px gutter",
        spacingScale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80],
        radiusScale: [6, 8, 12, 16, 20, 24],
        typeScaleTokens: ["text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl"],
        breakpoints: ["mobile: 375px", "tablet: 768px", "laptop: 1024px", "desktop: 1440px", "wide: 1920px"]
      }
    },

    layout: {
      header: {
        heightPx: 64,
        structure: ["Logo", "Product Menu", "Resources", "Pricing", "Login", "Sign Up CTA"],
        stickyBehavior: "sticky with blur backdrop on scroll",
        desktop: {
          paddingX: "px-6 lg:px-12",
          maxWidth: "max-w-[1600px]",
          navItems: 5
        },
        mobile: {
          pattern: "Minimal hamburger with slide-in menu",
          heightPx: 60
        },
        tailwindExample: "backdrop-blur-lg bg-white/80 sticky top-0 z-50 h-16 flex items-center justify-between px-6 border-b border-gray-200/50"
      },

      hero: {
        structure: ["Headline", "Subheadline", "Primary CTA", "Secondary CTA", "Product Screenshot/Demo"],
        desktopGrid: "Centered text with floating product UI",
        mobileStack: "vertical, CTA first",
        padding: "py-20 md:py-32 lg:py-40",
        background: "Animated gradient with mesh background",
        imageStyle: "Modern dashboard UI with glassmorphism effects",
        tailwindExample: "relative bg-gradient-to-br from-primary-600 via-purple-600 to-pink-500 py-20 md:py-32 lg:py-40 px-6 text-center overflow-hidden"
      },

      footer: {
        structure: ["Product", "Company", "Resources", "Social", "Newsletter"],
        legalItems: ["Terms", "Privacy", "Security", "Compliance"],
        tailwindExample: "bg-gray-900 text-gray-300 py-16 px-6 border-t border-gray-800"
      },

      sections: [
        {
          name: "Features Showcase",
          goal: "핵심 기능을 시각적으로 강조",
          layoutRule: "Bento grid layout with mixed sizes",
          tailwindExample: "py-24 px-6 grid md:grid-cols-6 gap-4 auto-rows-fr"
        },
        {
          name: "Integration Partners",
          goal: "연동 가능한 서비스 신뢰도 강화",
          layoutRule: "Logo cloud with infinite scroll animation",
          tailwindExample: "bg-gray-50 py-16 px-6 overflow-hidden"
        },
        {
          name: "Testimonials",
          goal: "실제 사용 후기로 전환율 향상",
          layoutRule: "Card marquee with user info and company logos",
          tailwindExample: "py-24 px-6 space-y-8"
        },
        {
          name: "Pricing Tiers",
          goal: "명확한 가격 정책으로 의사결정 지원",
          layoutRule: "3-column comparison table, centered highlight",
          tailwindExample: "py-24 px-6 grid md:grid-cols-3 gap-8"
        },
        {
          name: "CTA Section",
          goal: "무료 체험 또는 데모 신청 유도",
          layoutRule: "Centered with email capture form",
          tailwindExample: "bg-gradient-to-r from-primary-600 to-purple-600 py-20 px-6 text-center text-white"
        },
        {
          name: "FAQ",
          goal: "기술적 질문 해소",
          layoutRule: "Accordion with search functionality",
          tailwindExample: "py-24 px-6 max-w-3xl mx-auto"
        }
      ]
    },

    colors: {
      primary: generateColorScale("#6366F1", "primary"),
      secondary: generateColorScale("#8B5CF6", "secondary"),
      gray: generateColorScale("#64748B", "gray"),
      usageRules: {
        primaryUse: "Primary CTA, active states, brand elements",
        secondaryUse: "Secondary actions, hover effects, accents",
        surfaceBg: "white for cards, gray-50 for sections, gray-900 for dark mode",
        border: "gray-200 in light mode, gray-800 in dark mode",
        textStrong: "gray-900 (light) / white (dark)",
        textWeak: "gray-600 (light) / gray-400 (dark)"
      },
      accessibilityNotes: [
        "Primary-600과 white는 4.5:1 대비로 AA 충족",
        "Dark mode에서도 동일한 접근성 기준 적용",
        "Interactive elements는 focus-visible로 키보드 접근성 확보"
      ]
    },

    typography: {
      fontFamily: {
        primary: "Pretendard",
        fallback: "system-ui",
        altSuggestion: "SF Pro Display (Apple ecosystem) 또는 Inter (글로벌 SaaS 표준)"
      },
      scale: {
        h1: {
          fontSize: "56px",
          fontWeight: 800,
          lineHeight: "1.1",
          letterSpacing: "-0.03em"
        },
        h2: {
          fontSize: "40px",
          fontWeight: 700,
          lineHeight: "1.2",
          letterSpacing: "-0.02em"
        },
        h3: {
          fontSize: "28px",
          fontWeight: 600,
          lineHeight: "1.3",
          letterSpacing: "-0.01em"
        },
        body: {
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "1.7",
          letterSpacing: "0"
        },
        caption: {
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "1.5",
          letterSpacing: "0"
        }
      }
    },

    components: {
      button: {
        primary: {
          heightPx: 44,
          padding: "px-6 py-2.5",
          radius: "rounded-lg",
          bg: "bg-primary-600",
          text: "text-white font-semibold",
          hover: "hover:bg-primary-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200",
          disabled: "disabled:bg-gray-300 disabled:transform-none",
          tailwind: "bg-primary-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-primary-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
        },
        secondary: {
          heightPx: 44,
          padding: "px-6 py-2.5",
          radius: "rounded-lg",
          border: "border border-gray-300",
          text: "text-gray-700 font-medium",
          hover: "hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200",
          disabled: "disabled:bg-gray-100 disabled:text-gray-400",
          tailwind: "border border-gray-300 text-gray-700 font-medium px-6 py-2.5 rounded-lg hover:bg-gray-50 hover:border-gray-400"
        }
      },
      input: {
        heightPx: 44,
        radius: "rounded-lg",
        border: "border border-gray-300",
        placeholder: "placeholder:text-gray-400",
        focusRing: "focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500",
        tailwind: "w-full h-11 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500"
      },
      card: {
        radius: "rounded-2xl",
        padding: "p-6",
        shadow: "shadow-sm hover:shadow-2xl transition-shadow duration-300",
        border: "border border-gray-200",
        tailwind: "bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-2xl transition-shadow duration-300"
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
        container: "max-w-[1600px] mx-auto px-6 lg:px-12",
        header: "backdrop-blur-lg bg-white/80 sticky top-0 z-50 h-16 flex items-center justify-between px-6 border-b border-gray-200/50",
        hero: "relative bg-gradient-to-br from-primary-600 via-purple-600 to-pink-500 py-20 md:py-32 px-6 text-center",
        primaryButton: "bg-primary-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-primary-700 hover:shadow-lg hover:-translate-y-0.5 transition-all",
        secondaryButton: "border border-gray-300 text-gray-700 font-medium px-6 py-2.5 rounded-lg hover:bg-gray-50",
        card: "bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-2xl transition-shadow",
        input: "w-full h-11 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500/50"
      },
      implementationNotes: [
        "Framer Motion 사용으로 부드러운 애니메이션 구현",
        "backdrop-blur로 glassmorphism 효과 활용",
        "Dark mode 지원을 위한 CSS variables 설정",
        "Micro-interactions로 프리미엄 느낌 강화"
      ]
    },

    variationSummary: {
      changedPoints: [
        {
          category: "Colors",
          field: "primary가 인디고/보라 계열(#6366F1)",
          reason: "테크 업계는 혁신과 미래를 상징하는 보라/인디고 톤 선호. 차별화된 브랜드 이미지"
        },
        {
          category: "Typography",
          field: "h1 폰트 크기가 매우 큼(56px) & 굵음(800)",
          reason: "강렬한 첫인상과 임팩트 있는 메시지 전달. SaaS 랜딩페이지의 표준"
        },
        {
          category: "Components",
          field: "hover 시 -translate-y 효과 적용",
          reason: "마이크로 인터랙션으로 프리미엄하고 반응적인 경험 제공"
        },
        {
          category: "Layout",
          field: "Hero에 gradient 배경과 애니메이션",
          reason: "시선을 사로잡는 현대적 디자인. 제품의 혁신성을 시각적으로 표현"
        },
        {
          category: "Header",
          field: "backdrop-blur 효과 사용",
          reason: "Glassmorphism 트렌드 반영. 세련되고 현대적인 느낌"
        }
      ],
      unchangedPrinciples: [
        "12-column responsive grid 시스템",
        "Mobile-first 접근 방식",
        "WCAG 접근성 기준 준수",
        "일관된 spacing 및 typography scale"
      ]
    }
  };
}
