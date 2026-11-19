import type { IRasterPointDataLayer, IRasterPointLayerCreateOptions } from '@meteo-render/raster/core';
import type { IMars3dPointBaseLayerLike, IMars3dPointRuntime } from '../point/types';
export interface IMars3dRasterPointLayerOptions extends IRasterPointLayerCreateOptions {
    height?: number;
    name?: string;
    show?: boolean;
}
export interface IMars3dRasterPointLayer extends IRasterPointDataLayer, IMars3dPointBaseLayerLike {
}
export type Mars3dRasterPointRuntime = IMars3dPointRuntime;
