import type { RadarBinaryReader } from '../../common/binaryReader';
import type { IRadarProductParseContext } from '../../common/parserTypes';
import type { OhpAdaptationData, PrecipitationRadarParameters, RadarRadialProductBase } from '../../types';
export declare const parsePrecipitationParameters: (reader: RadarBinaryReader, context: IRadarProductParseContext, includeHours?: boolean) => {
    baseProduct: number;
    cappiHeight: number;
    cappiFill: boolean;
    rainGageAdjustment: boolean;
    hours: number | undefined;
};
export declare const parsePrecipitationRadials: (reader: RadarBinaryReader, context: IRadarProductParseContext, productName: string) => Pick<RadarRadialProductBase, 'header' | 'radials'>;
export declare const parseOhpAdaptation: (reader: RadarBinaryReader) => OhpAdaptationData;
export declare const toPrecipitationParameters: (value: ReturnType<typeof parsePrecipitationParameters>) => PrecipitationRadarParameters;
