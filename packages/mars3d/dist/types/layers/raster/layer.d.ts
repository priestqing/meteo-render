import type { IMars3dRasterBaseLayerLike, IMars3dRasterLayer, IMars3dRasterLayerOptions, IMars3dRasterRuntime } from './types';
export declare const createRasterLayer: (mars3d: IMars3dRasterRuntime, options: IMars3dRasterLayerOptions) => IMars3dRasterLayer & IMars3dRasterBaseLayerLike;
export declare const createMars3dRasterLayer: typeof createRasterLayer;
