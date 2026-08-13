import type { SatelliteBufferSource } from '../common/binaryReader';
import type { HimawariParseOptions, HimawariSegmentMergeOptions, HimawariStandardMosaicProduct, HimawariStandardProduct } from './types';
export declare const parseHimawariStandardDataSegments: (sources: readonly SatelliteBufferSource[], options?: HimawariParseOptions, mergeOptions?: HimawariSegmentMergeOptions) => HimawariStandardMosaicProduct;
export declare const mergeHimawariStandardDataSegments: (products: readonly HimawariStandardProduct[], options?: HimawariSegmentMergeOptions) => HimawariStandardMosaicProduct;
