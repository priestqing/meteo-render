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
export declare const parseRadarCommonConfiguration: (reader: RadarBinaryReader) => RadarCommonConfiguration;
