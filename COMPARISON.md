# 업종별 디자인 시스템 비교표

## 🎨 컬러 시스템 비교

| 업종 | Primary-500 | 컬러 의미 | Secondary-500 | 사용 용도 |
|------|-------------|----------|---------------|----------|
| **금융** | `#0052CC` 🔵 | 신뢰, 안정감, 전문성 | `#00875A` 🟢 | 성공, 긍정적 피드백 |
| **이커머스** | `#FF6B35` 🟠 | 구매욕구, 활기, 친근함 | `#F7931E` 🟡 | Wishlist, 보조 액션 |
| **헬스케어** | `#00A9E0` 🔷 | 청결, 신뢰, 전문성 | `#7AC142` 🟩 | 건강, 긍정 메시지 |
| **테크** | `#6366F1` 🟣 | 혁신, 미래, 기술력 | `#8B5CF6` 💜 | 보조 액션, 강조 |

---

## 📝 타이포그래피 비교

| 업종 | H1 Size | H1 Weight | Body Size | Body Line Height | 특징 |
|------|---------|-----------|-----------|------------------|------|
| **금융** | 48px | 700 | 16px | 1.6 | 명확한 정보 전달 |
| **이커머스** | 40px | 700 | 15px | 1.6 | 편안한 가독성 |
| **헬스케어** | 44px | 700 | 17px | 1.7 | 고령자 고려 |
| **테크** | 56px | 800 | 16px | 1.7 | 임팩트 있는 헤드라인 |

---

## 🎯 컴포넌트 비교

### Button Primary

| 업종 | Height | Radius | Hover Effect | 특징 |
|------|--------|--------|--------------|------|
| **금융** | 48px | `rounded-lg` (8px) | `hover:bg-primary-700` | 보수적, 안정감 |
| **이커머스** | 48px | `rounded-full` | `hover:scale-105` | 친근함, 인터랙티브 |
| **헬스케어** | 52px | `rounded-xl` (12px) | `hover:bg-primary-700` | 큰 터치 영역 |
| **테크** | 44px | `rounded-lg` (8px) | `hover:-translate-y-0.5` | 마이크로 인터랙션 |

### Input Field

| 업종 | Height | Radius | Focus Ring | 특징 |
|------|--------|--------|------------|------|
| **금융** | 48px | `rounded-lg` | `ring-2 ring-primary-500` | 명확한 포커스 |
| **이커머스** | 44px | `rounded-full` | `ring-2 ring-primary-400` | 친근한 형태 |
| **헬스케어** | 52px | `rounded-xl` | `ring-4 ring-primary-200` | 큰 영역, 부드러운 링 |
| **테크** | 44px | `rounded-lg` | `ring-2 ring-primary-500/50` | 투명도 활용 |

### Card Component

| 업종 | Radius | Padding | Shadow | Border |
|------|--------|---------|--------|--------|
| **금융** | `rounded-xl` | `p-6` | `shadow-md` | `border-gray-200` |
| **이커머스** | `rounded-2xl` | `p-4` | `shadow-sm` hover:`shadow-xl` | `border-gray-100` |
| **헬스케어** | `rounded-2xl` | `p-8` | `shadow-lg` | `border-2 border-gray-200` |
| **테크** | `rounded-2xl` | `p-6` | `shadow-sm` hover:`shadow-2xl` | `border-gray-200` |

---

## 📐 레이아웃 비교

### Header

| 업종 | Height | Max Width | Sticky Behavior | 특징 |
|------|--------|-----------|-----------------|------|
| **금융** | 72px | 1440px | `sticky` + shadow on scroll | 전문적, 깔끔 |
| **이커머스** | 64px | 1600px | `always sticky` | 검색 바 중앙 배치 |
| **헬스케어** | 80px | 1400px | `sticky` + emergency button | 높이 넉넉, 긴급 연락 |
| **테크** | 64px | 1600px | `backdrop-blur` | Glassmorphism |

### Hero Section

| 업종 | Padding Y | Background | Image Style |
|------|-----------|------------|-------------|
| **금융** | `py-16 md:py-24 lg:py-32` | Gradient `primary-50` to white | Dashboard mockup |
| **이커머스** | `py-0` (full-bleed) | Dynamic images + overlay | Lifestyle photography |
| **헬스케어** | `py-20 md:py-32` | Gradient `secondary-50` to white | Medical team |
| **테크** | `py-20 md:py-32 lg:py-40` | Animated gradient mesh | Product UI screenshot |

### Sections

