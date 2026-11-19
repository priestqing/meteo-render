import type * as L from 'leaflet';
import type { IRadarCoverageDataLayer, IRadarCoverageLayerOptions } from '@meteo-render/rendering';
export type LeafletRadarCoverageRuntime = typeof L;
export interface ILeafletRadarCoverageLayerOptions extends IRadarCoverageLayerOptions {
    pane?: string;
}
export interface ILeafletRadarCoverageLayer extends IRadarCoverageDataLayer, L.FeatureGroup {
}
