import type { RadarProduct } from './types';
export interface RadarCoverage {
    latitude: number;
    longitude: number;
    maximumRange: number;
}
export declare const getRadarCoverage: (product: RadarProduct) => RadarCoverage | undefined;
