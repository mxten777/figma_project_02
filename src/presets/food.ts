/**
 * Food & Delivery Industry Preset
 */

import { DesignSystemSpec, BrandTone } from "../types";
import { generateColorScale } from "../utils/colorGenerator";

export function getFoodPreset(brandTone: BrandTone = "친근"): DesignSystemSpec {
  return {
    meta: {
      industry: "음식배달",
      brandTone: brandTone,
      styleKeywords: ["식욕", "빠름", "편리함", "신선함", "즐거움"],
      targetFeeling: "맛있는 음식을 빠르고 편리하게 주문할 수 있다는 확신"
    },

    figmaGuide: {
      pages: [
        "🎨 Design System",
        "🍔 Menu Components",
        "🛒 Cart & Checkout",
        "📱 Mobile Order",
        "🚚 Tracking Flow"
      ],
      namingRule: "Component/Context/State (예: MenuItem/Featured/Selected)",
      autoLayoutRules: {
        grid: "12-column grid, 16px gutter (tight for menu density)",
        spacingScale: [4, 8, 12, 16, 20, 24, 32, 40, 48],
        radiusScale: [12, 16, 20, 24, 28],
        typeScaleTokens: ["text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl"],
        breakpoints: ["mobile: 360px", "tablet: 768px", "desktop: 1024px"]
      }
    },

    layout: {
      header: {
        heightPx: 64,
        structure: ["Logo", "Location Selector", "Search", "Cart", "Profile"],
        stickyBehavior: "always sticky with cart count badge",
        desktop: {
          paddingX: "px-4 lg:px-8",
          maxWidth: "max-w-[1400px]",
          navItems: 5
        },
        mobile: {
          pattern: "Fixed bottom bar with cart",
          heightPx: 60
        },
        tailwindExample: "bg-white shadow-md sticky top-0 z-50 h-16 flex items-center justify-between px-4"
      },

      hero: {
        structure: ["Hero Image", "Delivery Address Input", "Popular Categories", "Promo Banner"],
        desktopGrid: "Full-width with overlay search",
        mobileStack: "compact with prominent address input",
        padding: "py-12 md:py-16",
        background: "Food photography with warm overlay",
        imageStyle: "Appetizing food photos, high quality",
        tailwindExample: "relative bg-gradient-to-b from-red-600 to-orange-500 py-12 md:py-16 px-4 text-white"
      },

      footer: {
        structure: ["Restaurant Partnership", "Delivery Info", "Support", "App Download"],
        legalItems: ["이용약관", "개인정보처리방침", "사업자정보", "배달정책"],
        tailwindExample: "bg-gray-900 text-gray-300 py-12 px-4 mt-16"
      },

      sections: [
        {
          name: "Category Grid",
          goal: "음식 카테고리 빠른 탐색",
          layoutRule: "Icon grid, horizontal scroll on mobile",
          tailwindExample: "py-8 px-4 overflow-x-auto flex md:grid md:grid-cols-8 gap-4"
        },
        {
          name: "Restaurant List",
          goal: "레스토랑 목록 표시",
          layoutRule: "Card list with image, rating, delivery time",
          tailwindExample: "py-12 px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        },
        {
          name: "Special Offers",
          goal: "프로모션으로 주문 유도",
          layoutRule: "Banner carousel with countdown",
          tailwindExample: "bg-yellow-50 py-8 px-4 overflow-x-auto flex gap-4"
        },
        {
          name: "Near You",
          goal: "근처 맛집 추천",
          layoutRule: "Map view + list toggle",
          tailwindExample: "py-16 px-4 space-y-6"
        },
        {
          name: "Top Rated",
          goal: "인기 메뉴/레스토랑",
          layoutRule: "Horizontal scroll cards with ratings",
          tailwindExample: "py-12 px-4 overflow-x-auto flex gap-4"
        }
      ]
    },

    colors: {
      primary: generateColorScale("#EF4444", "primary"),
      secondary: generateColorScale("#F59E0B", "secondary"),
      gray: generateColorScale("#6B7280", "gray"),
      usageRules: {
        primaryUse: "Order Now, Add to Cart 버튼, 프로모션",
        secondaryUse: "별점, 할인 태그, 포인트",
        surfaceBg: "white for menu, gray-50 for sections",
        border: "gray-200 for card separation",
        textStrong: "gray-900 for menu names and prices",
        textWeak: "gray-600 for descriptions"
      },
      accessibilityNotes: [
        "가격은 bold로 명확히 표시",
        "배달 시간은 아이콘+텍스트 병행",
        "장바구니 카운트는 명확한 배지로 표시"
      ]
    },

    typography: {
      fontFamily: {
        primary: "Pretendard",
        fallback: "system-ui",
        altSuggestion: "Spoqa Han Sans (음식 이름 가독성 좋음)"
      },
      scale: {
        h1: {
          fontSize: "38px",
          fontWeight: 700,
          lineHeight: "1.2",
          letterSpacing: "-0.02em"
        },
        h2: {
          fontSize: "28px",
          fontWeight: 700,
          lineHeight: "1.3",
          letterSpacing: "-0.01em"
        },
        h3: {
          fontSize: "22px",
          fontWeight: 600,
          lineHeight: "1.4",
          letterSpacing: "0"
        },
        body: {
          fontSize: "15px",
          fontWeight: 400,
          lineHeight: "1.6",
          letterSpacing: "0"
        },
        caption: {
          fontSize: "13px",
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
          radius: "rounded-2xl",
          bg: "bg-primary-600",
          text: "text-white font-bold",
          hover: "hover:bg-primary-700 hover:scale-105 transition-all duration-200",
          disabled: "disabled:bg-gray-300 disabled:scale-100",
          tailwind: "bg-primary-600 text-white font-bold px-6 py-3 rounded-2xl hover:bg-primary-700 hover:scale-105 transition-all"
        },
        secondary: {
          heightPx: 48,
          padding: "px-6 py-3",
          radius: "rounded-2xl",
          border: "border-2 border-gray-300",
          text: "text-gray-700 font-semibold",
          hover: "hover:border-primary-600 hover:text-primary-600 transition-colors",
          disabled: "disabled:border-gray-200 disabled:text-gray-400",
          tailwind: "border-2 border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-2xl hover:border-primary-600"
        }
      },
      input: {
        heightPx: 48,
        radius: "rounded-2xl",
        border: "border-2 border-gray-200",
        placeholder: "placeholder:text-gray-400",
        focusRing: "focus:ring-2 focus:ring-primary-400 focus:border-primary-400",
        tailwind: "w-full h-12 px-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary-400"
      },
      card: {
        radius: "rounded-3xl",
        padding: "p-0",
        shadow: "shadow-sm hover:shadow-2xl transition-all duration-300",
        border: "border border-gray-100",
        tailwind: "bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all cursor-pointer"
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
        container: "max-w-[1400px] mx-auto px-4 lg:px-8",
        header: "bg-white shadow-md sticky top-0 z-50 h-16 flex items-center justify-between px-4",
        hero: "relative bg-gradient-to-b from-red-600 to-orange-500 py-12 md:py-16 px-4 text-white",
        primaryButton: "bg-primary-600 text-white font-bold px-6 py-3 rounded-2xl hover:bg-primary-700 hover:scale-105 transition-all",
        secondaryButton: "border-2 border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-2xl hover:border-primary-600",
        card: "bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all cursor-pointer",
        input: "w-full h-12 px-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary-400"
      },
      implementationNotes: [
        "음식 이미지는 lazy loading + placeholder",
        "실시간 배달 추적은 WebSocket 활용",
        "장바구니는 persistent state로 유지",
        "위치 기반 서비스는 Geolocation API"
      ]
    },

    variationSummary: {
      changedPoints: [
        {
          category: "Colors",
          field: "primary가 빨간색(#EF4444)",
          reason: "음식배달은 식욕을 자극하는 빨강/주황 계열이 효과적. 긴급성도 표현"
        },
        {
          category: "Components",
          field: "Card radius가 rounded-3xl로 매우 둥글게",
          reason: "음식 사진이 부드럽고 맛있어 보이도록 유기적 형태"
        },
        {
          category: "Layout",
          field: "위치 선택 기능 헤더에 고정",
          reason: "배달 서비스는 위치가 핵심. 항상 접근 가능해야 함"
        },
        {
          category: "Sections",
          field: "Special Offers 섹션 강조",
          reason: "프로모션과 할인이 주문 전환율에 직접 영향"
        }
      ],
      unchangedPrinciples: [
        "반응형 grid 시스템",
        "Mobile-first 접근",
        "접근성 기준 준수",
        "일관된 spacing scale"
      ]
    }
  };
}
