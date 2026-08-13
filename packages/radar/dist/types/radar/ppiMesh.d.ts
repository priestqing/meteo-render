import type { GridData } from '@meteo-render/rendering';
import type { RadarRadialProduct } from './types';
export declare const PPI_VERTEX_FLOAT_COUNT = 4;
export interface PpiMesh {
    vertices: Float32Array<ArrayBuffer>;
    vertexCount: number;
    cellCount: number;
    valueGrid: GridData;
}
/** 将每个有效 PPI 距离库构造成独立扇形四边形，并拆分成两个三角形。 */
export declare const createPpiMesh: (product: RadarRadialProduct) => PpiMesh;
