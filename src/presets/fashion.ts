/**
 * Fashion Industry Preset
 */

import { DesignSystemSpec, BrandTone } from "../types";
import { generateColorScale } from "../utils/colorGenerator";

export function getFashionPreset(brandTone: BrandTone = "프리미엄"): DesignSystemSpec {
  return {
    meta: {
      industry: "패션",
      brandTone: brandTone,
      styleKeywords: ["스타일", "트렌드", "개성", "세련됨", "감각"],
      targetFeeling: "최신 트렌드와 개성있는 스타일을 표현하는 패션 플랫폼"
    },

    figmaGuide: {
      pages: [
        "🎨 Design System",
        "👗 Product Components",
        "🛒 Shopping Experience",
        "📱 Mobile Fashion",
        "✨ Lookbook Pages"
      ],
      namingRule: "Component/Style/State (예: ProductCard/Editorial/Hover)",
      autoLayoutRules: {
        grid: "12-column grid, 20px gutter (visual spacing)",
        spacingScale: [4, 8, 12, 16, 24, 32, 48, 64, 80, 96],
        radiusScale: [0, 4, 8, 12, 16],
        typeScaleTokens: ["text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl"],
        breakpoints: ["mobile: 375px", "tablet: 768px", "desktop: 1280px", "wide: 1920px"]
      }
    },

    layout: {
      header: {
        heightPx: 60,
        structure: ["Logo", "Women", "Men", "New", "Sale", "Search", "Wishlist", "Bag"],
        stickyBehavior: "minimal sticky on scroll",
        desktop: {
          paddingX: "px-6 lg:px-12",
          maxWidth: "max-w-[1920px]",
          navItems: 8
        },
        mobile: {
          pattern: "Minimal with hamburger + icons",
          heightPx: 56
        },
        tailwindExample: "bg-white border-b border-gray-100 sticky top-0 z-50 h-15 flex items-center justify-between px-6"
      },

      hero: {
        structure: ["Full-Screen Image", "Minimal Text Overlay", "Shop Now CTA"],
        desktopGrid: "Full-bleed editorial photography",
        mobileStack: "portrait orientation, text minimal",
        padding: "py-0 (full-bleed)",
        background: "Editorial fashion photography",
        imageStyle: "High fashion photography, editorial style",
        tailwindExample: "relative h-screen bg-cover bg-center flex items-end justify-center pb-20"
      },

      footer: {
        structure: ["Customer Service", "About", "Social Media", "Newsletter"],
        legalItems: ["이용약관", "개인정보처리방침", "교환/환불", "배송정책"],
        tailwindExample: "bg-black text-white py-16 px-6 mt-24"
      },

      sections: [
        {
          name: "New Arrivals",
          goal: "신상품 강조",
          layoutRule: "Masonry grid or 4-column with varied heights",
          tailwindExample: "py-20 px-6 columns-2 md:columns-4 gap-6"
        },
        {
          name: "Shop by Category",
          goal: "카테고리별 탐색",
          layoutRule: "Large image tiles with overlay text",
          tailwindExample: "py-20 px-6 grid md:grid-cols-3 gap-8"
        },
        {
          name: "Trending Now",
          goal: "트렌드 아이템 소개",
          layoutRule: "Horizontal scroll editorial layout",
          tailwindExample: "py-20 px-6 overflow-x-auto flex gap-8"
        },
        {
          name: "Lookbook",
          goal: "스타일링 제안",
          layoutRule: "Full-width editorial spreads",
          tailwindExample: "py-20 space-y-20"
        },
        {
          name: "Brand Story",
          goal: "브랜드 아이덴티티 전달",
          layoutRule: "Minimal text with large imagery",
          tailwindExample: "py-32 px-6 max-w-4xl mx-auto text-center space-y-12"
        }
      ]
    },

    colors: {
      primary: generateColorScale("#EC4899", "primary"),
      secondary: generateColorScale("#8B5CF6", "secondary"),
      gray: generateColorScale("#64748B", "gray"),
      usageRules: {
        primaryUse: "CTA 버튼, Sale 태그, 강조 요소",
        secondaryUse: "보조 액션, 카테고리 태그",
        surfaceBg: "white for clean product focus, black for premium sections",
        border: "gray-100 for subtle minimal borders",
        textStrong: "black for product names",
        textWeak: "gray-600 for details"
      },
      accessibilityNotes: [
        "제품 이미지 중심이므로 대체 텍스트 필수",
        "Sale/New 배지는 명확한 대비",
        "가격은 bold로 강조"
      ]
    },

    typography: {
      fontFamily: {
        primary: "Pretendard",
        fallback: "system-ui",
        altSuggestion: "Helvetica Neue (미니멀 패션 브랜드) 또는 Bodoni (럭셔리 브랜드)"
      },
      scale: {
        h1: {
          fontSize: "64px",
          fontWeight: 300,
          lineHeight: "1.1",
          letterSpacing: "-0.02em"
        },
        h2: {
          fontSize: "48px",
          fontWeight: 300,
          lineHeight: "1.2",
          letterSpacing: "-0.01em"
        },
        h3: {
          fontSize: "32px",
          fontWeight: 400,
          lineHeight: "1.3",
          letterSpacing: "0"
        },
        body: {
          fontSize: "15px",
          fontWeight: 400,
          lineHeight: "1.6",
          letterSpacing: "0.01em"
        },
        caption: {
          fontSize: "13px",
          fontWeight: 400,
          lineHeight: "1.5",
          letterSpacing: "0.02em"
        }
      }
    },

    components: {
      button: {
        primary: {
          heightPx: 48,
          padding: "px-8 py-3",
          radius: "rounded-none",
          bg: "bg-black",
          text: "text-white font-medium tracking-wide uppercase",
          hover: "hover:bg-gray-800 transition-colors duration-300",
          disabled: "disabled:bg-gray-300",
          tailwind: "bg-black text-white font-medium tracking-wide uppercase px-8 py-3 hover:bg-gray-800 transition-colors"
        },
        secondary: {
          heightPx: 48,
          padding: "px-8 py-3",
          radius: "rounded-none",
          border: "border border-black",
          text: "text-black font-medium tracking-wide uppercase",
          hover: "hover:bg-black hover:text-white transition-all duration-300",
          disabled: "disabled:border-gray-300 disabled:text-gray-300",
          tailwind: "border border-black text-black font-medium tracking-wide uppercase px-8 py-3 hover:bg-black hover:text-white transition-all"
        }
      },
      input: {
        heightPx: 44,
        radius: "rounded-none",
        border: "border-b-2 border-gray-300",
        placeholder: "placeholder:text-gray-400",
        focusRing: "focus:border-black focus:outline-none",
        tailwind: "w-full h-11 pb-2 border-b-2 border-gray-300 focus:border-black focus:outline-none bg-transparent"
      },
      card: {
        radius: "rounded-none",
        padding: "p-0",
        shadow: "shadow-none",
        border: "border-0",
        tailwind: "bg-white group cursor-pointer"
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
        container: "max-w-[1920px] mx-auto px-6 lg:px-12",
        header: "bg-white border-b border-gray-100 sticky top-0 z-50 h-15 flex items-center justify-between px-6",
        hero: "relative h-screen bg-cover bg-center flex items-end justify-center pb-20",
        primaryButton: "bg-black text-white font-medium tracking-wide uppercase px-8 py-3 hover:bg-gray-800 transition-colors",
        secondaryButton: "border border-black text-black font-medium tracking-wide uppercase px-8 py-3 hover:bg-black hover:text-white transition-all",
        card: "bg-white group cursor-pointer",
        input: "w-full h-11 pb-2 border-b-2 border-gray-300 focus:border-black focus:outline-none bg-transparent"
      },
      implementationNotes: [
        "이미지 비율 유지 (aspect-ratio) 필수",
        "Hover 시 이미지 줌 효과로 premium 느낌",
        "Minimal UI로 제품이 주인공",
        "Black & White 기본, 색상은 악센트로만"
      ]
    },

    variationSummary: {
      changedPoints: [
        {
          category: "Colors",
          field: "흑백 기반에 핑크 악센트",
          reason: "패션은 제품이 주인공. UI는 미니멀하게, 강조만 컬러"
        },
        {
          category: "Typography",
          field: "Light weight (300) 사용, 큰 헤드라인",
          reason: "Editorial 스타일. 우아하고 세련된 느낌"
        },
        {
          category: "Components",
          field: "rounded-none (직각)",
          reason: "미니멀 고급 브랜드는 직각 처리. 클래식하고 세련됨"
        },
        {
          category: "Layout",
          field: "Full-bleed 이미지, Masonry grid",
          reason: "제품 사진 중심. 다양한 비율로 시각적 흥미"
        }
      ],
      unchangedPrinciples: [
        "반응형 grid 시스템",
        "Mobile-first 접근",
        "접근성 기준 준수",
        "일관된 spacing"
      ]
    }
  };
}
