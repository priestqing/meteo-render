import type * as L from 'leaflet';
import type { IContourDataLayer, IContourLayerOptions } from '@meteo-render/raster/core';
export type LeafletContourRuntime = typeof L;
export interface ILeafletContourLayerOptions extends IContourLayerOptions {
    pane?: string;
}
export interface ILeafletContourLayer extends IContourDataLayer, L.FeatureGroup {
}
