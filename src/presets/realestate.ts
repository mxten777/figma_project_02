/**
 * Real Estate Industry Preset
 */

import { DesignSystemSpec, BrandTone } from "../types";
import { generateColorScale } from "../utils/colorGenerator";

export function getRealEstatePreset(brandTone: BrandTone = "프리미엄"): DesignSystemSpec {
  return {
    meta: {
      industry: "부동산",
      brandTone: brandTone,
      styleKeywords: ["신뢰", "프리미엄", "안정", "투자가치", "전문성"],
      targetFeeling: "믿을 수 있는 부동산 정보와 전문적인 중개 서비스"
    },

    figmaGuide: {
      pages: [
        "🎨 Design System",
        "🏠 Property Cards",
        "🔍 Search & Filter",
        "📱 Mobile View",
        "📊 Agent Profile"
      ],
      namingRule: "Component/Type/State (예: PropertyCard/Luxury/Featured)",
      autoLayoutRules: {
        grid: "12-column grid, 24px gutter",
        spacingScale: [8, 16, 24, 32, 40, 48, 64, 80, 96],
        radiusScale: [8, 12, 16, 20, 24],
        typeScaleTokens: ["text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl"],
        breakpoints: ["mobile: 375px", "tablet: 768px", "desktop: 1440px", "wide: 1920px"]
      }
    },

    layout: {
      header: {
        heightPx: 76,
        structure: ["Logo", "Buy", "Rent", "Sell", "Agents", "Contact CTA"],
        stickyBehavior: "sticky with elevated shadow",
        desktop: {
          paddingX: "px-8 lg:px-16",
          maxWidth: "max-w-[1600px]",
          navItems: 6
        },
        mobile: {
          pattern: "Collapsible menu with search focus",
          heightPx: 68
        },
        tailwindExample: "bg-white shadow-lg sticky top-0 z-50 h-19 flex items-center justify-between px-8"
      },

      hero: {
        structure: ["Headline", "Property Search", "Quick Filters", "Featured Properties"],
        desktopGrid: "Full-width search with filters",
        mobileStack: "search first, filters collapsible",
        padding: "py-20 md:py-32",
        background: "Luxury property photography",
        imageStyle: "High-end real estate photography",
        tailwindExample: "relative bg-cover bg-center py-20 md:py-32 px-8"
      },

      footer: {
        structure: ["Company Info", "Services", "Locations", "Legal"],
        legalItems: ["이용약관", "개인정보처리방침", "중개업법 준수사항", "공인중개사정보"],
        tailwindExample: "bg-gray-900 text-gray-300 py-16 px-8 mt-24"
      },

      sections: [
        {
          name: "Featured Properties",
          goal: "추천 매물 강조",
          layoutRule: "Large cards with high-quality images",
          tailwindExample: "py-20 px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        },
        {
          name: "Search by Location",
          goal: "지역별 매물 탐색",
          layoutRule: "Map integration or location grid",
          tailwindExample: "py-20 px-8 space-y-8"
        },
        {
          name: "Agent Profiles",
          goal: "전문 중개인 소개",
          layoutRule: "Profile cards with credentials",
          tailwindExample: "bg-gray-50 py-20 px-8 grid md:grid-cols-4 gap-6"
        },
        {
          name: "Market Insights",
          goal: "시장 동향 정보 제공",
          layoutRule: "Chart + article cards",
          tailwindExample: "py-20 px-8 space-y-12"
        },
        {
          name: "Consultation CTA",
          goal: "상담 신청 유도",
          layoutRule: "Form with agent assignment",
          tailwindExample: "bg-primary-600 text-white py-20 px-8 text-center"
        }
      ]
    },

    colors: {
      primary: generateColorScale("#0891B2", "primary"),
      secondary: generateColorScale("#059669", "secondary"),
      gray: generateColorScale("#64748B", "gray"),
      usageRules: {
        primaryUse: "주요 CTA, 가격 강조, 중요 정보",
        secondaryUse: "성공 메시지, 인증 배지",
        surfaceBg: "white for property cards, gray-50 for sections",
        border: "gray-300 for clear division",
        textStrong: "gray-900 for property details",
        textWeak: "gray-600 for specifications"
      },
      accessibilityNotes: [
        "가격은 최소 20px bold로 명확히 표시",
        "매물 상태는 색상+텍스트 병행",
        "지도 마커는 충분한 크기와 대비"
      ]
    },

    typography: {
      fontFamily: {
        primary: "Pretendard",
        fallback: "system-ui",
        altSuggestion: "Playfair Display (고급스러운 헤드라인용)"
      },
      scale: {
        h1: {
          fontSize: "52px",
          fontWeight: 700,
          lineHeight: "1.2",
          letterSpacing: "-0.02em"
        },
        h2: {
          fontSize: "40px",
          fontWeight: 600,
          lineHeight: "1.3",
          letterSpacing: "-0.01em"
        },
        h3: {
          fontSize: "28px",
          fontWeight: 600,
          lineHeight: "1.4",
          letterSpacing: "0"
        },
        body: {
          fontSize: "17px",
          fontWeight: 400,
          lineHeight: "1.6",
          letterSpacing: "0"
        },
        caption: {
          fontSize: "15px",
          fontWeight: 400,
          lineHeight: "1.5",
          letterSpacing: "0"
        }
      }
    },

    components: {
      button: {
        primary: {
          heightPx: 52,
          padding: "px-8 py-3.5",
          radius: "rounded-lg",
          bg: "bg-primary-600",
          text: "text-white font-semibold text-lg",
          hover: "hover:bg-primary-700 transition-colors duration-200",
          disabled: "disabled:bg-gray-300",
          tailwind: "bg-primary-600 text-white font-semibold text-lg px-8 py-3.5 rounded-lg hover:bg-primary-700 transition-colors"
        },
        secondary: {
          heightPx: 52,
          padding: "px-8 py-3.5",
          radius: "rounded-lg",
          border: "border-2 border-primary-600",
          text: "text-primary-600 font-semibold text-lg",
          hover: "hover:bg-primary-50 transition-colors duration-200",
          disabled: "disabled:border-gray-300 disabled:text-gray-300",
          tailwind: "border-2 border-primary-600 text-primary-600 font-semibold text-lg px-8 py-3.5 rounded-lg hover:bg-primary-50"
        }
      },
      input: {
        heightPx: 52,
        radius: "rounded-lg",
        border: "border-2 border-gray-300",
        placeholder: "placeholder:text-gray-500",
        focusRing: "focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
        tailwind: "w-full h-13 px-4 text-base border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
      },
      card: {
        radius: "rounded-2xl",
        padding: "p-0",
        shadow: "shadow-lg hover:shadow-2xl transition-all duration-300",
        border: "border border-gray-200",
        tailwind: "bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all"
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
        container: "max-w-[1600px] mx-auto px-8 lg:px-16",
        header: "bg-white shadow-lg sticky top-0 z-50 h-19 flex items-center justify-between px-8",
        hero: "relative bg-cover bg-center py-20 md:py-32 px-8",
        primaryButton: "bg-primary-600 text-white font-semibold text-lg px-8 py-3.5 rounded-lg hover:bg-primary-700 transition-colors",
        secondaryButton: "border-2 border-primary-600 text-primary-600 font-semibold text-lg px-8 py-3.5 rounded-lg hover:bg-primary-50",
        card: "bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all",
        input: "w-full h-13 px-4 text-base border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
      },
      implementationNotes: [
        "고해상도 부동산 사진 최적화 필수",
        "Google Maps API 연동",
        "가격 필터는 range slider로 UX 개선",
        "매물 비교 기능은 side-by-side 레이아웃"
      ]
    },

    variationSummary: {
      changedPoints: [
        {
          category: "Colors",
          field: "primary가 청록색(#0891B2)",
          reason: "부동산은 신뢰와 안정을 주는 청록색. 고급스러우면서 전문적"
        },
        {
          category: "Typography",
          field: "전반적으로 큰 폰트(h1 52px, body 17px)",
          reason: "프리미엄 브랜드 이미지. 가격과 정보가 명확히 보여야 함"
        },
        {
          category: "Components",
          field: "높은 그림자 효과(shadow-lg)",
          reason: "고급스러운 느낌. 카드가 떠있는 듯한 depth"
        },
        {
          category: "Layout",
          field: "넉넉한 spacing (32-64px)",
          reason: "프리미엄 느낌은 여백에서 나옴. 답답하지 않은 레이아웃"
        }
      ],
      unchangedPrinciples: [
        "반응형 12-column grid",
        "Mobile-first 접근",
        "WCAG 접근성 기준",
        "일관된 spacing scale"
      ]
    }
  };
}
