import { PixelCanvas } from './canvas';
import type { IImageAxisOptions, IImageProjectedBounds, IImageRect, ImageCrs } from './types';
export interface IImageMargins {
    left: number;
    right: number;
    top: number;
    bottom: number;
}
export declare const resolveAxisMargins: (axis?: IImageAxisOptions) => IImageMargins;
export declare const drawAxis: (canvas: PixelCanvas, axis: IImageAxisOptions, crs: ImageCrs, bounds: IImageProjectedBounds, plotRect: IImageRect, globalOpacity: number) => void;
