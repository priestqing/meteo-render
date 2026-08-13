import type { RadarBinaryReader } from '../../common/binaryReader';
import type { IRadarProductParseContext } from '../../common/parserTypes';
export declare const parseGridProductBlock: (reader: RadarBinaryReader, context: IRadarProductParseContext, productName: string) => {
    header: import("../..").RadarGridHeader;
    encodedValues: import("../..").RadarEncodedValues;
    values: Float32Array;
    projectedGrid: import("../..").IRadarProjectedGrid;
    grid: import("@meteo-render/rendering").GridData;
};
