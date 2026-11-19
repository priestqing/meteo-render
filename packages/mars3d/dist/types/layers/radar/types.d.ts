import type { IRadarDataLayer, IRadarLayerOptions } from '@meteo-render/raster/core';
import type { IMars3dPointRuntime } from '../point/types';
import type { IMars3dRasterRuntime } from '../raster/types';
export interface IMars3dRadarLayerOptions extends IRadarLayerOptions {
}
export interface IMars3dRadarLayer extends IRadarDataLayer {
}
export type Mars3dRadarRuntime = IMars3dPointRuntime & IMars3dRasterRuntime;
