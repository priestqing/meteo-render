import type * as L from 'leaflet';
import type { IImageDataLayer, IImageLayerOptions } from '@meteo-render/raster';
export type LeafletImageRuntime = typeof L;
export interface ILeafletImageLayerOptions extends IImageLayerOptions {
    pane?: string;
}
export interface ILeafletImageLayer extends IImageDataLayer, L.Layer {
    getCanvas(): HTMLCanvasElement | null;
}
