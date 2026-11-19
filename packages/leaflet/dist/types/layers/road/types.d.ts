import type * as L from 'leaflet';
import type { IRoadDataLayer, IRoadLayerOptions } from '@meteo-render/raster';
export type LeafletRoadRuntime = typeof L;
export interface ILeafletRoadLayerOptions extends IRoadLayerOptions {
    pane?: string;
}
export interface ILeafletRoadLayer extends IRoadDataLayer, L.Layer {
}
