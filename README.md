# BAROGO Careers Prototype

## Run locally

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:3000`. Scroll from the seasonal hero to the HOW WE HIRE journey map.

## Main files

- `src/components/hero/SeasonalPhotoBackground.tsx`: four persistent aerial-photo layers and seasonal opacity state
- `src/components/hero/SeasonalAtmosphere.tsx`: subtle rain, falling leaves and snow Canvas layer
- `src/components/hero/DeliveryScooter.tsx`: fixed top-view scooter illustration
- `src/components/hero/DeliveryBoxLogo.tsx`: replaceable delivery-box wordmark
- `src/components/hero/HeroContent.tsx`: accessible overlay content
- `src/components/hero/heroConfig.ts`: season duration, transition, speed, scale and effect intensity
- `src/styles/hero.css`: responsive composition and CSS motion
- `src/components/how-we-hire/HowWeHire.tsx`: accessible five-stage recruitment journey interaction
- `src/components/how-we-hire/HowWeHire.module.css`: original map, intro, route and building animations
- `src/components/how-we-hire/data.ts`: stage, route and building coordinates for the 1716 × 917 map
- `src/index.css`: local Neutral Face/Pretendard fonts and shared BAROGO tokens

The four matching aerial photos remain mounted and crossfade using opacity only. The scooter stays independent from seasonal background changes, while a lightweight Canvas adds restrained weather effects.

Seasonal images live in `public/assets/seasonal/` as optimized WebP files.

The HOW WE HIRE map is stored at `public/how-we-hire/how-we-hire-top-view.png`. Selecting stages 01–05 progressively draws the route and highlights the matching building. No animation or UI package is required beyond React.
