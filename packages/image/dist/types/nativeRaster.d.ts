import type { RasterData } from '@meteo-render/core';
import { PixelCanvas } from './canvas';
import type { IImageProjectedBounds, IRenderedImage, INativeRasterImageOptions } from './types';
/** 按数据自身坐标线性出图，适合距离—高度和时间—高度等非地图栅格。 */
export declare const renderNativeRasterImage: (data: RasterData, options: INativeRasterImageOptions) => Promise<IRenderedImage>;
export declare const renderNativeRasterCanvas: (data: RasterData, options: INativeRasterImageOptions) => {
    canvas: PixelCanvas;
    bounds: IImageProjectedBounds;
};
