import type * as L from 'leaflet';
import type { IRadarDataLayer, IRadarLayerOptions } from '@meteo-render/raster';
export type LeafletRadarRuntime = typeof L;
export interface ILeafletRadarLayerOptions extends IRadarLayerOptions {
    pane?: string;
}
export interface ILeafletRadarLayer extends IRadarDataLayer, L.Layer {
}
