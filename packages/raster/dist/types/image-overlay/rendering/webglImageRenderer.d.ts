import type { RasterSampleMode } from '../../raster-overlay/rasterTypes';
import type { IImageRect, IImageRenderer } from './renderer';
export declare class WebglImageRenderer implements IImageRenderer {
    private gl;
    private program;
    private buffer;
    private texture;
    initialize(canvas: HTMLCanvasElement, source: CanvasImageSource): Promise<void>;
    render(rect: IImageRect, sampleMode: RasterSampleMode, opacity: number): void;
    setSource(source: CanvasImageSource): Promise<void>;
    destroy(): void;
}
