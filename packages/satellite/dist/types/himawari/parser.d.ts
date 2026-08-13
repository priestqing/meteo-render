import { type SatelliteBufferSource } from '../common/binaryReader';
import type { HimawariParseOptions, HimawariStandardProduct } from './types';
export declare const parseHimawariStandardData: (source: SatelliteBufferSource, options?: HimawariParseOptions) => HimawariStandardProduct;
