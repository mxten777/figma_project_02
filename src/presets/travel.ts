/**
 * Travel & Tourism Industry Preset
 */

import { DesignSystemSpec, BrandTone } from "../types";
import { generateColorScale } from "../utils/colorGenerator";

export function getTravelPreset(brandTone: BrandTone = "친근"): DesignSystemSpec {
  return {
    meta: {
      industry: "여행",
      brandTone: brandTone,
      styleKeywords: ["모험", "자유", "경험", "발견", "설렘"],
      targetFeeling: "새로운 여행지를 발견하고 특별한 경험을 계획하는 즐거움"
    },

    figmaGuide: {
      pages: [
        "🎨 Design System",
        "✈️ Booking Components",
        "🗺️ Destination Pages",
        "📱 Mobile Travel",
        "📸 Gallery & Reviews"
      ],
      namingRule: "Component/Category/State (예: DestinationCard/Adventure/Featured)",
      autoLayoutRules: {
        grid: "12-column grid, 24px gutter",
        spacingScale: [8, 16, 24, 32, 40, 48, 64, 80, 96],
        radiusScale: [12, 16, 20, 24, 32],
        typeScaleTokens: ["text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl"],
        breakpoints: ["mobile: 375px", "tablet: 768px", "desktop: 1280px", "wide: 1920px"]
      }
    },

    layout: {
      header: {
        heightPx: 72,
        structure: ["Logo", "Destinations", "Experiences", "Deals", "My Trips", "Sign In"],
        stickyBehavior: "transparent to solid on scroll",
        desktop: {
          paddingX: "px-6 lg:px-12",
          maxWidth: "max-w-[1600px]",
          navItems: 6
        },
        mobile: {
          pattern: "Minimal with search focus",
          heightPx: 64
        },
        tailwindExample: "bg-white/90 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50 h-18 flex items-center justify-between px-6"
      },

      hero: {
        structure: ["Full-width Image/Video", "Search Widget", "Popular Destinations", "Inspire Me"],
        desktopGrid: "Full-bleed with centered search",
        mobileStack: "vertical with search prominent",
        padding: "py-0 (full-bleed)",
        background: "Stunning destination photography",
        imageStyle: "Wanderlust-inspiring travel photography",
        tailwindExample: "relative h-screen bg-cover bg-center flex items-center justify-center"
      },

      footer: {
        structure: ["Destinations", "Travel Tips", "About", "Support"],
        legalItems: ["이용약관", "개인정보처리방침", "취소/환불정책", "여행약관"],
        tailwindExample: "bg-gray-50 py-16 px-6 mt-24 border-t border-gray-200"
      },

      sections: [
        {
          name: "Popular Destinations",
          goal: "인기 여행지 소개",
          layoutRule: "Masonry grid with stunning photos",
          tailwindExample: "py-20 px-6 columns-2 md:columns-3 gap-6"
        },
        {
          name: "Travel Experiences",
          goal: "특별한 경험 제안",
          layoutRule: "Category cards with icons",
          tailwindExample: "py-20 px-6 grid md:grid-cols-4 gap-8"
        },
        {
          name: "Deals & Packages",
          goal: "특가 상품 홍보",
          layoutRule: "Horizontal scroll with badges",
          tailwindExample: "bg-blue-50 py-16 px-6 overflow-x-auto flex gap-6"
        },
        {
          name: "Travel Stories",
          goal: "여행 후기로 영감 제공",
          layoutRule: "Blog-style cards with user photos",
          tailwindExample: "py-20 px-6 grid md:grid-cols-3 gap-8"
        },
        {
          name: "Travel Planning Guide",
          goal: "여행 계획 도움",
          layoutRule: "Step-by-step with visuals",
          tailwindExample: "bg-white py-20 px-6 max-w-5xl mx-auto space-y-12"
        }
      ]
    },

    colors: {
      primary: generateColorScale("#0EA5E9", "primary"),
      secondary: generateColorScale("#F59E0B", "secondary"),
      gray: generateColorScale("#64748B", "gray"),
      usageRules: {
        primaryUse: "Book Now, 주요 CTA, 링크",
        secondaryUse: "할인 태그, 특가 강조, 별점",
        surfaceBg: "white for clean photo focus",
        border: "gray-200 for subtle division",
        textStrong: "gray-900 for headings",
        textWeak: "gray-600 for details"
      },
      accessibilityNotes: [
        "사진 위 텍스트는 그림자나 오버레이로 가독성 확보",
        "가격 정보는 명확한 대비",
        "예약 버튼은 충분한 크기"
      ]
    },

    typography: {
      fontFamily: {
        primary: "Pretendard",
        fallback: "system-ui",
        altSuggestion: "Poppins (글로벌 여행 브랜드)"
      },
      scale: {
        h1: {
          fontSize: "56px",
          fontWeight: 700,
          lineHeight: "1.1",
          letterSpacing: "-0.02em"
        },
        h2: {
          fontSize: "40px",
          fontWeight: 600,
          lineHeight: "1.2",
          letterSpacing: "-0.01em"
        },
        h3: {
          fontSize: "28px",
          fontWeight: 600,
          lineHeight: "1.3",
          letterSpacing: "0"
        },
        body: {
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "1.7",
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
          heightPx: 52,
          padding: "px-8 py-3.5",
          radius: "rounded-2xl",
          bg: "bg-primary-600",
          text: "text-white font-semibold text-lg",
          hover: "hover:bg-primary-700 hover:shadow-xl transition-all duration-200",
          disabled: "disabled:bg-gray-300",
          tailwind: "bg-primary-600 text-white font-semibold text-lg px-8 py-3.5 rounded-2xl hover:bg-primary-700 hover:shadow-xl transition-all"
        },
        secondary: {
          heightPx: 52,
          padding: "px-8 py-3.5",
          radius: "rounded-2xl",
          border: "border-2 border-primary-600",
          text: "text-primary-600 font-semibold text-lg",
          hover: "hover:bg-primary-50 transition-colors duration-200",
          disabled: "disabled:border-gray-300 disabled:text-gray-300",
          tailwind: "border-2 border-primary-600 text-primary-600 font-semibold text-lg px-8 py-3.5 rounded-2xl hover:bg-primary-50"
        }
      },
      input: {
        heightPx: 52,
        radius: "rounded-2xl",
        border: "border-2 border-gray-300",
        placeholder: "placeholder:text-gray-400",
        focusRing: "focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
        tailwind: "w-full h-13 px-5 text-base border-2 border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500"
      },
      card: {
        radius: "rounded-3xl",
        padding: "p-0",
        shadow: "shadow-lg hover:shadow-2xl transition-all duration-300",
        border: "border-0",
        tailwind: "bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer"
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
        header: "bg-white/90 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50 h-18 flex items-center justify-between px-6",
        hero: "relative h-screen bg-cover bg-center flex items-center justify-center",
        primaryButton: "bg-primary-600 text-white font-semibold text-lg px-8 py-3.5 rounded-2xl hover:bg-primary-700 hover:shadow-xl transition-all",
        secondaryButton: "border-2 border-primary-600 text-primary-600 font-semibold text-lg px-8 py-3.5 rounded-2xl hover:bg-primary-50",
        card: "bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer",
        input: "w-full h-13 px-5 text-base border-2 border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500"
      },
      implementationNotes: [
        "고해상도 여행 사진 필수 (lazy loading)",
        "지도 통합 (Google Maps/Mapbox)",
        "날짜 선택은 date picker로 UX 개선",
        "Review 섹션은 별점 + 사진으로 신뢰도 향상"
      ]
    },

    variationSummary: {
      changedPoints: [
        {
          category: "Colors",
          field: "하늘색 계열 (#0EA5E9)",
          reason: "여행의 자유와 하늘, 바다를 상징. 모험적이고 개방적인 느낌"
        },
        {
          category: "Layout",
          field: "Masonry grid로 다양한 이미지 비율",
          reason: "여행 사진은 다양한 비율. Pinterest 스타일로 영감 제공"
        },
        {
          category: "Components",
          field: "매우 둥근 radius (rounded-3xl)",
          reason: "친근하고 따뜻한 느낌. 여행의 즐거움 표현"
        },
        {
          category: "Typography",
          field: "Line height 1.7로 넉넉함",
          reason: "여행 스토리는 읽기 편해야 함"
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
