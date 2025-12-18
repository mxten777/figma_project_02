# 📁 프로젝트 구조 (확장 가능한 설계)

```
web/
├── components/           # 🧩 공통 UI 컴포넌트 (전 페이지 재사용)
│   ├── ui/              # 기본 UI 요소
│   │   ├── Button.tsx          # Primary/Secondary/Disabled variants
│   │   ├── Typography.tsx      # H1~Caption 텍스트 래퍼
│   │   ├── Card.tsx           # 카드 컴포넌트
│   │   └── Input.tsx          # 폼 입력 컴포넌트
│   │
│   ├── layout/          # 레이아웃 컴포넌트
│   │   ├── Header.tsx         # Desktop/Mobile 네비게이션
│   │   ├── Footer.tsx         # 공통 푸터
│   │   ├── Section.tsx        # Section 컨테이너 (padding/max-width)
│   │   └── Container.tsx      # 1440px 중심 컨테이너
│   │
│   └── legacy/          # 기존 컴포넌트 (마이그레이션 대기)
│       ├── Header.tsx
│       ├── GeneratorForm.tsx
│       ├── ResultDisplay.tsx
│       └── FeatureCards.tsx
│
├── sections/            # 📄 Section 단위 컴포넌트
│   ├── HeroSection.tsx        # Hero 섹션 (Desktop/Mobile)
│   ├── CTASection.tsx         # Call-to-Action 섹션
│   ├── FeaturesSection.tsx    # 기능 소개 (카드 그리드)
│   ├── StatsSection.tsx       # 지표/수치 섹션
│   └── ContentSection.tsx     # 범용 콘텐츠 섹션
│
├── pages/               # 📱 페이지 컴포넌트
│   ├── HomePage.tsx           # 메인 랜딩 페이지
│   ├── GeneratorPage.tsx      # 디자인 생성 페이지
│   ├── ComparisonPage.tsx     # 비교 페이지
│   ├── PreviewPage.tsx        # 미리보기 페이지
│   └── admin/                 # 관리자 페이지
│       ├── AdminLayout.tsx    # Sidebar + Topbar
│       ├── Dashboard.tsx      # 대시보드
│       └── Settings.tsx       # 설정
│
├── styles/              # 🎨 디자인 토큰
│   ├── tokens.ts              # 디자인 토큰 (TS 상수)
│   └── index.css              # Tailwind + Global CSS
│
├── hooks/               # 🪝 커스텀 훅
│   ├── useBreakpoint.ts       # 반응형 breakpoint 감지
│   └── useDesignSystem.ts     # 업종별 디자인 시스템 훅
│
├── utils/               # 🛠️ 유틸리티
│   └── cn.ts                  # classNames 병합 (clsx + tailwind-merge)
│
├── App.tsx              # 라우팅 & 글로벌 레이아웃
└── main.tsx             # 앱 진입점

src/                     # 🎯 비즈니스 로직 (기존 유지)
├── types.ts
├── generator.ts
├── presets/
└── utils/
```

## 🎯 설계 원칙

### 1. 컴포넌트 분리 기준
- **ui/**: 프로젝트 무관, 어디서나 쓸 수 있는 순수 UI
- **layout/**: 페이지 구조 관련 (Header, Footer, Container)
- **sections/**: 독립적인 Section 블록 (Hero, CTA, Features)
- **pages/**: Section 조합으로 만든 완성 페이지

### 2. 재사용성 규칙
- ui 컴포넌트는 **업종/프로젝트 의존성 없음**
- Section은 **props로만 제어** (하드코딩 금지)
- 페이지는 **Section 조합**만 담당

### 3. 확장 시나리오
- **새 페이지 추가**: pages/ 폴더에 추가 → sections 조합
- **새 업종 추가**: src/presets/ 추가 → tokens.ts 확장
- **새 프로젝트 복사**: web/ 폴더 전체 복사 → tokens만 수정
