import * as L from 'leaflet';
import type { RadarProduct } from '@meteo-render/radar';
export interface RadarCoverageLeafletLayerCreateOptions {
    product: RadarProduct;
    coverageStyle?: L.PathOptions;
    spokeStyle?: L.PathOptions;
    centerStyle?: L.CircleMarkerOptions;
    ringFractions?: readonly number[];
}
export declare const createRadarCoverageLeafletLayer: (options: RadarCoverageLeafletLayerCreateOptions) => L.FeatureGroup | undefined;
