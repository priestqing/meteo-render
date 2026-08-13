import type { GridData } from '@meteo-render/rendering';
import type { IRadarProjectedGrid, RadarGridHeader, RadarMetadata } from '../../types';
export interface IRadarGridProjectionResult {
    projectedGrid: IRadarProjectedGrid;
    grid: GridData;
}
/** 将雷达投影平面适配为现有经纬度规则栅格。 */
export declare const createRadarGridProjection: (metadata: RadarMetadata, header: RadarGridHeader, values: Float32Array, noData: number) => IRadarGridProjectionResult;
/** 保留 CR 解析器的现有调用名称。 */
export declare const createCrGridProjection: typeof createRadarGridProjection;
