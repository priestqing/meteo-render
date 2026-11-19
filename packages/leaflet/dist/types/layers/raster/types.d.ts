import type * as L from 'leaflet';
import type { IRasterDataLayer, IRasterLayerCreateOptions } from '@meteo-render/raster';
export type LeafletRasterRuntime = typeof L;
export interface ILeafletRasterLayerOptions extends IRasterLayerCreateOptions {
    pane?: string;
}
export interface ILeafletRasterLayer extends IRasterDataLayer, L.Layer {
    getCanvas(): HTMLCanvasElement | null;
}
