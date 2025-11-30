# 과제 안내사항

## 기본 사항
본 과제는 UI 구현 능력을 평가하기 위한 과제입니다. 아래 사항을 참고하여 구현을 진행해주세요.

### 구현 범위
- Figma 디자인 시안 중 구현 가능한 범위까지만 작업합니다.
(영상위치: public/video/main.mp4)
- 인터렉션은 제약이 없으므로 자유롭게 구현합니다


### 레이아웃 기준
- Figma 시안은 PC(최대 콘텐츠 너비 1100px)와 모바일(최대 콘텐츠 너비 430px) 두 버전으로 제공됩니다.

### 개발 가이드
- 과제 의도에 부합한다면 필요한 범위 내에서 자유롭게 설계하고 구현합니다.
- 웹 표준과 접근성 지침(WCAG 2.1 AA)을 준수한 시맨틱 마크업을 작성합니다.
- SEO(검색 엔진 최적화)를 고려해 구조를 설계합니다.
- UI 컴포넌트는 개발자 협업 문서화를 위해 Storybook을 활용합니다.

### 제출 방법
- 완성된 결과물은 본인 GitHub 저장소에 업로드한 뒤, 저장소 URL과 구현 의도·주요 선택 사항을 README 등 문서로 함께 제출합니다.

## 기술 스택
- Framework: [Next.js 14](https://nextjs.org/)
- Language: [TypeScript](https://www.typescriptlang.org/)
- Styling: [Sass](https://sass-lang.com/) / [CSS Modules](https://github.com/css-modules/css-modules)
- UI Components: [Storybook](https://storybook.js.org/)
- Linting: [ESLint](https://eslint.org/)
- Formatting [Prettier](https://prettier.io/)
- Package Manager [Yarn](https://yarnpkg.com/)

## 시작하기

### 전제 조건

- [Node.js](https://nodejs.org/en/) (v20.x 이상 권장)
- [Yarn](https://yarnpkg.com/getting-started/install)

### 설치

1.  저장소를 `Code → Download ZIP`으로 프로젝트를 내려받거나, `Use this template` 기능을 통해 본인 저장소를 생성합니다.
    ```bash
    https://github.com/syntekamarketing/design-to-markup.git
    ```
2.  프로젝트 디렉토리로 이동합니다.
    ```bash
    cd design-to-markup
    ```
3.  의존성을 설치합니다.
    ```bash
    yarn install
    ```

### 사용 가능한 스크립트

-   `yarn storybook`: Storybook을 실행합니다. (http://localhost:6006)
-   `yarn storybook:build`: Storybook을 정적 파일로 빌드합니다.
-   `yarn dev`: 로컬에서 프로젝트를 실행합니다.
