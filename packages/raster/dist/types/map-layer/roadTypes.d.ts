import type { RasterData } from '@meteo-render/core';
import type { ClipMode, CoverageOptions } from '@meteo-render/rendering';
import type { PreparedRoadData } from '../road-overlay/roadData';
import type { RasterColorMode, RasterColorRange, RasterColorStopInput, RasterSampleMode } from '../raster-overlay/rasterTypes';
import type { RoadQueryCallback, RoadRendererType } from '../road-overlay/types';
export interface IRoadLayerOptions {
    data: PreparedRoadData;
    rasterData: RasterData;
    rendererType?: RoadRendererType;
    colorStops: RasterColorStopInput[];
    colorRange?: RasterColorRange;
    colorMode?: RasterColorMode;
    sampleMode?: RasterSampleMode;
    lineWidth?: number;
    opacity?: number;
    clip?: CoverageOptions;
    height?: number;
    name?: string;
    show?: boolean;
    onHover?: RoadQueryCallback;
    onClick?: RoadQueryCallback;
}
export interface IRoadLayerUpdate extends Partial<Omit<IRoadLayerOptions, 'rendererType'>> {
}
export interface IRoadDataLayer {
    setData(data: PreparedRoadData): void | Promise<void>;
    setRasterData(data: RasterData): void | Promise<void>;
    update(options: IRoadLayerUpdate): void | Promise<void>;
    setOpacity(opacity: number): void;
    setLineWidth(lineWidth: number): void;
    setColorMode(colorMode: RasterColorMode): void;
    setSampleMode(sampleMode: RasterSampleMode): void;
    setClipMode(mode: ClipMode): void;
    redraw(): void;
    destroy(noDel?: boolean): void;
}