| 업종 | Minimum Sections | Grid Gutter | 특별 섹션 |
|------|------------------|-------------|----------|
| **금융** | 5 | 24px | Security & Trust |
| **이커머스** | 6 | 16px (촘촘) | Flash Sale / Deals |
| **헬스케어** | 6 | 32px (넉넉) | Find a Doctor |
| **테크** | 6 | 24px | Integration Partners |

---

## 🎯 업종별 핵심 차별화 요소

### 금융 (Finance)
```
컬러: 파란색 (#0052CC) - 신뢰와 안정
스타일: 보수적, 명확한 정보 전달
레이아웃: 법적 고지 강조, 보안 배지 섹션
컴포넌트: 적당한 라운드(8px), 강한 명도 대비
타이포: Bold 사용 빈도 높음 (숫자 강조)
```

### 이커머스 (E-commerce)
```
컬러: 주황색 (#FF6B35) - 구매욕구 자극
스타일: 친근함, 활기, 인터랙티브
레이아웃: 제품 밀도 높음, 검색 바 중앙
컴포넌트: rounded-full, hover:scale 효과
타이포: 편안한 가독성, 적절한 크기
```

### 헬스케어 (Healthcare)
```
컬러: 청록색 (#00A9E0) - 청결과 신뢰
스타일: 접근성 최우선, 명확성
레이아웃: 넉넉한 spacing, 긴급 연락 고정
컴포넌트: 큰 터치 영역(52px), AAA 기준
타이포: 큰 폰트(17px body), 고령자 배려
```

### 테크/SaaS (Tech)
```
컬러: 인디고 (#6366F1) - 혁신과 미래
스타일: 현대적, 세련됨, 애니메이션
레이아웃: 그라디언트 배경, Bento grid
컴포넌트: glassmorphism, micro-interactions
타이포: 큰 헤드라인(56px), 임팩트
```

---

## 📊 접근성 준수 비교

| 업종 | 최소 대비 기준 | 터치 영역 | 특별 고려사항 |
|------|---------------|----------|--------------|
| **금융** | WCAG AA (4.5:1) | 44x44px | 숫자 명확성 |
| **이커머스** | WCAG AA (4.5:1) | 48x48px | 제품 카드 클릭 영역 |
| **헬스케어** | WCAG AAA (7:1) | 48x48px | 고령자, 색맹 대응 |
| **테크** | WCAG AA (4.5:1) | 44x44px | Dark mode 대응 |

---

## 🎨 Tailwind Config 비교

### 금융
```javascript
colors: {
  primary: { 500: '#0052CC' },
  secondary: { 500: '#00875A' }
}
```

### 이커머스
```javascript
colors: {
  primary: { 500: '#FF6B35' },
  secondary: { 500: '#F7931E' }
}
```

### 헬스케어
```javascript
colors: {
  primary: { 500: '#00A9E0' },
  secondary: { 500: '#7AC142' }
}
```

### 테크
```javascript
colors: {
  primary: { 500: '#6366F1' },
  secondary: { 500: '#8B5CF6' }
}
```

---

## 🔍 변화 요약 핵심

### 업종별로 변하는 것
- ✅ 컬러 팔레트 (산업 특성 반영)
- ✅ 버튼 라운드 (브랜드 톤 표현)
- ✅ 폰트 크기 (타겟 사용자 배려)
- ✅ Spacing (정보 밀도 조절)
- ✅ 특수 섹션 (업종 필수 요소)

### 업종 무관하게 유지되는 것
- ✅ 12-column grid 시스템
- ✅ 8px spacing scale
- ✅ Mobile-first 접근
- ✅ WCAG 접근성 기준
- ✅ Semantic HTML 구조

---

## 💡 선택 가이드

### 금융을 선택하세요 (금융, 은행, 증권, 보험)
- 신뢰와 안정감이 최우선
- 법적 규제 준수 필요
- 보수적이고 전문적인 이미지

### 이커머스를 선택하세요 (쇼핑몰, 마켓플레이스)
- 구매 전환이 핵심 목표
- 제품 탐색과 비교가 중요
- 친근하고 접근하기 쉬운 느낌

### 헬스케어를 선택하세요 (병원, 의료, 건강)
- 접근성이 법적 요구사항
- 고령자 사용자 고려 필수
- 신뢰와 청결함 중요

### 테크를 선택하세요 (SaaS, 소프트웨어, IT)
- 혁신적인 이미지 필요
- 기술력 강조
- 현대적이고 세련된 디자인

---

**이 비교표를 참고하여 귀사에 맞는 디자인 시스템을 선택하세요! 🎨**
