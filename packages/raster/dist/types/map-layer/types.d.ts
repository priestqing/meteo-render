import type { RasterData } from '@meteo-render/core';
import type { RasterClipOptions, RasterColorMode, RasterColorRange, RasterColorStopInput, RasterRendererType, RasterSampleMode } from '../raster-overlay/rasterTypes';
export type RasterLayerPlacement = 'ground' | 'absolute-height';
export interface IRasterLayerCreateOptions {
    data: RasterData;
    colorStops: RasterColorStopInput[];
    rendererType?: RasterRendererType;
    colorRange?: RasterColorRange;
    colorMode?: RasterColorMode;
    sampleMode?: RasterSampleMode;
    opacity?: number;
    clip?: RasterClipOptions;
    maxDimension?: number;
    placement?: RasterLayerPlacement;
    height?: number;
    name?: string;
    show?: boolean;
}
export interface IRasterLayerUpdate extends Partial<Omit<IRasterLayerCreateOptions, 'rendererType' | 'placement' | 'colorRange'>> {
    colorRange?: RasterColorRange | null;
}
export interface IRasterDataLayer {
    setData(data: RasterData): void | Promise<void>;
    update(options: IRasterLayerUpdate): void | Promise<void>;
    setColorStops(colorStops: RasterColorStopInput[]): void;
    setColorRange(colorRange: RasterColorRange | null): void;
    setColorMode(colorMode: RasterColorMode): void;
    setSampleMode(sampleMode: RasterSampleMode): void;
    setOpacity(opacity: number): void;
    redraw(): void;
    destroy(noDel?: boolean): void;
}
