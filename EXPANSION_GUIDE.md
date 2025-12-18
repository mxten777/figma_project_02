# 🚀 확장 가이드 (Expansion Guide)

## 📌 새 페이지 추가 시

### 1. Section 조합 방식
```typescript
// web/pages/PricingPage.tsx

import Section from '../components/layout/Section'
import Hero from '../sections/HeroSection'
import Typography from '../components/ui/Typography'
import Button from '../components/ui/Button'

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that fits your needs"
        mediaPosition="none"
      />

      {/* Pricing Cards Section */}
      <Section spacing="lg" background="white">
        <Typography variant="h2" className="text-center mb-12">
          Choose Your Plan
        </Typography>
        <PricingCards />
      </Section>

      {/* FAQ Section */}
      <Section spacing="lg" background="gray">
        <FAQList />
      </Section>

      {/* CTA Section */}
      <Section spacing="xl" background="white">
        <CTAContent />
      </Section>
    </>
  )
}
```

### 2. 새 Section 만들기
```typescript
// web/sections/PricingSection.tsx

import Section from '../components/layout/Section'
import Typography from '../components/ui/Typography'
import Button from '../components/ui/Button'

interface PricingCardProps {
  title: string
  price: string
  features: string[]
  highlighted?: boolean
}

const PricingCard = ({ title, price, features, highlighted }: PricingCardProps) => (
  <div className={cn(
    'p-8 rounded-2xl border-2',
    highlighted ? 'border-primary-500 shadow-xl' : 'border-gray-200'
  )}>
    <Typography variant="h3">{title}</Typography>
    <div className="text-4xl font-bold my-4">{price}</div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-center gap-2">
          <span className="text-green-500">✓</span>
          {feature}
        </li>
      ))}
    </ul>
    <Button 
      variant={highlighted ? 'primary' : 'secondary'} 
      fullWidth
    >
      Start Free Trial
    </Button>
  </div>
)

export default function PricingSection() {
  return (
    <Section spacing="lg" background="white">
      <div className="grid md:grid-cols-3 gap-8">
        <PricingCard
          title="Starter"
          price="$29/mo"
          features={['5 Projects', '10 Team Members', 'Email Support']}
        />
        <PricingCard
          title="Pro"
          price="$79/mo"
          features={['Unlimited Projects', 'Unlimited Members', 'Priority Support']}
          highlighted
        />
        <PricingCard
          title="Enterprise"
          price="Custom"
          features={['Custom Solutions', 'Dedicated Manager', '24/7 Support']}
        />
      </div>
    </Section>
  )
}
```

---

## 🎨 다른 업종 적용 시

### 1. 업종별 컬러 교체 (3단계)

**Step 1: `web/styles/tokens.ts` 수정**
```typescript
// 금융 → 이커머스로 변경
export const colors = {
  primary: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#FF6B35',  // 🔥 메인 Primary 컬러 변경
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
}
```

**Step 2: `tailwind.config.js` 동기화**
```javascript
colors: {
  primary: {
    // tokens.ts와 동일하게 설정
    500: '#FF6B35',
    ...
  }
}
```

**Step 3: 컴포넌트는 변경 없음** ✅
- 모든 컴포넌트가 `bg-primary-500`, `text-primary-600` 등 토큰 사용
- 컬러만 바꿔도 전체 사이트 색상 변경

### 2. 업종별 폰트 교체

```javascript
// tailwind.config.js
fontFamily: {
  // 금융: 안정감 있는 세리프
  sans: ['Merriweather', 'serif'],
  
  // 게임: 역동적인 산세리프
  sans: ['Montserrat', 'sans-serif'],
  
  // 교육: 읽기 편한 고딕
  sans: ['Noto Sans KR', 'sans-serif'],
}
```

---

## 🏗️ 다른 프로젝트에 복사 시

