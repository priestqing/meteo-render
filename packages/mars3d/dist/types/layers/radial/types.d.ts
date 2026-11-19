import type { IRadialDataLayer, IRadialLayerCreateOptions } from '@meteo-render/raster/core';
import type { IMars3dRasterBaseLayerLike, IMars3dRasterRuntime } from '../raster/types';
export interface IMars3dRadialLayerOptions extends IRadialLayerCreateOptions {
}
export interface IMars3dRadialLayer extends IRadialDataLayer, IMars3dRasterBaseLayerLike {
}
export type Mars3dRadialRuntime = IMars3dRasterRuntime;
