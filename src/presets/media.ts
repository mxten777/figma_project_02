/**
 * Media & OTT (Streaming) Industry Preset
 */

import { DesignSystemSpec, BrandTone } from "../types";
import { generateColorScale } from "../utils/colorGenerator";

export function getMediaPreset(brandTone: BrandTone = "테크"): DesignSystemSpec {
  return {
    meta: {
      industry: "미디어",
      brandTone: brandTone,
      styleKeywords: ["콘텐츠", "몰입", "스트리밍", "엔터테인먼트", "시청"],
      targetFeeling: "다양한 콘텐츠를 쉽게 탐색하고 바로 시청할 수 있는 몰입형 경험"
    },

    figmaGuide: {
      pages: [
        "🎨 Design System",
        "🎬 Content Grid",
        "▶️ Video Player",
        "📱 Mobile Streaming",
        "👤 User Profile"
      ],
      namingRule: "Component/ContentType/State (예: ThumbnailCard/Series/Playing)",
      autoLayoutRules: {
        grid: "24-column fluid grid, 12px gutter",
        spacingScale: [4, 8, 12, 16, 20, 24, 32, 40, 48],
        radiusScale: [4, 6, 8, 12, 16],
        typeScaleTokens: ["text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl"],
        breakpoints: ["mobile: 375px", "tablet: 768px", "desktop: 1280px", "tv: 1920px"]
      }
    },

    layout: {
      header: {
        heightPx: 68,
        structure: ["Logo", "Home", "TV Shows", "Movies", "My List", "Search", "Profile"],
        stickyBehavior: "transparent to solid on scroll (Netflix-style)",
        desktop: {
          paddingX: "px-8 lg:px-12",
          maxWidth: "max-w-[1920px]",
          navItems: 7
        },
        mobile: {
          pattern: "Bottom tabs for content categories",
          heightPx: 56
        },
        tailwindExample: "bg-black/90 backdrop-blur-sm text-white sticky top-0 z-50 h-17 flex items-center justify-between px-8 transition-all"
      },

      hero: {
        structure: ["Featured Content Banner", "Play Button", "Add to List", "Content Info", "Genres"],
        desktopGrid: "Full-width cinematic banner",
        mobileStack: "vertical with prominent play button",
        padding: "py-0 (full-bleed)",
        background: "Content thumbnail with gradient overlay",
        imageStyle: "16:9 cinematic stills, dramatic scenes",
        tailwindExample: "relative h-[80vh] bg-cover bg-center flex items-end pb-20 px-12"
      },

      footer: {
        structure: ["Help", "Account", "Press", "Legal"],
        legalItems: ["이용약관", "개인정보처리방침", "콘텐츠 이용약관", "쿠키 설정"],
        tailwindExample: "bg-black text-gray-500 py-16 px-8 mt-20"
      },

      sections: [
        {
          name: "Continue Watching",
          goal: "시청 중인 콘텐츠 이어보기",
          layoutRule: "Horizontal scroll with progress bars",
          tailwindExample: "py-12 px-8 lg:px-12 overflow-x-auto flex gap-4"
        },
        {
          name: "Trending Now",
          goal: "인기 콘텐츠 추천",
          layoutRule: "Large thumbnail grid",
          tailwindExample: "py-12 px-8 lg:px-12 grid grid-cols-2 md:grid-cols-6 gap-4"
        },
        {
          name: "My List",
          goal: "사용자 저장 목록",
          layoutRule: "Horizontal scroll",
          tailwindExample: "py-12 px-8 lg:px-12 overflow-x-auto flex gap-4"
        },
        {
          name: "Recommended for You",
          goal: "개인화 추천",
          layoutRule: "Multiple horizontal rows by genre",
          tailwindExample: "py-12 px-8 lg:px-12 space-y-12"
        },
        {
          name: "Top 10 in Korea",
          goal: "실시간 인기 순위",
          layoutRule: "Numbered thumbnail grid",
          tailwindExample: "py-12 px-8 lg:px-12 grid grid-cols-2 md:grid-cols-5 gap-4"
        }
      ]
    },

    colors: {
      primary: generateColorScale("#E50914", "primary"),
      secondary: generateColorScale("#8B5CF6", "secondary"),
      gray: generateColorScale("#18181B", "gray"),
      usageRules: {
        primaryUse: "Play, Add to List, primary CTAs",
        secondaryUse: "Premium badges, special content",
        surfaceBg: "black for immersive dark theme",
        border: "gray-800 for subtle separation",
        textStrong: "white on dark",
        textWeak: "gray-400 for metadata"
      },
      accessibilityNotes: [
        "자막 옵션 필수 제공",
        "비디오 컨트롤은 키보드 네비게이션 지원",
        "썸네일 위 텍스트는 명확한 대비"
      ]
    },

    typography: {
      fontFamily: {
        primary: "Pretendard",
        fallback: "system-ui",
        altSuggestion: "Netflix Sans 또는 Montserrat"
      },
      scale: {
        h1: {
          fontSize: "48px",
          fontWeight: 700,
          lineHeight: "1.1",
          letterSpacing: "-0.02em"
        },
        h2: {
          fontSize: "32px",
          fontWeight: 600,
          lineHeight: "1.2",
          letterSpacing: "-0.01em"
        },
        h3: {
          fontSize: "24px",
          fontWeight: 600,
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
          padding: "px-8 py-3",
          radius: "rounded-md",
          bg: "bg-white",
          text: "text-black font-bold text-base",
          hover: "hover:bg-gray-200 transition-colors duration-200",
          disabled: "disabled:bg-gray-600",
          tailwind: "bg-white text-black font-bold text-base px-8 py-3 rounded-md hover:bg-gray-200 transition-colors inline-flex items-center gap-2"
        },
        secondary: {
          heightPx: 48,
          padding: "px-8 py-3",
          radius: "rounded-md",
          border: "border-0",
          bg: "bg-gray-700/80",
          text: "text-white font-semibold text-base",
          hover: "hover:bg-gray-600/80 transition-colors duration-200",
          disabled: "disabled:bg-gray-800",
          tailwind: "bg-gray-700/80 text-white font-semibold text-base px-8 py-3 rounded-md hover:bg-gray-600/80 transition-colors inline-flex items-center gap-2"
        }
      },
      input: {
        heightPx: 48,
        radius: "rounded-md",
        border: "border border-gray-700",
        placeholder: "placeholder:text-gray-500",
        focusRing: "focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-gray-900",
        tailwind: "w-full h-12 px-4 bg-gray-900 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-primary-500"
      },
      card: {
        radius: "rounded-lg",
        padding: "p-0",
        shadow: "shadow-none hover:scale-105 transition-transform duration-300",
        border: "border-0",
        tailwind: "bg-transparent rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
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
        },
        aspectRatio: {
          "16/9": "16 / 9",
          "2/3": "2 / 3"
        }
      },
      classSnippets: {
        container: "max-w-[1920px] mx-auto px-8 lg:px-12",
        header: "bg-black/90 backdrop-blur-sm text-white sticky top-0 z-50 h-17 flex items-center justify-between px-8 transition-all",
        hero: "relative h-[80vh] bg-cover bg-center flex items-end pb-20 px-12",
        primaryButton: "bg-white text-black font-bold text-base px-8 py-3 rounded-md hover:bg-gray-200 transition-colors inline-flex items-center gap-2",
        secondaryButton: "bg-gray-700/80 text-white font-semibold text-base px-8 py-3 rounded-md hover:bg-gray-600/80 transition-colors inline-flex items-center gap-2",
        card: "bg-transparent rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer",
        input: "w-full h-12 px-4 bg-gray-900 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-primary-500",
        thumbnail: "aspect-video rounded-lg overflow-hidden",
        poster: "aspect-[2/3] rounded-lg overflow-hidden"
      },
      implementationNotes: [
        "비디오 플레이어는 HLS/DASH 스트리밍",
        "Thumbnail lazy loading + intersection observer",
        "Horizontal scroll은 스냅 포인트 활용",
        "Progress bar는 정확한 재생 위치 표시"
      ]
    },

    variationSummary: {
      changedPoints: [
        {
          category: "Colors",
          field: "완전한 다크 테마 (black)",
          reason: "영상 시청에 최적화. 콘텐츠에 집중"
        },
        {
          category: "Layout",
          field: "Horizontal scroll rows",
          reason: "Netflix 패턴. 많은 콘텐츠를 효율적으로 표시"
        },
        {
          category: "Components",
          field: "Thumbnail aspect ratio (16:9, 2:3)",
          reason: "영상/포스터 비율에 맞춤"
        },
        {
          category: "Interaction",
          field: "Scale on hover (scale-105)",
          reason: "썸네일 hover 피드백. 시각적 흥미"
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
