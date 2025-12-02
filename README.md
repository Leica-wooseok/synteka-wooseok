# Synteka Wooseok - Landing Page 프로젝트

## 구현 상세

### 1. 레이아웃 및 섹션 구조

#### Header 컴포넌트

- **스크롤 인터랙션**: 스크롤 시 blur 효과 적용으로 콘텐츠 위에서 가독성 향상
- **성능 최적화**: throttle 적용하여 스크롤 이벤트 핸들러 성능 최적화 (100ms 간격)
- **반응형 네비게이션**:
  - Desktop: 가로 네비게이션 및 언어 선택 버튼
  - Mobile: 햄버거 메뉴 및 전체화면 모달 네비게이션
- **SSR 호환성**: `useLayoutEffect`와 `mounted` 상태를 활용한 hydration mismatch 방지
- **접근성**: 호버 효과로 사용자 피드백 강화

#### HeroSection

- **시맨틱 HTML**: h1 태그 사용으로 웹 표준 준수 (페이지당 h1은 한 번만 사용)
- **이미지 처리**: Figma 디자인의 dim 영역과 video 섹션 여백 영역이 겹치는 문제 해결
  - 이미지를 aspect-ratio에 맞춰 overflow hidden 처리
  - Gradient overlay로 자연스러운 전환 효과
- **반응형 이미지**: Desktop/Mobile 별도 이미지 제공으로 최적화
- **애니메이션**: Fade-in 효과로 부드러운 진입

#### VideoSection

- **자동 재생 제어**: IntersectionObserver API 활용
  - 뷰포트에 50% 이상 들어오면 자동 재생
- **커스텀 Hook**: `useVideoAutoplay` hook으로 재사용 가능한 로직 분리

#### TabSection

- **동적 탭 전환**: 탭 버튼 그룹으로 콘텐츠 제어
- **애니메이션**: opacity와 visibility를 활용한 부드러운 전환
- **반응형 이미지**: 각 탭마다 Desktop/Mobile 최적화 이미지

#### CardSlideSection

- **Swiper 라이브러리**: 터치 및 마우스 드래그 지원 슬라이드 구현
- **반응형 카드**: Breakpoint에 따라 카드 크기 및 레이아웃 변경
- **aspect-ratio mixin**: 일관된 비율 유지

### 2. 컴포넌트 시스템

#### Typography 컴포넌트

- **재사용 가능한 타이포그래피 시스템** 구축
- **Variant 지원**: heading1, heading2, heading3, paragraph, link, caption
- **Color 시스템**: link, headline, paragraph, caption 색상 테마
- **유연한 구조**: component prop으로 HTML 태그 커스터마이징 가능

#### Button 컴포넌트

- **FilledButton**: Primary/Gray 테마, 4가지 사이즈(xl, l, m, s)
  - Hover 효과 (darken 5%)
  - Disabled 상태 처리
  - 아이콘 지원
- **LanguageButton**:
  - Portal을 활용한 드롭다운 (z-index 문제 해결)
  - 외부 클릭 감지로 자동 닫힘
  - 반응형 popover 위치 계산

#### Card 컴포넌트 (SlideCard)

- **이미지 + 정보 레이아웃**
- **aspect-ratio mixin** 활용으로 일관된 비율 유지
- **반응형 크기 조정**: Desktop 460px / Mobile 230px

#### Tag 컴포넌트

- 간단한 라벨 표시용 컴포넌트

#### TabButtonGroup 컴포넌트

- **접근성**: Active 상태 시각적 피드백
- **반응형**: 모바일에서도 가독성 유지
- **호버 효과**: 밑줄 애니메이션

### 3. 성능 최적화

#### useDebounceWindowWidth Hook

- **목적**: resize 이벤트 시 불필요한 리렌더링 방지
- **최적화 전략**:
  - `debounce`: 300ms 후 최종 업데이트로 리렌더링 최소화
- **SSR 대응**: window 객체 체크로 서버/클라이언트 환경 모두 지원

#### 이미지 최적화

- Next.js Image 컴포넌트 활용 (자동 최적화, lazy loading)
- Priority 플래그로 Hero 이미지 우선 로딩

