import { SEASON_ASSETS, SEASON_LABELS, SEASONS, type Season } from './heroConfig'

type Props = {
  activeSeason: Season
}

export default function SeasonalPhotoBackground({ activeSeason }: Props) {
  return (
    <div className="seasonal-photo-background" aria-hidden="true">
      {SEASONS.map((season, index) => (
        <img
          key={season}
          className={`seasonal-photo${activeSeason === season ? ' is-active' : ''}`}
          src={SEASON_ASSETS[season]}
          alt=""
          width="1672"
          height="941"
          loading="eager"
          decoding="async"
          fetchPriority={index === 0 ? 'high' : 'auto'}
          data-season-layer={season}
          data-season-label={SEASON_LABELS[season]}
        />
      ))}
    </div>
  )
}
