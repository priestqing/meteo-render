import * as L from 'leaflet';
import { RasterColorMode, RasterSampleMode } from '../raster-overlay';
import type { RasterColorRange, RasterColorStop, RasterGrid } from '../raster-overlay';
import type { RoadLayerCreateOptions } from './types';
import type { RoadLeafletRenderer } from './leaflet-renderers/renderer';
import type { PreparedRoadData } from './roadData';
import type { ClipMode, CoverageOptions } from '@meteo-render/rendering';
interface RoadLeafletLayerOptions extends L.LayerOptions {
    renderer: RoadLeafletRenderer;
    roadData: PreparedRoadData;
    grid: RasterGrid;
    colorStops: RasterColorStop[];
    colorRange?: RasterColorRange;
    lineWidth: number;
    opacity: number;
    colorMode: RasterColorMode;
    sampleMode: RasterSampleMode;
    clip?: CoverageOptions;
}
/**
 * Road Leaflet layer.
 * 道路 Leaflet 图层
 */
export interface RoadLeafletLayer extends L.Layer {
    /**
     * Redraw road layer.
     * 重绘道路图层
     */
    redraw: () => void;
    setRoadData: (data: PreparedRoadData) => void;
    setGrid: (grid: RasterGrid) => void;
    setColorStops: (colorStops: RasterColorStop[]) => void;
    setColorRange: (colorRange: RasterColorRange | null) => void;
    setClip: (clip: CoverageOptions) => void;
    clearClip: () => void;
    setOpacity: (opacity: number) => void;
    setLineWidth: (lineWidth: number) => void;
    setColorMode: (colorMode: RasterColorMode) => void;
    setSampleMode: (sampleMode: RasterSampleMode) => void;
    setClipMode: (mode: ClipMode) => void;
}
/**
 * Create road Leaflet layer.
 * 创建道路 Leaflet 图层
 * @param options
 */
export declare const createRoadLeafletLayer: (options: RoadLayerCreateOptions) => Promise<RoadLeafletLayer>;
export interface IPreparedRoadLeafletLayerOptions extends Omit<RoadLeafletLayerOptions, 'renderer'> {
    rendererType: RoadLayerCreateOptions['rendererType'];
}
export declare const createPreparedRoadLeafletLayer: (options: IPreparedRoadLeafletLayerOptions) => RoadLeafletLayer;
export {};