### 1. 필수 파일 목록
```
web/
├── components/ui/           ✅ 필수 (Button, Typography 등)
├── components/layout/       ✅ 필수 (Section, Header, Footer)
├── sections/                ⚠️ 선택 (재사용 가능한 Section)
├── styles/tokens.ts         ✅ 필수 (디자인 토큰)
├── utils/cn.ts             ✅ 필수 (classNames 유틸)
└── hooks/                  ⚠️ 선택 (커스텀 훅)
```

### 2. 복사 후 수정 포인트

**Step 1: 컬러 시스템 변경**
- `web/styles/tokens.ts` → Primary/Secondary 컬러 수정
- `tailwind.config.js` → 동기화

**Step 2: 로고 교체**
- Header 컴포넌트의 `logoSrc`, `logoText` props 변경
- `public/images/` 폴더에 새 로고 추가

**Step 3: 폰트 변경 (선택)**
- `tailwind.config.js` → fontFamily 수정
- Google Fonts 또는 로컬 폰트 로드

**Step 4: 컴포넌트는 그대로** ✅
- Button, Typography, Section 등은 변경 없음
- props로만 제어하므로 재사용 가능

---

## 📐 레이아웃 변형 규칙

### 1. 메뉴 항목 5개 초과 시
```typescript
<Header
  menuItems={[
    // 1~5번: 그대로 표시
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    // 6번 이상: More 드롭다운
    { label: 'Docs', href: '/docs' },
    { label: 'API', href: '/api' },
  ]}
  maxVisibleItems={5}  // 자동으로 More 처리
/>
```

### 2. Hero 이미지 위치 변경
```typescript
// 이미지 오른쪽 (기본)
<Hero media={<HeroImage />} mediaPosition="right" />

// 이미지 왼쪽
<Hero media={<HeroImage />} mediaPosition="left" />

// 이미지 없음 (중앙 정렬)
<Hero mediaPosition="none" />
```

### 3. Section 간격 조정
```typescript
// 작은 간격 (32px)
<Section spacing="sm">...</Section>

// 중간 간격 (64px) - 기본
<Section spacing="md">...</Section>

// 큰 간격 (96px)
<Section spacing="lg">...</Section>

// 매우 큰 간격 (128px) - Hero/CTA
<Section spacing="xl">...</Section>
```

---

## ✅ 체크리스트: 새 서비스 적용 시

- [ ] `web/styles/tokens.ts` 컬러 변경
- [ ] `tailwind.config.js` 컬러 동기화
- [ ] `web/components/layout/Header.tsx` 로고 교체
- [ ] 메뉴 항목 5개 이하로 유지 (또는 More 활용)
- [ ] `public/images/` 폴더에 에셋 추가
- [ ] `package.json` name, version 수정
- [ ] `.env` 파일 Firebase 설정 변경
- [ ] 컴포넌트는 그대로 재사용 ✅

---

## 🎯 핵심 원칙

### ✅ 해도 되는 것
- 컬러 시스템 변경 (`tokens.ts`)
- 폰트 변경 (`tailwind.config.js`)
- 로고 교체 (Header props)
- Section 순서/조합 변경
- 새 Section 추가 (기존 패턴 따라)

### ❌ 하면 안 되는 것
- ui 컴포넌트 내부 로직 변경
- Section 컴포넌트 padding/max-width 임의 변경
- Tailwind 토큰 무시하고 하드코딩
- 반응형 breakpoint 임의 변경

---

**최종 목표 달성 여부:**
> "이 구조 그대로 다른 서비스·다른 업종·다른 고객에도  
> 디자인 흔들림 없이 적용할 수 있다." ✅

**변경 포인트:**
1. 컬러 토큰 (tokens.ts)
2. 로고 이미지 (Header props)
3. 폰트 (tailwind.config.js)

**변경 없이 재사용:**
- Button, Typography, Section 등 모든 ui 컴포넌트
- Header, Footer 레이아웃 컴포넌트
- Hero, CTA 등 Section 컴포넌트