#### CSS 최적화

- **SCSS Modules**: 스타일 충돌 방지 및 번들 최적화
- **Mixin 시스템**:
  - `aspect-ratio` mixin으로 코드 재사용
  - Typography mixin으로 일관된 텍스트 스타일
  - Flexbox utility mixin
- **변수 관리**: `variables.scss`에서 색상, 폰트, 간격 등 중앙 관리

### 4. 스타일 시스템

#### Breakpoints

- Extra Small: ~374px (`$breakpoint-xs: 375px`)
- Small: ~429px (`$breakpoint-sm: 430px`)
- Medium: ~767px (`$breakpoint-md: 768px`)
- Large (Desktop): 1100px 이상 (`$breakpoint-lg: 1100px`)
- 커스텀 breakpoint 상수 (`breakpoints.ts`, `breakpoints.scss`)

#### Color System

- **Primary Colors**:
  - Dark Green: `#485c11` (Primary Color, Caption)
  - Green: `#8e9c78`
  - Light Green: `#dfecc6`
- **Grayscale**:
  - Black: `#000`
  - Gray: `#929292`
  - Light Gray: `#e9e9e9`
  - White: `#fff`
- **Text Colors**:
  - Link: `#000` (Black)
  - Paragraph: `#6f6f6f`
  - Caption: `#485c11` (Dark Green)

### 5. 개발 환경

#### Storybook

- **컴포넌트 개발 및 문서화 도구**
- **구현된 Stories**:
  - FilledButton
  - LanguageButton
  - Typography
  - Tag
  - SlideCard
  - TabButtonGroup
- **설정**:
  - SCSS 지원
  - SVG React 컴포넌트 변환
  - 폰트 에셋 처리
  - Next.js 컴포넌트 Mock (Image, Link)
  - Global styles import

#### Font 관리

- Local font files (woff, woff2) 사용
- `fonts.scss`에서 `@font-face` 정의
- Webpack 설정으로 폰트 에셋 처리

### 6. 코드 품질

#### 폴더 구조

```
src/
├── components/       # 재사용 가능한 UI 컴포넌트
│   ├── Buttons/
│   ├── Cards/
│   ├── Header/
│   ├── SectionTitleBox/
│   ├── TabButtonGroup/
│   ├── Tags/
│   └── Typography/
├── sections/         # 페이지 섹션 컴포넌트
│   ├── HeroSection/
│   ├── VideoSection/
│   ├── TabSection/
│   └── CardSlideSection/
├── hooks/           # 커스텀 React Hooks
├── styles/          # 전역 스타일, 변수, mixin
├── constants/       # 상수 정의
└── pages/          # Next.js 페이지
```

#### 컴포넌트 분리 원칙

- **Atomic Design 영향**: atoms(Button, Tag) → molecules(SectionTitleBox) → organisms(Header) → sections
- **관심사 분리**: 컴포넌트별 독립적인 스타일 파일
- **재사용성**: Props 인터페이스 명확하게 정의

#### TypeScript

- 엄격한 타입 정의
- Props 인터페이스 명시

### 7. SEO 및 접근성

#### Meta Tags

- Open Graph 프로토콜 적용 (소셜 미디어 공유 최적화)
- 기본 SEO 메타 태그 설정

#### Semantic HTML

- 적절한 태그 사용 (header, section, h1-h3, etc.)
- Alt 텍스트 제공

#### 접근성

- 키보드 네비게이션 지원
- 호버/포커스 상태 명확한 시각적 피드백

## 주요 의사결정

### 1. Swiper vs 커스텀 구현

- **선택**: Swiper 라이브러리
- **이유**:
  - 터치 제스처, 접근성, 크로스 브라우저 호환성 보장
  - 개발 시간 단축

### 2. Typography 컴포넌트 도입

- **선택**: 재사용 가능한 Typography 컴포넌트
- **이유**:
  - 타이포그래피 일관성 보장
  - 유지보수성 향상
  - Semantic HTML 유연성

### 3. Portal을 활용한 Popover

- **선택**: React Portal
- **이유**:
  - Z-index 스택 컨텍스트 문제 해결
  - 부모 컴포넌트 overflow 제약 해제
