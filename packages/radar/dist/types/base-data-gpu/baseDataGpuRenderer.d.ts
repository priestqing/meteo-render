import type { IGpuRadarRendererOptions, IGpuRadarMeshView } from './types';
import type { IGpuRadarColorStop, IGpuRadarOptions, IGpuRadarResult, IGpuRadarSelection, IGpuRadarVolume } from './types';
/** 自有 WebGL2 上下文：计算纹理直接绘制，整幅结果不回读 CPU。 */
export declare class BaseDataGpuRenderer {
    readonly canvas: HTMLCanvasElement;
    private volume;
    private readonly options;
    private readonly gl;
    private readonly programs;
    private readonly framebuffer;
    private geometry?;
    private geometryKey;
    private grid?;
    private atlas?;
    private atlasKey;
    private cache;
    private current?;
    private busy;
    private disposed;
    private mesh?;
    private meshBuffer?;
    private meshVao?;
    constructor(canvas: HTMLCanvasElement, volume: IGpuRadarVolume, options?: IGpuRadarRendererOptions);
    private target;
    private bind;
    private clearResults;
    private prepareGeometry;
    private prepareAtlas;
    compute(selection: IGpuRadarSelection, options: IGpuRadarOptions, radius: number, spacing: number): Promise<IGpuRadarResult>;
    private summarize;
    readPoint(row: number, col: number): {
        value: number;
        quality: number;
    };
    draw(view: {
        west: number;
        south: number;
        east: number;
        north: number;
    } | IGpuRadarMeshView, stops: IGpuRadarColorStop[], opacity: number): void;
    dispose(): void;
}
