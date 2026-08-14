export interface HiringStage {
  readonly number: string;
  readonly label: string;
  readonly badgeX: number;
  readonly badgeY: number;
}

export interface RouteSegment {
  readonly id: string;
  readonly path: string;
}

export type BuildingShape = string;
