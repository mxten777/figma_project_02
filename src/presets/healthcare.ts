/**
 * Healthcare Industry Preset
 */

import { DesignSystemSpec, BrandTone } from "../types";
import { generateColorScale } from "../utils/colorGenerator";

export function getHealthcarePreset(brandTone: BrandTone = "신뢰"): DesignSystemSpec {
  return {
    meta: {
      industry: "헬스케어",
      brandTone: brandTone,
      styleKeywords: ["위생", "전문성", "배려", "안심", "접근성"],
      targetFeeling: "환자와 보호자에게 안전하고 전문적인 의료 서비스라는 신뢰를 제공"
    },

    figmaGuide: {
      pages: [
        "🎨 Design System",
        "🏥 Patient Portal",
        "📋 Forms & Input",
        "📱 Mobile Health App",
        "♿ Accessibility Focus"
      ],
      namingRule: "Component/Context/State (예: AppointmentCard/Upcoming/Active)",
      autoLayoutRules: {
        grid: "12-column grid, 32px gutter (generous spacing for clarity)",
        spacingScale: [8, 16, 24, 32, 40, 48, 64, 80, 96, 128],
        radiusScale: [8, 12, 16, 20, 24],
        typeScaleTokens: ["text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl"],
        breakpoints: ["mobile: 375px", "tablet: 768px", "desktop: 1280px", "large: 1600px"]
      }
    },

    layout: {
      header: {
        heightPx: 80,
        structure: ["Logo", "Services Menu", "Find Doctor", "Emergency Contact", "Patient Login"],
        stickyBehavior: "sticky with emergency contact always visible",
        desktop: {
          paddingX: "px-8 lg:px-16",
          maxWidth: "max-w-[1400px]",
          navItems: 5
        },
        mobile: {
          pattern: "Simple drawer with emergency button fixed",
          heightPx: 72
        },
        tailwindExample: "bg-white border-b-2 border-secondary-200 sticky top-0 z-50 h-20 flex items-center justify-between px-8"
      },

      hero: {
        structure: ["Headline", "Service Description", "Appointment CTA", "Emergency Info", "Patient Testimonial"],
        desktopGrid: "Centered content with supporting imagery",
        mobileStack: "vertical, CTA prominent",
        padding: "py-20 md:py-32",
        background: "soft gradient from secondary-50 to white",
        imageStyle: "Professional medical team, diverse and approachable",
        tailwindExample: "bg-gradient-to-b from-secondary-50 to-white py-20 md:py-32 px-8 text-center"
      },

      footer: {
        structure: ["Hospital Info", "Departments", "Patient Resources", "Contact & Hours"],
        legalItems: ["이용약관", "개인정보처리방침", "의료법 준수사항", "환자권리장전"],
        tailwindExample: "bg-gray-50 border-t-2 border-gray-200 py-16 px-8"
      },

      sections: [
        {
          name: "Services Overview",
          goal: "제공 진료과 및 서비스 안내",
          layoutRule: "Icon grid, 4 columns on desktop, clear labels",
          tailwindExample: "py-20 px-8 grid md:grid-cols-4 gap-8"
        },
        {
          name: "Why Choose Us",
          goal: "병원의 강점과 전문성 전달",
          layoutRule: "Feature list with icons, 3-column",
          tailwindExample: "bg-primary-50 py-20 px-8 grid md:grid-cols-3 gap-12"
        },
        {
          name: "Find a Doctor",
          goal: "의료진 검색 및 예약",
          layoutRule: "Search bar + filtered card list",
          tailwindExample: "py-20 px-8 space-y-8"
        },
        {
          name: "Patient Portal CTA",
          goal: "온라인 진료 예약 유도",
          layoutRule: "Centered card with step-by-step guide",
          tailwindExample: "bg-white py-20 px-8 max-w-4xl mx-auto"
        },
        {
          name: "Health Resources",
          goal: "건강 정보 제공으로 신뢰 구축",
          layoutRule: "Blog-style card grid",
          tailwindExample: "py-20 px-8 grid md:grid-cols-3 gap-6"
        },
        {
          name: "Contact & Location",
          goal: "찾아오는 길 및 연락처",
          layoutRule: "Map embed + contact details sidebar",
          tailwindExample: "py-20 px-8 grid md:grid-cols-5 gap-8"
        }
      ]
    },

    colors: {
      primary: generateColorScale("#00A9E0", "primary"),
      secondary: generateColorScale("#7AC142", "secondary"),
      gray: generateColorScale("#5A6C7D", "gray"),
      usageRules: {
        primaryUse: "주요 CTA (예약하기), 링크, 중요 정보",
        secondaryUse: "건강/긍정 메시지, 성공 상태",
        surfaceBg: "white for forms, gray-50 for sections",
        border: "gray-300 for clear separation (high clarity needed)",
        textStrong: "gray-900 for headings and critical info",
        textWeak: "gray-600 for body, gray-500 for helper text"
      },
      accessibilityNotes: [
        "모든 interactive 요소는 AAA 기준(7:1) 명도 대비 적용",
        "의료 정보는 최소 18px로 가독성 최우선",
        "color-blind friendly: 색상만으로 정보 구분 금지, 아이콘/텍스트 병행",
        "고령 사용자를 고려한 넉넉한 터치 영역(최소 48x48px)"
      ]
    },

    typography: {
      fontFamily: {
        primary: "Pretendard",
        fallback: "system-ui",
        altSuggestion: "Noto Sans KR (높은 가독성, 의료 정보 전달에 적합)"
      },
      scale: {
        h1: {
          fontSize: "44px",
          fontWeight: 700,
          lineHeight: "1.3",
          letterSpacing: "-0.01em"
        },
        h2: {
          fontSize: "36px",
          fontWeight: 600,
          lineHeight: "1.4",
          letterSpacing: "0"
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
          lineHeight: "1.7",
          letterSpacing: "0"
        },
        caption: {
          fontSize: "15px",
          fontWeight: 400,
          lineHeight: "1.6",
          letterSpacing: "0"
        }
      }
    },

    components: {
      button: {
        primary: {
          heightPx: 52,
          padding: "px-8 py-4",
          radius: "rounded-xl",
          bg: "bg-primary-600",
          text: "text-white font-semibold text-lg",
          hover: "hover:bg-primary-700 transition-colors duration-200",
          disabled: "disabled:bg-gray-300",
          tailwind: "bg-primary-600 text-white font-semibold text-lg px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors duration-200"
        },
        secondary: {
          heightPx: 52,
          padding: "px-8 py-4",
          radius: "rounded-xl",
          border: "border-2 border-primary-600",
          text: "text-primary-600 font-semibold text-lg",
          hover: "hover:bg-primary-50 transition-colors duration-200",
          disabled: "disabled:border-gray-300 disabled:text-gray-300",
          tailwind: "border-2 border-primary-600 text-primary-600 font-semibold text-lg px-8 py-4 rounded-xl hover:bg-primary-50"
        }
      },
      input: {
        heightPx: 52,
        radius: "rounded-xl",
        border: "border-2 border-gray-300",
        placeholder: "placeholder:text-gray-500 placeholder:text-base",
        focusRing: "focus:ring-4 focus:ring-primary-200 focus:border-primary-500",
        tailwind: "w-full h-13 px-5 text-base border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-primary-200 focus:border-primary-500"
      },
      card: {
        radius: "rounded-2xl",
        padding: "p-8",
        shadow: "shadow-lg",
        border: "border-2 border-gray-200",
        tailwind: "bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg"
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
        container: "max-w-[1400px] mx-auto px-8 lg:px-16",
        header: "bg-white border-b-2 border-secondary-200 sticky top-0 z-50 h-20 flex items-center justify-between px-8",
        hero: "bg-gradient-to-b from-secondary-50 to-white py-20 md:py-32 px-8 text-center",
        primaryButton: "bg-primary-600 text-white font-semibold text-lg px-8 py-4 rounded-xl hover:bg-primary-700",
        secondaryButton: "border-2 border-primary-600 text-primary-600 font-semibold text-lg px-8 py-4 rounded-xl hover:bg-primary-50",
        card: "bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg",
        input: "w-full h-13 px-5 text-base border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-primary-200"
      },
      implementationNotes: [
        "Form validation은 실시간 피드백으로 에러 감소",
        "Loading state는 명확히 표시 (의료 예약은 critical action)",
        "고령 사용자를 위한 큰 텍스트와 넉넉한 spacing",
        "Emergency contact는 모든 페이지에서 접근 가능하게"
      ]
    },

    variationSummary: {
      changedPoints: [
        {
          category: "Colors",
          field: "primary가 차분한 청록색(#00A9E0)",
          reason: "의료 서비스는 신뢰와 청결함을 전달하는 파란 계열이 필수. 너무 강렬하지 않은 톤"
        },
        {
          category: "Typography",
          field: "전체적으로 폰트 크기가 큼 (body 17px)",
          reason: "고령 환자와 시력이 낮은 사용자를 고려한 높은 가독성 확보"
        },
        {
          category: "Components",
          field: "Button과 Input 높이가 52px로 높음",
          reason: "접근성 강화. 터치 오류 최소화 및 시니어 친화적 UI"
        },
        {
          category: "Layout",
          field: "Spacing이 넉넉함 (32px gutter)",
          reason: "복잡한 의료 정보를 명확히 구분하고 인지 부담 감소"
        },
        {
          category: "Accessibility",
          field: "AAA 기준 적용",
          reason: "의료 정보는 법적으로도 높은 접근성 요구. 장애인, 고령자 필수 고려"
        }
      ],
      unchangedPrinciples: [
        "반응형 12-column grid는 업종 무관 표준",
        "Mobile-first 설계 원칙",
        "일관된 spacing scale로 시각적 리듬 유지",
        "사용자 중심의 정보 구조"
      ]
    }
  };
}
