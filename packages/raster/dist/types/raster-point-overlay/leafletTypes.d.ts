import type * as L from 'leaflet';
import type { ClipMode, ColorRange, ColorStopInput, CoverageOptions, GridData } from '@meteo-render/rendering';
import type { RasterParams, RasterSource } from '../raster-overlay/rasterTypes';
import type { RasterPointCallback, RasterPointFeature, RasterPointFilterOptions, RasterPointInteractionOptions, RasterPointLabelOptions, RasterPointLodOptions, RasterPointStyleOptions } from './types';
export interface RasterPointLeafletLayerCreateOptions extends L.LayerOptions {
    grid: GridData;
    colorStops?: ColorStopInput[];
    colorRange?: ColorRange;
    opacity?: number;
    lod?: RasterPointLodOptions;
    style?: RasterPointStyleOptions;
    label?: RasterPointLabelOptions;
    interaction?: RasterPointInteractionOptions;
    clip?: CoverageOptions;
    filter?: RasterPointFilterOptions;
    onHover?: RasterPointCallback;
    onClick?: RasterPointCallback;
}
export interface RasterPointEvent extends L.LeafletEvent {
    point: RasterPointFeature;
    latlng: L.LatLng;
    originalEvent: MouseEvent;
}
export interface RasterPointLeafletLayer extends L.Layer {
    setParams: (params: RasterParams) => Promise<void>;
    setSource: (source: RasterSource) => Promise<void>;
    setGrid: (grid: GridData) => Promise<void>;
    redraw: () => void;
    getCanvas: () => HTMLCanvasElement | null;
    setColorStops: (colorStops: ColorStopInput[]) => void;
    setColorRange: (range: ColorRange | null) => void;
    setOpacity: (opacity: number) => void;
    setClip: (clip: CoverageOptions) => void;
    setClipMode: (mode: ClipMode) => void;
    clearClip: () => void;
    setLod: (lod: RasterPointLodOptions) => void;
    setPointStyle: (style: RasterPointStyleOptions) => void;
    setLabelOptions: (label: RasterPointLabelOptions) => void;
    setInteractionOptions: (interaction: RasterPointInteractionOptions) => void;
    setFilterOptions: (filter: RasterPointFilterOptions) => void;
    clearSelection: () => void;
}
