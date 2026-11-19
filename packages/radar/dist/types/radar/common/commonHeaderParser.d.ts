import { RadarBinaryReader } from './binaryReader';
import type { RadarGenericHeader, RadarMetadata, RadarScan, RadarStation, RadarTask } from '../types';
export interface IParsedRadarHeader {
    metadata: RadarMetadata;
    productParametersOffset: number;
    dataOffset: number;
}
export interface RadarCommonConfiguration {
    generic: RadarGenericHeader;
    station: RadarStation;
    task: RadarTask;
    scans: RadarScan[];
}
export declare const parseCommonRadarHeader: (reader: RadarBinaryReader) => IParsedRadarHeader;
/** 部分厂商的 CRX 沿用基数据通用头；只在产品头明确匹配时进入产品解析。 */
export declare const hasMislabeledCrxHeader: (reader: RadarBinaryReader) => boolean;
export declare const parseRadarCommonConfiguration: (reader: RadarBinaryReader) => RadarCommonConfiguration;
