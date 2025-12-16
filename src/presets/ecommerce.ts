/**
 * E-commerce Industry Preset
 */

import { DesignSystemSpec, BrandTone } from "../types";
import { generateColorScale } from "../utils/colorGenerator";

export function getEcommercePreset(brandTone: BrandTone = "친근"): DesignSystemSpec {
  return {
    meta: {
      industry: "이커머스",
      brandTone: brandTone,
      styleKeywords: ["활기", "편의성", "직관성", "구매욕구", "친근함"],
      targetFeeling: "쇼핑의 즐거움과 편리함을 동시에 제공하여 구매 전환 유도"
    },

    figmaGuide: {
      pages: [
        "🎨 Design System",
        "🛍️ Product Components",
        "🛒 Cart & Checkout",
        "📱 Mobile Shop",
        "💳 Payment Flow"
      ],
      namingRule: "Component/Type/State (예: ProductCard/Featured/Hover)",
      autoLayoutRules: {
        grid: "12-column grid, 16px gutter (tighter for product density)",
        spacingScale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64],
        radiusScale: [8, 12, 16, 20, 24],
        typeScaleTokens: ["text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl"],
        breakpoints: ["mobile: 360px", "tablet: 768px", "desktop: 1024px", "wide: 1440px"]
      }
    },

    layout: {
      header: {
        heightPx: 64,
        structure: ["Logo", "Search Bar (prominent)", "Categories", "Cart Icon", "User Account"],
        stickyBehavior: "always sticky with mini search on scroll",
        desktop: {
          paddingX: "px-4 lg:px-8",
          maxWidth: "max-w-[1600px]",
          navItems: 8
        },
        mobile: {
          pattern: "Bottom navigation bar for main actions",
          heightPx: 56
        },
        tailwindExample: "bg-white shadow-sm sticky top-0 z-50 h-16 flex items-center justify-between px-4 lg:px-8"
      },

      hero: {
        structure: ["Hero Banner (Carousel)", "Sale Badge", "Shop Now CTA", "Trending Items Preview"],
        desktopGrid: "Full-width carousel with overlay text",
        mobileStack: "full-bleed images with compact CTA",
        padding: "py-0 (full-bleed hero)",
        background: "Dynamic images with gradient overlay",
        imageStyle: "Lifestyle product photography, vibrant and aspirational",
        tailwindExample: "relative w-full h-[500px] md:h-[600px] bg-gradient-to-r from-black/40 to-transparent"
      },

      footer: {
        structure: ["Customer Service", "Shopping Info", "Company Info", "Social & App Links"],
        legalItems: ["이용약관", "개인정보처리방침", "전자금융거래약관", "사업자정보"],
        tailwindExample: "bg-gray-100 py-12 px-4 mt-16 border-t border-gray-200"
      },

      sections: [
        {
          name: "Category Navigation",
          goal: "주요 카테고리로 빠른 탐색 유도",
          layoutRule: "Horizontal scroll on mobile, grid on desktop, icon + label",
          tailwindExample: "py-8 px-4 overflow-x-auto flex md:grid md:grid-cols-6 gap-4"
        },
        {
          name: "Featured Products",
          goal: "추천 상품 노출로 구매 전환",
          layoutRule: "4-column grid on desktop, 2-column on mobile, product cards with image + price + rating",
          tailwindExample: "py-12 px-4 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        },
        {
          name: "Flash Sale / Deals",
          goal: "한정 할인으로 긴급성 유발",
          layoutRule: "Horizontal carousel with countdown timer",
          tailwindExample: "bg-red-50 py-8 px-4 overflow-x-auto flex gap-4"
        },
        {
          name: "Brand Story",
          goal: "브랜드 신뢰도 구축",
          layoutRule: "2-column split (image + text)",
          tailwindExample: "py-16 px-4 grid md:grid-cols-2 gap-8 items-center"
        },
        {
          name: "Reviews & Ratings",
          goal: "사회적 증거로 구매 결정 지원",
          layoutRule: "Card grid with user photos and ratings",
          tailwindExample: "py-12 px-4 grid md:grid-cols-3 gap-6"
        },
        {
          name: "Newsletter Signup",
          goal: "재방문 및 리타게팅을 위한 이메일 수집",
          layoutRule: "Centered form with benefit list",
          tailwindExample: "bg-primary-600 text-white py-12 px-4 text-center"
        }
      ]
    },

    colors: {
      primary: generateColorScale("#FF6B35", "primary"),
      secondary: generateColorScale("#F7931E", "secondary"),
      gray: generateColorScale("#4A5568", "gray"),
      usageRules: {
        primaryUse: "Add to Cart, Buy Now 버튼, Sale 태그, 중요 CTA",
        secondaryUse: "Wishlist, 보조 액션, 카테고리 강조",
        surfaceBg: "white for clean product focus, gray-50 for section separation",
        border: "gray-200 for subtle division",
        textStrong: "gray-900 for product names and prices",
        textWeak: "gray-600 for descriptions, gray-500 for metadata"
      },
      accessibilityNotes: [
        "Price 텍스트는 최소 16px로 가독성 확보",
        "Sale 배지는 primary-600 배경에 white 텍스트로 7:1 대비",
        "터치 타겟은 최소 48x48px (모바일 제품 카드 클릭 영역)"
      ]
    },

    typography: {
      fontFamily: {
        primary: "Pretendard",
        fallback: "system-ui",
        altSuggestion: "Inter (글로벌 이커머스 시 추천, 다국어 지원 우수)"
      },
      scale: {
        h1: {
          fontSize: "40px",
          fontWeight: 700,
          lineHeight: "1.2",
          letterSpacing: "-0.02em"
        },
        h2: {
          fontSize: "32px",
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
          radius: "rounded-full",
          bg: "bg-primary-600",
          text: "text-white font-bold",
          hover: "hover:bg-primary-700 hover:scale-105 transition-all duration-200",
          disabled: "disabled:bg-gray-300 disabled:scale-100",
          tailwind: "bg-primary-600 text-white font-bold px-6 py-3 rounded-full hover:bg-primary-700 hover:scale-105 transition-all duration-200"
        },
        secondary: {
          heightPx: 48,
          padding: "px-6 py-3",
          radius: "rounded-full",
          border: "border-2 border-gray-300",
          text: "text-gray-700 font-semibold",
          hover: "hover:border-primary-600 hover:text-primary-600 transition-colors duration-200",
          disabled: "disabled:border-gray-200 disabled:text-gray-400",
          tailwind: "border-2 border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-full hover:border-primary-600 hover:text-primary-600"
        }
      },
      input: {
        heightPx: 44,
        radius: "rounded-full",
        border: "border-2 border-gray-200",
        placeholder: "placeholder:text-gray-400",
        focusRing: "focus:ring-2 focus:ring-primary-400 focus:border-primary-400",
        tailwind: "w-full h-11 px-4 border-2 border-gray-200 rounded-full focus:ring-2 focus:ring-primary-400 focus:border-primary-400"
      },
      card: {
        radius: "rounded-2xl",
        padding: "p-4",
        shadow: "shadow-sm hover:shadow-xl transition-shadow duration-300",
        border: "border border-gray-100",
        tailwind: "bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer"
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
        container: "max-w-[1600px] mx-auto px-4 lg:px-8",
        header: "bg-white shadow-sm sticky top-0 z-50 h-16 flex items-center justify-between px-4",
        hero: "relative w-full h-[500px] md:h-[600px] bg-gradient-to-r from-black/40",
        primaryButton: "bg-primary-600 text-white font-bold px-6 py-3 rounded-full hover:bg-primary-700 hover:scale-105 transition-all",
        secondaryButton: "border-2 border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-full hover:border-primary-600",
        card: "bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow cursor-pointer",
        input: "w-full h-11 px-4 border-2 border-gray-200 rounded-full focus:ring-2 focus:ring-primary-400"
      },
      implementationNotes: [
        "Product image lazy loading으로 초기 로딩 속도 최적화",
        "Intersection Observer로 무한 스크롤 구현",
        "hover:scale 효과로 인터랙티브한 쇼핑 경험 제공",
        "rounded-full 버튼으로 친근하고 모던한 느낌 강조"
      ]
    },

    variationSummary: {
      changedPoints: [
        {
          category: "Colors",
          field: "primary가 주황색 계열(#FF6B35)",
          reason: "이커머스는 구매 욕구를 자극하는 따뜻하고 활기찬 컬러가 효과적. 할인/세일 강조에 유리"
        },
        {
          category: "Components",
          field: "Button radius가 rounded-full",
          reason: "친근하고 접근하기 쉬운 브랜드 이미지. 젊은 타겟층에게 어필"
        },
        {
          category: "Layout",
          field: "Product grid가 촘촘함 (2-4 columns)",
          reason: "한 화면에 많은 상품을 노출해야 탐색과 비교가 용이. 정보 밀도가 높음"
        },
        {
          category: "Sections",
          field: "Flash Sale/Deals 섹션 필수",
          reason: "긴급성(scarcity)과 한정성(urgency)을 활용한 전환 최적화 전략"
        },
        {
          category: "Header",
          field: "Search Bar가 중앙에 크게 배치",
          reason: "이커머스는 검색 기반 탐색이 주요 사용 패턴. 검색창 접근성이 매출에 직결"
        }
      ],
      unchangedPrinciples: [
        "반응형 grid 시스템은 업종 무관하게 표준",
        "Mobile-first 접근 (모바일 쇼핑 비중 증가 추세)",
        "접근성 기준(WCAG AA)은 모든 사용자를 위한 필수 요소",
        "일관된 spacing scale로 시각적 리듬 유지"
      ]
    }
  };
}
