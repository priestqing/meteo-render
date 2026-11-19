import type { RadialData } from '@meteo-render/core';
import { PixelCanvas } from './canvas';
import type { IImageProjectedBounds, IImageRangeRingsOptions, IImageRect, ImageCrs } from './types';
export declare const radialMaximumGroundDistance: (data: RadialData) => number;
export declare const drawRangeRings: (canvas: PixelCanvas, data: RadialData, options: IImageRangeRingsOptions, crs: ImageCrs, bounds: IImageProjectedBounds, plotRect: IImageRect, globalOpacity: number) => void;
