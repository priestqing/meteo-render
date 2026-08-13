import type { IVolumeScene, IVolumeSceneOptions } from '@meteo-render/volume';
/** 创建只在 Mars3D Canvas 上启用高度壳裁剪的体积场景。 */
export declare const createMars3dVolumeScene: (options: IVolumeSceneOptions) => Promise<IVolumeScene>;
