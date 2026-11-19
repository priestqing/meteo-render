import { type RadialData } from '@meteo-render/core';
import { type GridData } from '@meteo-render/rendering';
import { type IPreparedBoundary } from './boundary';
import { PixelCanvas } from './canvas';
import type { IImageProjectedBounds, IImageRect, IRadialImageOptions, IRenderedImage, IRasterImageOptions } from './types';
export interface IRenderContext {
    canvas: PixelCanvas;
    bounds: IImageProjectedBounds;
    plotRect: IImageRect;
    boundary?: IPreparedBoundary;
    map?: IPreparedBoundary;
    opacity: number;
}
export declare const renderRasterImage: (grid: GridData, options: IRasterImageOptions) => Promise<IRenderedImage>;
export declare const renderRadialImage: (data: RadialData, options: IRadialImageOptions) => Promise<IRenderedImage>;
export declare const renderRadialCanvas: (data: RadialData, options: IRadialImageOptions) => IRenderContext;
