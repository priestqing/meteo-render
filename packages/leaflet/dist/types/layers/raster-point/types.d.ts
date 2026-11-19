import type * as L from 'leaflet';
import type { IRasterPointDataLayer, IRasterPointLayerCreateOptions } from '@meteo-render/raster';
export type LeafletRasterPointRuntime = typeof L;
export interface ILeafletRasterPointLayerOptions extends IRasterPointLayerCreateOptions {
    pane?: string;
}
export interface ILeafletRasterPointLayer extends IRasterPointDataLayer, L.Layer {
    getCanvas(): HTMLCanvasElement | null;
}
