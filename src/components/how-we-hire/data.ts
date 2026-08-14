import type { BuildingShape, HiringStage, RouteSegment } from './types'

/** Coordinates are authored against the 1716 × 917 SVG/background viewBox. */
export const hiringStages = [
  { number: '01', label: '서류 접수', badgeX: 334, badgeY: 576 },
  { number: '02', label: '서류 검토', badgeX: 612, badgeY: 202 },
  { number: '03', label: '1차 인터뷰', badgeX: 1112, badgeY: 642 },
  { number: '04', label: '2차 인터뷰', badgeX: 1195, badgeY: 414 },
  { number: '05', label: '입사', badgeX: 1216, badgeY: 92 },
] as const satisfies readonly HiringStage[]

export const routeNetworkStages = [
  { id: 'route01to02', path: 'M500 540 L440 480 L760 480 L760 360' },
  { id: 'route02to03', path: 'M760 480 L1040 480 L1040 550' },
  { id: 'route03to04', path: 'M1040 480 L1180 480 L1180 370' },
  { id: 'route04to05', path: 'M1180 480 L1510 480 L1400 370 L1400 255' },
] as const satisfies readonly RouteSegment[]

export const buildingShapes = [
  '470,507 502,490 529,519 507,559 475,542 458,522',
  '682,280 726,235 782,260 825,315 825,356 775,383 713,359 674,325',
  '983,531 1108,516 1150,549 1154,603 1106,626 996,638 970,608',
  '1034,238 1137,174 1170,174 1213,218 1284,244 1287,400 1203,412 1178,353 1153,376 1120,375 1083,354 1035,320',
  '1381,112 1464,123 1504,151 1500,185 1467,240 1404,268 1348,230 1356,188',
] as const satisfies readonly BuildingShape[]
