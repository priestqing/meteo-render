import type { RasterPointFrameOptions } from '@meteo-render/raster';
import type { MapCrs, MapRenderViewport } from '@meteo-render/rendering';
import type { GridData } from '@meteo-render/rendering';
import type { IWindGrid } from '../wind-data';
import type { IWindPointFrame } from './types';
export declare const createWindPointFrame: (windGrid: IWindGrid, viewport: MapRenderViewport, crs: MapCrs, options?: RasterPointFrameOptions) => IWindPointFrame;
export declare const createWindPointFrameWithSpeedGrid: (windGrid: IWindGrid, speedGrid: GridData, viewport: MapRenderViewport, crs: MapCrs, options?: RasterPointFrameOptions) => IWindPointFrame;
