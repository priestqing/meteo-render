import type { IMars3dPointBaseLayerLike, IMars3dPointLayer, IMars3dPointLayerOptions, IMars3dPointRuntime } from './types';
export declare const createPointLayer: (mars3d: IMars3dPointRuntime, options: IMars3dPointLayerOptions) => IMars3dPointLayer & IMars3dPointBaseLayerLike;
export declare const createMars3dPointLayer: typeof createPointLayer;
