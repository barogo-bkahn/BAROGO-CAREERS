# BAROGO Careers Prototype

## Run locally

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:3000` and scroll through the full-page careers experience.

## Main files

- `src/components/hero/HeroVideoBackground.tsx`: double-buffered hard-cut MP4 sequence
- `src/components/hero/heroVideos.ts`: numerically ordered Hero video manifest
- `src/components/hero/HeroContent.tsx`: accessible overlay content
- `src/styles/hero.css`: responsive composition and CSS motion
- `src/components/baro-way/`: BARO WAY rolling principles section
- `src/components/interview/`: interactive employee interview section
- `src/components/benefit/`: Benefit portrait wall and KPI card carousel
- `src/components/ask-barogo/`: interactive recruitment chat prototype
- `src/index.css`: local Neutral Face/Pretendard fonts and shared BAROGO tokens

Hero videos live in `public/videos/hero/` and play in numeric filename order without a fade transition.

## UI guidelines

- BAROGO의 기본 포인트 컬러는 `#FA5014`이며 `--color-primary` 토큰을 사용합니다.
- 아이브로우는 장식용 주황색 가로선을 기본 요소로 사용하지 않습니다.
- 새 섹션의 제목은 별도 서체 체계를 만들지 않고 메인 Hero 타이포그래피를 우선 재사용합니다.
- INTERVIEW 인물 사진은 UI와 겹치지 않는 안전 영역을 포함한 인터뷰용 구도로 제작하며, 레퍼런스 원본을 단순 확대하지 않습니다.
