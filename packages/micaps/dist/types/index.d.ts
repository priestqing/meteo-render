import { type RasterData } from '@meteo-render/core';
import type { RasterLoadOptions, RasterParams } from './legacy/rasterTypes';
export interface Micaps4ParseOptions extends RasterLoadOptions {
    noData?: number;
    crs?: string;
}
export declare const parseMicaps4Text: (text: string, options?: Micaps4ParseOptions) => RasterData;
export declare const createMicaps4RasterData: (params: RasterParams, options?: Micaps4ParseOptions) => RasterData;
export declare const loadMicaps4: (url: string, options?: Micaps4ParseOptions) => Promise<RasterData>;
export type { RasterParams as Micaps4Params };
