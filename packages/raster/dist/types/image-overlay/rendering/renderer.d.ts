import type { RasterSampleMode } from '../../raster-overlay/rasterTypes';
export interface IImageRect {
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface IImageRenderer {
    initialize(canvas: HTMLCanvasElement, source: CanvasImageSource): Promise<void>;
    render(rect: IImageRect, sampleMode: RasterSampleMode, opacity: number): void;
    setSource(source: CanvasImageSource): Promise<void>;
    destroy(): void;
}
