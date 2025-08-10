# 아이오트러스트 과제 - 배지훈

## 기술 스택

### Vite + React
- SSR이나 SEO 같은 세부 기능이 요구되지 않아, 간단하고 빠르게 개발할 수 있는 Vite와 React 조합을 선택했습니다.

### Tailwind CSS
- 빠르게 퍼블리싱하고 반복적인 스타일링 작업을 줄이기 위해 Tailwind CSS를 사용했습니다.

### TanStack Query
- 낙관적 업데이트가 필요한 부분에서 사용자 경험을 개선할 수 있었고, 동시에 데이터 패칭과 캐싱 관리가 편리해 사용했습니다.

## 프로젝트 실행 및 빌드 방법

### 환경별 설정

- `.env.dev` - 개발 환경
- `.env.stage` - 스테이징 환경
- `.env.prod` - 프로덕션 환경

아래 예시는 npm을 사용했지만, 다른 패키지 매니저(pnpm, yarn 등)를 사용해도 무방합니다.

### 개발 환경

**개발 서버 실행**
```bash
npm run dev
```

**빌드**
```bash
npm run build:dev
```

### 스테이징 환경

**개발 서버 실행**
```bash
npm run dev:stage
```

**빌드**
```bash
npm run build:stage
```

### 프로덕션 환경

**개발 서버 실행**
```bash
npm run dev:prod
```

**빌드**
```bash
npm run build:prod
```

### 기타 명령어

**린트 검사**
```bash
npm run lint
```

**빌드 결과 미리보기**
```bash
npm run preview
```

## 주요 구현 기능

### 아키텍처 설계

FSD(Feature-Sliced Design) 아키텍처를 참고하여 코드의 모듈성과 재사용성을 높였습니다. 화면의 각 요소를 위젯으로 간주하고, 관련된 모든 코드(API, UI, 유틸리티)를 해당 위젯 폴더 내에 배치하여 응집도를 높였습니다.

**예시: dapp-list 위젯**
```
dapp-list/
├── index.tsx          # 메인 컴포넌트
├── apis/              # API 관련 코드
│   └── dapp-list/
│       ├── api.ts     # API 함수
│       └── schema.ts  # 타입 정의
├── uis/               # UI 컴포넌트
│   └── detail-bottom-sheet/
└── utils/             # 유틸리티 함수
    └── filter-dapp-list.ts
```

### 1. 다국어 지원 (i18n)

`react-i18next`를 사용하여 한국어와 영어 다국어 지원을 구현했습니다.

- 브라우저 언어를 감지하여 기본 언어를 설정합니다.
- 우측 상단의 토글 버튼으로 언어를 쉽게 전환할 수 있습니다.
- 모든 텍스트와 DApp 설명이 선택된 언어에 따라 동적으로 변경됩니다.

### 2. 환경별 조건부 렌더링

DApp 데이터에 `visibility` 옵션을 추가하여 다양한 조건에 따라 동적으로 노출을 제어합니다.

- **플랫폼별**: `android`, `ios`, `web` 환경에 따라 표시 여부를 결정합니다.
- **언어별**: `ko`, `en` 설정에 따라 특정 언어 사용자에게만 노출합니다.
- **환경별**: `dev`, `stage`, `prod` 빌드 환경에 따라 다른 데이터를 보여줄 수 있습니다.

```json
"visibility": {
  "platform": { "android": true },
  "language": { "en": true },
  "environment": { "dev": true, "stage": true }
}
```

### 3. 상태 관리 (Jotai)

전역 상태 관리를 위해 원자(atom) 기반의 Jotai를 사용했습니다.

- `currentDeviceAtom`: 현재 디바이스 타입(`android`/`ios`/`web`)을 관리합니다.
- `currentLanguageAtom`: 현재 언어 설정(`ko`/`en`)을 관리합니다.
- 각 컴포넌트가 필요한 atom만 구독하여 불필요한 리렌더링을 최소화하고 성능을 최적화했습니다.

### 4. 데이터 페칭 및 캐싱 (TanStack Query)

API 요청 및 데이터 캐싱을 위해 TanStack Query를 도입했습니다.

- API 호출 시 `dev` 환경에서는 Mock 데이터를 반환하도록 설정하여 프론트엔드와 백엔드 개발을 분리했습니다.
- 서버 상태를 효율적으로 관리하고, 캐싱을 통해 불필요한 API 호출을 줄였습니다.

### 5. UI 컴포넌트

재사용 가능한 공통 UI 컴포넌트를 구현하여 개발 효율성을 높였습니다.

- **Modal**: 범용적으로 사용 가능한 기본 모달 컴포넌트입니다.
- **BottomSheet**: Framer Motion을 활용하여 부드러운 애니메이션을 적용한 모바일 친화적인 하단 시트입니다.
- **Button**: `variant`, `color`, `size` 등 다양한 옵션을 통해 커스터마이징 가능한 버튼입니다.

### 6. 배너 슬라이더 (Swiper)

Swiper.js를 사용하여 자동 재생되는 배너 슬라이더를 구현했습니다.

- 자동 슬라이드 및 무한 루프 기능을 지원합니다.
- 배너 클릭 시 언어 설정에 맞는 외부 링크를 새 창으로 엽니다.

### 7. 즐겨찾기 기능

사용자가 DApp을 즐겨찾기에 추가하고 관리할 수 있는 기능을 구현했습니다.

- 즐겨찾기 목록을 별도로 표시합니다.
- 삭제 시 확인 모달을 통해 사용자 실수를 방지합니다.
- TanStack Query의 **낙관적 업데이트(Optimistic Update)**를 적용하여, 서버 응답을 기다리지 않고 UI에 즉시 변경 사항을 반영함으로써 사용자 경험을 향상시켰습니다.

### 8. DApp 상세 정보

각 DApp을 클릭하면 하단 시트(BottomSheet)를 통해 상세 정보를 표시합니다.

- 지원하는 네트워크 정보를 아이콘과 함께 보여줍니다.
- 현재 설정된 언어에 맞는 DApp 설명을 제공합니다.
- Framer Motion을 활용하여 부드러운 애니메이션 효과를 적용했습니다.
