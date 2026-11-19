import type * as L from 'leaflet';
import type { IRadialDataLayer, IRadialLayerCreateOptions } from '@meteo-render/raster';
export type LeafletRadialRuntime = typeof L;
export interface ILeafletRadialLayerOptions extends IRadialLayerCreateOptions {
    pane?: string;
}
export interface ILeafletRadialLayer extends IRadialDataLayer, L.Layer {
    getCanvas(): HTMLCanvasElement | null;
}
