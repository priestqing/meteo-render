import type { PointData, RadialData, RasterData } from '@meteo-render/core';
import type { IPointLayerCreateOptions } from '../point-overlay/types';
import type { IRadialLayerCreateOptions } from './radialTypes';
import type { IRasterLayerCreateOptions, IRasterLayerUpdate } from './types';
export type RadarDrawData = RasterData | RadialData | PointData;
export interface IRadarLayerOptions extends Omit<IRasterLayerCreateOptions, 'data' | 'colorStops'> {
    data: RadarDrawData;
    colorStops?: IRasterLayerCreateOptions['colorStops'];
    rasterSize?: number;
    point?: Omit<IPointLayerCreateOptions, 'data'>;
}
export interface IRadarLayerUpdate extends Omit<IRasterLayerUpdate, 'data'> {
    data?: RadarDrawData;
    rasterSize?: number;
    point?: Omit<IPointLayerCreateOptions, 'data'>;
}
export interface IRadarDataLayer {
    readonly dataKind: RadarDrawData['kind'];
    setData(data: RadarDrawData): void | Promise<void>;
    update(options: IRadarLayerUpdate): void | Promise<void>;
    redraw(): void;
    destroy(noDel?: boolean): void;
}
export type RadarRasterLayerOptions = IRasterLayerCreateOptions;
export type RadarRadialLayerOptions = IRadialLayerCreateOptions;
