import type { IGpuRadarGrid, IGpuRadarMesh } from '@meteo-render/radar';
interface IProjectedPoint {
    x: number;
    y: number;
}
/** 用地图自己的投影细分纹理网格；像素误差只在缩放或范围改变时重新评估。 */
export declare function createRadarProjectionMesh(grid: IGpuRadarGrid, project: (latitude: number, longitude: number) => IProjectedPoint, tolerance?: number): IGpuRadarMesh;
export {};
