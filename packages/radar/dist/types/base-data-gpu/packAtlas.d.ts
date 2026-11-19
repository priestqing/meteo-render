import type { IGpuRadarAtlas, IGpuRadarCut, IGpuRadarVolume } from './types';
export declare function packAtlas(gl: WebGL2RenderingContext, volume: IGpuRadarVolume, cuts: IGpuRadarCut[], type: number): IGpuRadarAtlas;
