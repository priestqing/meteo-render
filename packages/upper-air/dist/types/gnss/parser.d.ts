import type { UpperAirBufferSource, UpperAirTextSource } from '../common';
import type { GnssPwvProduct, GnssStatusProduct, RinexArchiveProduct } from './types';
export declare const parseGnssPwv: (source: UpperAirTextSource) => GnssPwvProduct;
export declare const parseGnssStatus: (source: UpperAirTextSource) => GnssStatusProduct;
export declare const parseRinexArchive: (source: UpperAirBufferSource) => RinexArchiveProduct;
