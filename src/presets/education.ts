/**
 * Education Industry Preset
 */

import { DesignSystemSpec, BrandTone } from "../types";
import { generateColorScale } from "../utils/colorGenerator";

export function getEducationPreset(brandTone: BrandTone = "친근"): DesignSystemSpec {
  return {
    meta: {
      industry: "교육",
      brandTone: brandTone,
      styleKeywords: ["학습", "성장", "친근함", "동기부여", "명확성"],
      targetFeeling: "학습에 대한 동기를 부여하고 쉽게 접근할 수 있는 교육 플랫폼"
    },

    figmaGuide: {
      pages: [
        "🎨 Design System",
        "📚 Learning Components",
        "📊 Dashboard & Progress",
        "📱 Mobile Learning",
        "🎓 Course Pages"
      ],
      namingRule: "Component/Type/State (예: CourseCard/Featured/Active)",
      autoLayoutRules: {
        grid: "12-column grid, 24px gutter",
        spacingScale: [4, 8, 12, 16, 24, 32, 40, 48, 64, 80],
        radiusScale: [8, 12, 16, 20, 24],
        typeScaleTokens: ["text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl"],
        breakpoints: ["mobile: 375px", "tablet: 768px", "desktop: 1280px", "wide: 1600px"]
      }
    },

    layout: {
      header: {
        heightPx: 68,
        structure: ["Logo", "Courses", "My Learning", "Search", "Profile"],
        stickyBehavior: "sticky with smooth transition",
        desktop: {
          paddingX: "px-6 lg:px-12",
          maxWidth: "max-w-[1400px]",
          navItems: 5
        },
        mobile: {
          pattern: "Bottom tab navigation",
          heightPx: 64
        },
        tailwindExample: "bg-white shadow-sm sticky top-0 z-50 h-17 flex items-center justify-between px-6"
      },

      hero: {
        structure: ["Headline", "Description", "Search Bar", "Category Tags", "Featured Courses"],
        desktopGrid: "Centered with search focus",
        mobileStack: "vertical, search prominent",
        padding: "py-16 md:py-24",
        background: "Soft gradient with playful elements",
        imageStyle: "Friendly illustrations, diverse students",
        tailwindExample: "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 md:py-24 px-6"
      },

      footer: {
        structure: ["About", "Categories", "Support", "Community"],
        legalItems: ["이용약관", "개인정보처리방침", "환불정책", "저작권정책"],
        tailwindExample: "bg-gray-50 py-12 px-6 mt-20 border-t border-gray-200"
      },

      sections: [
        {
          name: "Popular Courses",
          goal: "인기 강의로 사용자 유입",
          layoutRule: "3-4 column grid with course cards",
          tailwindExample: "py-16 px-6 grid md:grid-cols-3 lg:grid-cols-4 gap-6"
        },
        {
          name: "Learning Paths",
          goal: "체계적인 학습 경로 제시",
          layoutRule: "Horizontal scroll cards with progress indicators",
          tailwindExample: "py-16 px-6 overflow-x-auto flex gap-6"
        },
        {
          name: "Instructor Showcase",
          goal: "강사 신뢰도 구축",
          layoutRule: "Profile cards with credentials",
          tailwindExample: "bg-white py-16 px-6 grid md:grid-cols-4 gap-8"
        },
        {
          name: "Student Success Stories",
          goal: "학습 성과 증명",
          layoutRule: "Testimonial cards with before/after",
          tailwindExample: "py-16 px-6 grid md:grid-cols-3 gap-6"
        },
        {
          name: "Free Trial CTA",
          goal: "무료 체험 신청 유도",
          layoutRule: "Centered with benefit highlights",
          tailwindExample: "bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6 text-center"
        }
      ]
    },

    colors: {
      primary: generateColorScale("#3B82F6", "primary"),
      secondary: generateColorScale("#10B981", "secondary"),
      gray: generateColorScale("#6B7280", "gray"),
      usageRules: {
        primaryUse: "주요 CTA, 진행 상태, 링크",
        secondaryUse: "완료/성공 상태, 긍정적 피드백",
        surfaceBg: "white for cards, gray-50 for sections",
        border: "gray-200 for subtle division",
        textStrong: "gray-900 for headings",
        textWeak: "gray-600 for descriptions"
      },
      accessibilityNotes: [
        "진행률 표시는 색상+숫자 병행으로 색맹 대응",
        "모든 interactive 요소는 AA 기준 충족",
        "학습 콘텐츠는 읽기 쉬운 명도 대비 유지"
      ]
    },

    typography: {
      fontFamily: {
        primary: "Pretendard",
        fallback: "system-ui",
        altSuggestion: "Noto Sans KR (교육 콘텐츠 가독성 우수)"
      },
      scale: {
        h1: {
          fontSize: "42px",
          fontWeight: 700,
          lineHeight: "1.2",
          letterSpacing: "-0.02em"
        },
        h2: {
          fontSize: "32px",
          fontWeight: 600,
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
          heightPx: 48,
          padding: "px-6 py-3",
          radius: "rounded-xl",
          bg: "bg-primary-600",
          text: "text-white font-semibold",
          hover: "hover:bg-primary-700 hover:shadow-lg transition-all duration-200",
          disabled: "disabled:bg-gray-300",
          tailwind: "bg-primary-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-700 hover:shadow-lg transition-all"
        },
        secondary: {
          heightPx: 48,
          padding: "px-6 py-3",
          radius: "rounded-xl",
          border: "border-2 border-primary-600",
          text: "text-primary-600 font-semibold",
          hover: "hover:bg-primary-50 transition-colors duration-200",
          disabled: "disabled:border-gray-300 disabled:text-gray-300",
          tailwind: "border-2 border-primary-600 text-primary-600 font-semibold px-6 py-3 rounded-xl hover:bg-primary-50"
        }
      },
      input: {
        heightPx: 48,
        radius: "rounded-xl",
        border: "border-2 border-gray-300",
        placeholder: "placeholder:text-gray-400",
        focusRing: "focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
        tailwind: "w-full h-12 px-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500"
      },
      card: {
        radius: "rounded-2xl",
        padding: "p-6",
        shadow: "shadow-md hover:shadow-xl transition-shadow duration-300",
        border: "border border-gray-200",
        tailwind: "bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
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
        container: "max-w-[1400px] mx-auto px-6 lg:px-12",
        header: "bg-white shadow-sm sticky top-0 z-50 h-17 flex items-center justify-between px-6",
        hero: "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 md:py-24 px-6",
        primaryButton: "bg-primary-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-700 hover:shadow-lg transition-all",
        secondaryButton: "border-2 border-primary-600 text-primary-600 font-semibold px-6 py-3 rounded-xl hover:bg-primary-50",
        card: "bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl transition-shadow",
        input: "w-full h-12 px-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500"
      },
      implementationNotes: [
        "진행률 표시는 progress bar 컴포넌트로 시각화",
        "Course card에 hover 시 확대 효과로 인터랙션",
        "모바일에서 bottom navigation으로 접근성 향상",
        "Search 기능은 autocomplete로 UX 개선"
      ]
    },

    variationSummary: {
      changedPoints: [
        {
          category: "Colors",
          field: "primary가 밝은 파란색(#3B82F6)",
          reason: "교육은 학습과 성장을 상징하는 밝고 친근한 파란색. 동기부여와 신뢰감"
        },
        {
          category: "Layout",
          field: "Learning Paths 섹션 추가",
          reason: "체계적인 학습 경로 제시로 장기 수강 유도"
        },
        {
          category: "Components",
          field: "진행률 표시 컴포넌트 강조",
          reason: "학습 진도 시각화로 성취감과 지속성 향상"
        },
        {
          category: "Typography",
          field: "Line height 1.7로 높음",
          reason: "교육 콘텐츠는 장시간 읽기 편한 넉넉한 행간 필요"
        }
      ],
      unchangedPrinciples: [
        "반응형 grid 시스템",
        "접근성 기준 준수",
        "Mobile-first 접근",
        "일관된 spacing scale"
      ]
    }
  };
}
