import type { PointData, RadialData, RasterData } from '@meteo-render/core';
import type { GridData } from '@meteo-render/rendering';
import type { RadarBaseDataProduct, RadarProduct, RoseRadarProduct } from './radar/types';
export interface RadarBaseMomentSelectOptions {
    elevationNumber: number;
    dataType: number;
}
export interface ICappiLayerSelectOptions {
    layerIndex: number;
}
export interface ICappiLayerInfo {
    layerIndex: number;
    height: number;
    dataType: number;
}
export interface RadialGridAdapterOptions {
    size?: number;
    noData?: number;
}
/** 保留栅格、径向和风暴点的原生几何语义。 */
export declare const radarProductToDrawData: (product: RadarProduct, noData?: number) => RasterData | RadialData | PointData;
/** 按标准中由低到高的顺序返回 CAPPI 各等高面信息。 */
export declare const getCappiLayerInfo: (product: RoseRadarProduct) => ICappiLayerInfo[];
/** 选择一个 CAPPI 等高面并保持其标准径向几何。 */
export declare const radarCappiLayerToDrawData: (product: RoseRadarProduct, options: ICappiLayerSelectOptions, noData?: number) => RadialData;
/** 从雷达基数据中显式选择一个仰角和一个数据类型，保持原生径向几何。 */
export declare const radarBaseMomentToDrawData: (product: RadarBaseDataProduct, options: RadarBaseMomentSelectOptions, noData?: number) => RadialData;
/** Resample core radial geometry to a geographic grid for shared raster backends. */
export declare const radialDataToRasterGrid: (data: RadialData, options?: RadialGridAdapterOptions) => GridData;
