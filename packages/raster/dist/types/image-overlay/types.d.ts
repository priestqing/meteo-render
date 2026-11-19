import type { RasterRendererType, RasterSampleMode } from '../raster-overlay/rasterTypes';
export type ImageOverlaySource = string | Blob | CanvasImageSource;
export interface IImageLayerData {
    source: ImageOverlaySource;
    bounds: readonly [west: number, south: number, east: number, north: number];
}
export interface IImageLayerOptions {
    data: IImageLayerData;
    rendererType?: RasterRendererType;
    sampleMode?: RasterSampleMode;
    opacity?: number;
    crossOrigin?: '' | 'anonymous' | 'use-credentials';
    name?: string;
    show?: boolean;
}
export interface IImageLayerUpdate extends Partial<IImageLayerOptions> {
}
export interface IImageDataLayer {
    setData(data: IImageLayerData): void | Promise<void>;
    setSource(source: ImageOverlaySource): void | Promise<void>;
    setBounds(bounds: IImageLayerData['bounds']): void;
    setSampleMode(sampleMode: RasterSampleMode): void;
    setOpacity(opacity: number): void;
    update(options: IImageLayerUpdate): void | Promise<void>;
    redraw(): void;
    destroy(noDel?: boolean): void;
}
