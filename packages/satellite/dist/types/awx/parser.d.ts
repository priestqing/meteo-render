import { type SatelliteBufferSource } from '../common/binaryReader';
import type { AwxImageProduct, AwxParseOptions, AwxProduct, IAwxGridFieldProduct } from './types';
export declare const parseAwx: (source: SatelliteBufferSource, options?: AwxParseOptions) => AwxProduct;
export declare const parseAwxImage: (source: SatelliteBufferSource, options?: AwxParseOptions) => AwxImageProduct;
export declare const parseAwxGridField: (source: SatelliteBufferSource, options?: AwxParseOptions) => IAwxGridFieldProduct;
