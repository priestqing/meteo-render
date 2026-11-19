import type { IGpuRadarTexture } from './types';
export declare function createProgram(gl: WebGL2RenderingContext, fragment: string, vertex?: string): WebGLProgram;
export declare function createTexture(gl: WebGL2RenderingContext, width: number, height: number, channels: 1 | 2 | 4, data?: Float32Array): IGpuRadarTexture;
export declare function waitForGpu(gl: WebGL2RenderingContext): Promise<void>;
