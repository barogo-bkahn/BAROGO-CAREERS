# BAROGO Careers Prototype

## Run locally

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:3000`. Scroll from the seasonal hero to the HOW WE HIRE journey map.

## Main files

- `src/components/hero/HeroVideoBackground.tsx`: double-buffered hard-cut MP4 sequence
- `src/components/hero/heroVideos.ts`: numerically ordered Hero video manifest
- `src/components/hero/HeroContent.tsx`: accessible overlay content
- `src/components/hero/heroConfig.ts`: season duration, transition, speed, scale and effect intensity
- `src/styles/hero.css`: responsive composition and CSS motion
- `src/components/how-we-hire/HowWeHire.tsx`: accessible five-stage recruitment journey interaction
- `src/components/how-we-hire/HowWeHire.module.css`: original map, intro, route and building animations
- `src/components/how-we-hire/data.ts`: stage, route and building coordinates for the 1716 × 917 map
- `src/index.css`: local Neutral Face/Pretendard fonts and shared BAROGO tokens

Hero videos live in `public/videos/hero/` and play in numeric filename order without a fade transition.

## UI guidelines

- BAROGO의 기본 포인트 컬러는 `#FA5014`이며 `--color-primary` 토큰을 사용합니다.
- 아이브로우는 장식용 주황색 가로선을 기본 요소로 사용하지 않습니다.
- 새 섹션의 제목은 별도 서체 체계를 만들지 않고 메인 Hero 타이포그래피를 우선 재사용합니다.
- INTERVIEW 인물 사진은 UI와 겹치지 않는 안전 영역을 포함한 인터뷰용 구도로 제작하며, 레퍼런스 원본을 단순 확대하지 않습니다.

The HOW WE HIRE map is stored at `public/how-we-hire/how-we-hire-top-view.png`. Selecting stages 01–05 progressively draws the route and highlights the matching building. No animation or UI package is required beyond React.
