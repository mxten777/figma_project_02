/**
 * Gaming & Entertainment Industry Preset
 */

import { DesignSystemSpec, BrandTone } from "../types";
import { generateColorScale } from "../utils/colorGenerator";

export function getGamingPreset(brandTone: BrandTone = "테크"): DesignSystemSpec {
  return {
    meta: {
      industry: "게임",
      brandTone: brandTone,
      styleKeywords: ["흥미", "몰입", "에너지", "경쟁", "재미"],
      targetFeeling: "게임의 즐거움과 흥분을 전달하는 역동적인 플랫폼"
    },

    figmaGuide: {
      pages: [
        "🎨 Design System",
        "🎮 Game Components",
        "🏆 Leaderboard & Stats",
        "📱 Mobile Gaming",
        "💎 Shop & Items"
      ],
      namingRule: "Component/Level/State (예: GameCard/Epic/Active)",
      autoLayoutRules: {
        grid: "12-column grid, 16px gutter",
        spacingScale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64],
        radiusScale: [8, 12, 16, 20, 24, 32],
        typeScaleTokens: ["text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl"],
        breakpoints: ["mobile: 375px", "tablet: 768px", "desktop: 1440px", "wide: 1920px"]
      }
    },

    layout: {
      header: {
        heightPx: 64,
        structure: ["Logo", "Games", "Store", "Community", "Profile", "Wallet"],
        stickyBehavior: "sticky with glow effect",
        desktop: {
          paddingX: "px-6 lg:px-12",
          maxWidth: "max-w-[1600px]",
          navItems: 6
        },
        mobile: {
          pattern: "Bottom game controls",
          heightPx: 60
        },
        tailwindExample: "bg-gray-900 border-b border-purple-500/30 sticky top-0 z-50 h-16 flex items-center justify-between px-6"
      },

      hero: {
        structure: ["Dynamic Video/Animation", "Play Now CTA", "Featured Game", "Trending Badge"],
        desktopGrid: "Full-screen immersive",
        mobileStack: "portrait with prominent CTA",
        padding: "py-0 (full-screen)",
        background: "Animated gaming visuals, neon effects",
        imageStyle: "Game screenshots, action-packed, vibrant",
        tailwindExample: "relative h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900"
      },

      footer: {
        structure: ["Games", "Community", "Support", "Social"],
        legalItems: ["이용약관", "개인정보처리방침", "게임물등급", "청소년보호정책"],
        tailwindExample: "bg-gray-950 text-gray-400 py-16 px-6 mt-24"
      },

      sections: [
        {
          name: "Featured Games",
          goal: "인기 게임 강조",
          layoutRule: "Large cards with video autoplay on hover",
          tailwindExample: "py-20 px-6 grid md:grid-cols-3 gap-8"
        },
        {
          name: "Live Tournaments",
          goal: "실시간 토너먼트 홍보",
          layoutRule: "Live status badges, countdown timers",
          tailwindExample: "bg-gradient-to-r from-red-600 to-orange-600 py-16 px-6"
        },
        {
          name: "Top Players",
          goal: "리더보드로 경쟁심 자극",
          layoutRule: "Ranking table with animated transitions",
          tailwindExample: "py-20 px-6 max-w-5xl mx-auto"
        },
        {
          name: "Game Store",
          goal: "아이템/게임 구매 유도",
          layoutRule: "Grid with rarity badges and prices",
          tailwindExample: "py-20 px-6 grid md:grid-cols-4 gap-6"
        },
        {
          name: "Community Highlights",
          goal: "커뮤니티 활성화",
          layoutRule: "User-generated content showcase",
          tailwindExample: "bg-gray-900 py-20 px-6 space-y-12"
        }
      ]
    },

    colors: {
      primary: generateColorScale("#A855F7", "primary"),
      secondary: generateColorScale("#EC4899", "secondary"),
      gray: generateColorScale("#71717A", "gray"),
      usageRules: {
        primaryUse: "Play Now, 주요 CTA, 레벨업 효과",
        secondaryUse: "보상, 특별 아이템, 강조",
        surfaceBg: "gray-900 for dark gaming theme",
        border: "purple-500/30 for neon glow effect",
        textStrong: "white for maximum contrast on dark",
        textWeak: "gray-400 for secondary info"
      },
      accessibilityNotes: [
        "다크 테마 기본, 높은 명도 대비 필수",
        "애니메이션은 prefers-reduced-motion 고려",
        "컬러블라인드 모드 옵션 제공"
      ]
    },

    typography: {
      fontFamily: {
        primary: "Pretendard",
        fallback: "system-ui",
        altSuggestion: "Rajdhani (게이밍 특화) 또는 Chakra Petch"
      },
      scale: {
        h1: {
          fontSize: "60px",
          fontWeight: 900,
          lineHeight: "1.1",
          letterSpacing: "-0.02em"
        },
        h2: {
          fontSize: "44px",
          fontWeight: 800,
          lineHeight: "1.2",
          letterSpacing: "-0.01em"
        },
        h3: {
          fontSize: "32px",
          fontWeight: 700,
          lineHeight: "1.3",
          letterSpacing: "0"
        },
        body: {
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "1.6",
          letterSpacing: "0"
        },
        caption: {
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "1.5",
          letterSpacing: "0.02em"
        }
      }
    },

    components: {
      button: {
        primary: {
          heightPx: 52,
          padding: "px-8 py-3.5",
          radius: "rounded-xl",
          bg: "bg-gradient-to-r from-purple-600 to-pink-600",
          text: "text-white font-bold uppercase tracking-wide",
          hover: "hover:from-purple-700 hover:to-pink-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-200",
          disabled: "disabled:opacity-50 disabled:scale-100",
          tailwind: "bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold uppercase tracking-wide px-8 py-3.5 rounded-xl hover:from-purple-700 hover:to-pink-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
        },
        secondary: {
          heightPx: 52,
          padding: "px-8 py-3.5",
          radius: "rounded-xl",
          border: "border-2 border-purple-500",
          text: "text-purple-400 font-bold uppercase tracking-wide",
          hover: "hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-200",
          disabled: "disabled:opacity-50",
          tailwind: "border-2 border-purple-500 text-purple-400 font-bold uppercase tracking-wide px-8 py-3.5 rounded-xl hover:bg-purple-500/10 hover:border-purple-400 transition-all"
        }
      },
      input: {
        heightPx: 48,
        radius: "rounded-xl",
        border: "border-2 border-gray-700",
        placeholder: "placeholder:text-gray-500",
        focusRing: "focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-gray-800",
        tailwind: "w-full h-12 px-4 bg-gray-800 border-2 border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 text-white"
      },
      card: {
        radius: "rounded-2xl",
        padding: "p-0",
        shadow: "shadow-xl shadow-purple-900/30 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300",
        border: "border border-gray-800",
        tailwind: "bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 shadow-xl shadow-purple-900/30 hover:shadow-2xl hover:shadow-purple-500/40 transition-all cursor-pointer"
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
        header: "bg-gray-900 border-b border-purple-500/30 sticky top-0 z-50 h-16 flex items-center justify-between px-6",
        hero: "relative h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900",
        primaryButton: "bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold uppercase tracking-wide px-8 py-3.5 rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 transition-all",
        secondaryButton: "border-2 border-purple-500 text-purple-400 font-bold uppercase px-8 py-3.5 rounded-xl hover:bg-purple-500/10",
        card: "bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 shadow-xl hover:shadow-2xl hover:shadow-purple-500/40 transition-all cursor-pointer",
        input: "w-full h-12 px-4 bg-gray-800 border-2 border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 text-white"
      },
      implementationNotes: [
        "다크 모드 기본, 네온 글로우 효과 적극 활용",
        "hover 애니메이션으로 인터랙티브한 느낌",
        "실시간 데이터는 WebSocket으로 라이브 업데이트",
        "파티클 효과, 그라디언트로 역동적 분위기"
      ]
    },

    variationSummary: {
      changedPoints: [
        {
          category: "Colors",
          field: "다크 테마 + 퍼플/핑크 네온",
          reason: "게임은 몰입을 위한 다크 테마가 기본. 네온 컬러로 에너지와 흥분"
        },
        {
          category: "Typography",
          field: "매우 굵은 폰트 (900 weight)",
          reason: "임팩트와 강렬함 표현. 게임의 역동성"
        },
        {
          category: "Components",
          field: "그라디언트 + 글로우 섀도우",
          reason: "미래적이고 화려한 게이밍 스타일"
        },
        {
          category: "Layout",
          field: "풀스크린 immersive 경험",
          reason: "게임은 완전한 몰입이 중요"
        }
      ],
      unchangedPrinciples: [
        "반응형 grid 시스템",
        "접근성 기준 (다크 테마에서)",
        "Mobile-first 접근",
        "일관된 spacing"
      ]
    }
  };
}
