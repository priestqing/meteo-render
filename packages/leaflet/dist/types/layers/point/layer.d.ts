import type * as L from 'leaflet';
import type { ILeafletPointLayer, ILeafletPointLayerOptions } from './types';
export type LeafletPointRuntime = typeof L;
export declare const createPointLayer: (_runtime: LeafletPointRuntime, options: ILeafletPointLayerOptions) => ILeafletPointLayer;
