import type { RadarBinaryReader } from '../common/binaryReader';
import type { RadarBaseDataProduct } from '../types';
export declare const parseRadarBaseData: (reader: RadarBinaryReader, noData: number) => RadarBaseDataProduct;
