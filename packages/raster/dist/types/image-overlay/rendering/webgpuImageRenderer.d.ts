import type { RasterSampleMode } from '../../raster-overlay/rasterTypes';
import type { IImageRect, IImageRenderer } from './renderer';
export declare class WebgpuImageRenderer implements IImageRenderer {
    private device;
    private context;
    private pipeline;
    private vertexBuffer;
    private opacityBuffer;
    private texture;
    private bindGroups;
    initialize(canvas: HTMLCanvasElement, source: CanvasImageSource): Promise<void>;
    render(rect: IImageRect, sampleMode: RasterSampleMode, opacity: number): void;
    setSource(source: CanvasImageSource): Promise<void>;
    destroy(): void;
}
