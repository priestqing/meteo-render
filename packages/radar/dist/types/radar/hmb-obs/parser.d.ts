import type { RadarBufferSource } from '../types';
import type { IHmbObsProduct } from './types';
export declare const isHmbObs: (view: DataView) => boolean;
export declare const parseHmbObs: (source: RadarBufferSource, noData?: number) => IHmbObsProduct;
