/**
 * Hotel & Hospitality Industry Preset
 */

import { DesignSystemSpec, BrandTone } from "../types";
import { generateColorScale } from "../utils/colorGenerator";

export function getHotelPreset(brandTone: BrandTone = "프리미엄"): DesignSystemSpec {
  return {
    meta: {
      industry: "호텔",
      brandTone: brandTone,
      styleKeywords: ["럭셔리", "편안함", "환대", "품격", "휴식"],
      targetFeeling: "프리미엄 숙박 경험과 최상의 서비스를 기대하게 만드는 고급스러움"
    },

    figmaGuide: {
      pages: [
        "🎨 Design System",
        "🏨 Room Gallery",
        "📅 Booking System",
        "📱 Mobile Guest",
        "⭐ Reviews & Amenities"
      ],
      namingRule: "Component/RoomType/State (예: RoomCard/Suite/Available)",
      autoLayoutRules: {
        grid: "12-column grid, 32px gutter (넓은 여백)",
        spacingScale: [8, 16, 24, 32, 40, 48, 64, 80, 96, 120],
        radiusScale: [4, 8, 12, 16, 20, 24],
        typeScaleTokens: ["text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl", "text-6xl"],
        breakpoints: ["mobile: 375px", "tablet: 768px", "desktop: 1440px", "wide: 2560px"]
      }
    },

    layout: {
      header: {
        heightPx: 80,
        structure: ["Logo", "Rooms", "Amenities", "Dining", "Events", "Contact", "Book Now"],
        stickyBehavior: "sticky with subtle shadow",
        desktop: {
          paddingX: "px-8 lg:px-16",
          maxWidth: "max-w-[1920px]",
          navItems: 7
        },
        mobile: {
          pattern: "Minimal with prominent booking",
          heightPx: 72
        },
        tailwindExample: "bg-white border-b border-gray-100 sticky top-0 z-50 h-20 flex items-center justify-between px-8 lg:px-16"
      },

      hero: {
        structure: ["Full-width Premium Photography", "Check-in Widget", "Welcome Message", "Special Offers"],
        desktopGrid: "Full-bleed with elegant overlay",
        mobileStack: "vertical with booking widget",
        padding: "py-0 (full-bleed luxury)",
        background: "High-end hotel photography",
        imageStyle: "Professional architectural photography, warm lighting",
        tailwindExample: "relative h-screen bg-cover bg-center flex items-end justify-center pb-20"
      },

      footer: {
        structure: ["Hotel Info", "Services", "Policies", "Contact"],
        legalItems: ["이용약관", "개인정보처리방침", "예약/취소규정", "호텔 정책"],
        tailwindExample: "bg-gray-900 text-gray-300 py-20 px-8 lg:px-16 mt-32"
      },

      sections: [
        {
          name: "Room Gallery",
          goal: "객실 종류 소개",
          layoutRule: "Large cards with premium photography",
          tailwindExample: "py-32 px-8 lg:px-16 grid md:grid-cols-2 gap-12"
        },
        {
          name: "Amenities & Services",
          goal: "시설 소개",
          layoutRule: "Icon grid with elegant spacing",
          tailwindExample: "bg-gray-50 py-32 px-8 lg:px-16 grid md:grid-cols-4 gap-12"
        },
        {
          name: "Dining Experience",
          goal: "레스토랑/바 홍보",
          layoutRule: "Full-width imagery with overlay text",
          tailwindExample: "py-32 px-8 lg:px-16 space-y-16"
        },
        {
          name: "Guest Reviews",
          goal: "실제 후기로 신뢰 구축",
          layoutRule: "Testimonial cards with ratings",
          tailwindExample: "bg-white py-32 px-8 lg:px-16 grid md:grid-cols-3 gap-8"
        },
        {
          name: "Location & Contact",
          goal: "위치 및 연락처",
          layoutRule: "Map integration with contact info",
          tailwindExample: "py-32 px-8 lg:px-16 grid md:grid-cols-2 gap-16"
        }
      ]
    },

    colors: {
      primary: generateColorScale("#0891B2", "primary"),
      secondary: generateColorScale("#D4AF37", "secondary"),
      gray: generateColorScale("#475569", "gray"),
      usageRules: {
        primaryUse: "Book Now, 예약 확인, 주요 CTA",
        secondaryUse: "프리미엄 배지, 특별 서비스, 골드 액센트",
        surfaceBg: "white with ample spacing",
        border: "gray-100 for subtle elegance",
        textStrong: "gray-900 for clarity",
        textWeak: "gray-600 for details"
      },
      accessibilityNotes: [
        "충분한 대비로 가독성 확보",
        "가격 정보는 명확하게",
        "예약 버튼은 충분한 크기와 대비"
      ]
    },

    typography: {
      fontFamily: {
        primary: "Pretendard",
        fallback: "system-ui",
        altSuggestion: "Playfair Display (고급스러운 세리프) + Inter (본문)"
      },
      scale: {
        h1: {
          fontSize: "64px",
          fontWeight: 600,
          lineHeight: "1.1",
          letterSpacing: "-0.02em"
        },
        h2: {
          fontSize: "48px",
          fontWeight: 600,
          lineHeight: "1.2",
          letterSpacing: "-0.01em"
        },
        h3: {
          fontSize: "32px",
          fontWeight: 500,
          lineHeight: "1.3",
          letterSpacing: "0"
        },
        body: {
          fontSize: "17px",
          fontWeight: 400,
          lineHeight: "1.8",
          letterSpacing: "0.01em"
        },
        caption: {
          fontSize: "15px",
          fontWeight: 400,
          lineHeight: "1.6",
          letterSpacing: "0.02em"
        }
      }
    },

    components: {
      button: {
        primary: {
          heightPx: 56,
          padding: "px-12 py-4",
          radius: "rounded-lg",
          bg: "bg-primary-700",
          text: "text-white font-medium text-lg tracking-wide",
          hover: "hover:bg-primary-800 hover:shadow-lg transition-all duration-300",
          disabled: "disabled:bg-gray-300",
          tailwind: "bg-primary-700 text-white font-medium text-lg tracking-wide px-12 py-4 rounded-lg hover:bg-primary-800 hover:shadow-lg transition-all duration-300"
        },
        secondary: {
          heightPx: 56,
          padding: "px-12 py-4",
          radius: "rounded-lg",
          border: "border-2 border-primary-700",
          text: "text-primary-700 font-medium text-lg tracking-wide",
          hover: "hover:bg-primary-50 transition-colors duration-300",
          disabled: "disabled:border-gray-300 disabled:text-gray-300",
          tailwind: "border-2 border-primary-700 text-primary-700 font-medium text-lg tracking-wide px-12 py-4 rounded-lg hover:bg-primary-50"
        }
      },
      input: {
        heightPx: 52,
        radius: "rounded-lg",
        border: "border border-gray-300",
        placeholder: "placeholder:text-gray-400",
        focusRing: "focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
        tailwind: "w-full h-13 px-5 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
      },
      card: {
        radius: "rounded-xl",
        padding: "p-0",
        shadow: "shadow-lg hover:shadow-2xl transition-all duration-500",
        border: "border-0",
        tailwind: "bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
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
        container: "max-w-[1920px] mx-auto px-8 lg:px-16",
        header: "bg-white border-b border-gray-100 sticky top-0 z-50 h-20 flex items-center justify-between px-8 lg:px-16",
        hero: "relative h-screen bg-cover bg-center flex items-end justify-center pb-20",
        primaryButton: "bg-primary-700 text-white font-medium text-lg tracking-wide px-12 py-4 rounded-lg hover:bg-primary-800 hover:shadow-lg transition-all duration-300",
        secondaryButton: "border-2 border-primary-700 text-primary-700 font-medium text-lg tracking-wide px-12 py-4 rounded-lg hover:bg-primary-50",
        card: "bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500",
        input: "w-full h-13 px-5 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
      },
      implementationNotes: [
        "고해상도 호텔 사진 필수 (WebP 포맷)",
        "예약 시스템은 date-picker로 UX 향상",
        "360도 룸 투어는 별도 모듈",
        "다국어 지원 필수 (i18n)"
      ]
    },

    variationSummary: {
      changedPoints: [
        {
          category: "Colors",
          field: "프리미엄 틸 + 골드 액센트",
          reason: "호텔 업계는 고급스러움과 신뢰를 주는 색상. 골드는 프리미엄 서비스 강조"
        },
        {
          category: "Spacing",
          field: "넓은 여백 (32px gutter, py-32)",
          reason: "럭셔리 브랜드는 여유로운 공간으로 품격 표현"
        },
        {
          category: "Typography",
          field: "큰 사이즈 + 넓은 letter-spacing",
          reason: "고급스러운 타이포그래피. 가독성과 우아함"
        },
        {
          category: "Components",
          field: "부드러운 애니메이션 (duration-500)",
          reason: "서두르지 않는 우아한 인터랙션"
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
