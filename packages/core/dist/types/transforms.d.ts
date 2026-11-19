import type { PointData, RadialData, RasterData, VectorGridData } from './types';
export interface IRadialRasterOptions {
    size?: number;
    noData?: number;
}
export interface IGridPointOptions {
    noData?: number;
    includeNoData?: boolean;
}
export declare const radialDataToRasterData: (data: RadialData, options?: IRadialRasterOptions) => RasterData;
export declare const rasterDataToPointData: (data: RasterData, options?: IGridPointOptions) => PointData;
export declare const vectorGridDataToPointData: (data: VectorGridData, options?: IGridPointOptions) => PointData;
