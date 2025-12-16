/**
 * Fitness & Sports Industry Preset
 */

import { DesignSystemSpec, BrandTone } from "../types";
import { generateColorScale } from "../utils/colorGenerator";

export function getFitnessPreset(brandTone: BrandTone = "테크"): DesignSystemSpec {
  return {
    meta: {
      industry: "피트니스",
      brandTone: brandTone,
      styleKeywords: ["에너지", "동기부여", "목표", "성취", "건강"],
      targetFeeling: "운동을 시작하고 목표를 달성하게 만드는 동기부여"
    },

    figmaGuide: {
      pages: [
        "🎨 Design System",
        "💪 Workout Components",
        "📊 Progress Tracking",
        "📱 Mobile Fitness",
        "🏅 Achievements"
      ],
      namingRule: "Component/Type/State (예: WorkoutCard/Strength/InProgress)",
      autoLayoutRules: {
        grid: "12-column grid, 20px gutter",
        spacingScale: [4, 8, 12, 16, 20, 24, 32, 40, 48],
        radiusScale: [8, 12, 16, 20, 24],
        typeScaleTokens: ["text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl"],
        breakpoints: ["mobile: 375px", "tablet: 768px", "desktop: 1280px"]
      }
    },

    layout: {
      header: {
        heightPx: 64,
        structure: ["Logo", "Workouts", "Programs", "Community", "Progress", "Profile"],
        stickyBehavior: "sticky with progress bar",
        desktop: {
          paddingX: "px-6 lg:px-10",
          maxWidth: "max-w-7xl",
          navItems: 6
        },
        mobile: {
          pattern: "Bottom navigation with quick-start",
          heightPx: 56
        },
        tailwindExample: "bg-white border-b border-gray-200 sticky top-0 z-50 h-16 flex items-center justify-between px-6"
      },

      hero: {
        structure: ["Motivational Image", "Today's Challenge", "Quick Start Buttons", "Streak Counter"],
        desktopGrid: "split 50/50 image and action panel",
        mobileStack: "vertical with prominent start button",
        padding: "py-16 lg:py-24",
        background: "Active lifestyle photography with energy",
        imageStyle: "Athletic, motivational, diverse people working out",
        tailwindExample: "bg-gradient-to-br from-green-500 to-emerald-600 py-20 px-6"
      },

      footer: {
        structure: ["Programs", "Support", "Community", "Social"],
        legalItems: ["이용약관", "개인정보처리방침", "운동 주의사항", "구독 관리"],
        tailwindExample: "bg-gray-900 text-gray-300 py-16 px-6 mt-20"
      },

      sections: [
        {
          name: "Today's Workout",
          goal: "오늘 운동 시작 유도",
          layoutRule: "Large card with countdown timer",
          tailwindExample: "py-20 px-6 max-w-5xl mx-auto"
        },
        {
          name: "Progress Dashboard",
          goal: "성과 시각화로 동기부여",
          layoutRule: "Charts and stats grid",
          tailwindExample: "bg-white py-16 px-6 grid md:grid-cols-3 gap-6"
        },
        {
          name: "Popular Programs",
          goal: "프로그램 구독 유도",
          layoutRule: "Horizontal scroll with difficulty badges",
          tailwindExample: "py-16 px-6 overflow-x-auto flex gap-6"
        },
        {
          name: "Success Stories",
          goal: "Before/After로 동기부여",
          layoutRule: "Transformation cards with testimonials",
          tailwindExample: "bg-gray-50 py-20 px-6 grid md:grid-cols-2 gap-8"
        },
        {
          name: "Free Trial CTA",
          goal: "무료 체험 가입 유도",
          layoutRule: "Full-width with benefits list",
          tailwindExample: "bg-gradient-to-r from-green-600 to-emerald-600 py-20 px-6 text-white text-center"
        }
      ]
    },

    colors: {
      primary: generateColorScale("#10B981", "primary"),
      secondary: generateColorScale("#F59E0B", "secondary"),
      gray: generateColorScale("#6B7280", "gray"),
      usageRules: {
        primaryUse: "Start Workout, 목표 달성, 진행 상태",
        secondaryUse: "칼로리 소모, 경고, 주의사항",
        surfaceBg: "white for clean tracking interface",
        border: "gray-200 for card separation",
        textStrong: "gray-900 for metrics",
        textWeak: "gray-600 for labels"
      },
      accessibilityNotes: [
        "진행 상태는 색상뿐 아니라 숫자/아이콘으로도 표시",
        "동영상은 자막 제공",
        "타이머는 시각/청각 모두 피드백"
      ]
    },

    typography: {
      fontFamily: {
        primary: "Pretendard",
        fallback: "system-ui",
        altSuggestion: "Inter (숫자 가독성 우수)"
      },
      scale: {
        h1: {
          fontSize: "52px",
          fontWeight: 800,
          lineHeight: "1.1",
          letterSpacing: "-0.02em"
        },
        h2: {
          fontSize: "38px",
          fontWeight: 700,
          lineHeight: "1.2",
          letterSpacing: "-0.01em"
        },
        h3: {
          fontSize: "28px",
          fontWeight: 700,
          lineHeight: "1.3",
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
          fontWeight: 500,
          lineHeight: "1.5",
          letterSpacing: "0"
        }
      }
    },

    components: {
      button: {
        primary: {
          heightPx: 56,
          padding: "px-10 py-4",
          radius: "rounded-2xl",
          bg: "bg-gradient-to-r from-green-600 to-emerald-600",
          text: "text-white font-bold text-lg",
          hover: "hover:from-green-700 hover:to-emerald-700 hover:shadow-xl transition-all duration-200",
          disabled: "disabled:from-gray-300 disabled:to-gray-300",
          tailwind: "bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg px-10 py-4 rounded-2xl hover:from-green-700 hover:to-emerald-700 hover:shadow-xl transition-all"
        },
        secondary: {
          heightPx: 56,
          padding: "px-10 py-4",
          radius: "rounded-2xl",
          border: "border-2 border-green-600",
          text: "text-green-600 font-bold text-lg",
          hover: "hover:bg-green-50 transition-colors duration-200",
          disabled: "disabled:border-gray-300 disabled:text-gray-300",
          tailwind: "border-2 border-green-600 text-green-600 font-bold text-lg px-10 py-4 rounded-2xl hover:bg-green-50"
        }
      },
      input: {
        heightPx: 48,
        radius: "rounded-xl",
        border: "border-2 border-gray-300",
        placeholder: "placeholder:text-gray-400",
        focusRing: "focus:ring-2 focus:ring-green-500 focus:border-green-500",
        tailwind: "w-full h-12 px-4 text-base border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500"
      },
      card: {
        radius: "rounded-2xl",
        padding: "p-6",
        shadow: "shadow-md hover:shadow-xl transition-all duration-300",
        border: "border border-gray-200",
        tailwind: "bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl transition-all"
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
        container: "max-w-7xl mx-auto px-6 lg:px-10",
        header: "bg-white border-b border-gray-200 sticky top-0 z-50 h-16 flex items-center justify-between px-6",
        hero: "bg-gradient-to-br from-green-500 to-emerald-600 py-20 px-6",
        primaryButton: "bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg px-10 py-4 rounded-2xl hover:shadow-xl transition-all",
        secondaryButton: "border-2 border-green-600 text-green-600 font-bold text-lg px-10 py-4 rounded-2xl hover:bg-green-50",
        card: "bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl transition-all",
        input: "w-full h-12 px-4 text-base border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500"
      },
      implementationNotes: [
        "Progress chart는 Chart.js 또는 Recharts 활용",
        "운동 동영상은 반응형 16:9 비율",
        "타이머는 Web API로 정확한 시간 추적",
        "실시간 칼로리는 WebSocket 또는 polling"
      ]
    },

    variationSummary: {
      changedPoints: [
        {
          category: "Colors",
          field: "활기찬 그린 계열 (#10B981)",
          reason: "피트니스는 건강, 성장, 에너지를 상징하는 그린. 동기부여 효과"
        },
        {
          category: "Typography",
          field: "Bold 강조 (700-800 weight)",
          reason: "강인함과 의지를 표현. 운동의 에너지"
        },
        {
          category: "Components",
          field: "큰 버튼 (56px height)",
          reason: "운동 중 터치하기 쉬운 크기"
        },
        {
          category: "Layout",
          field: "Progress Dashboard 섹션",
          reason: "성과 시각화로 지속적인 동기부여"
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
