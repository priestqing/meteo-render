import type * as L from 'leaflet';
import type { IPointDataLayer, IPointLayerCreateOptions } from './types';
export interface IPointLeafletLayerCreateOptions extends IPointLayerCreateOptions, L.LayerOptions {
}
export interface IPointLeafletLayer extends IPointDataLayer, L.Layer {
    getCanvas: () => HTMLCanvasElement | null;
}
