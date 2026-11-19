import type { RasterData } from '@meteo-render/core';
import type { IContourData, IContourOptions } from './types';
export declare const normalizeContourLevels: (levels: readonly number[]) => number[];
/** 两端地图共用同一份等值线，既不封闭缺测洞口，也不沿数据外框补线。 */
export declare const createContourData: (source: RasterData, options: IContourOptions) => IContourData;
