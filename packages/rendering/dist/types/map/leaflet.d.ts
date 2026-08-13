import type { MapCrs } from './types';
export interface LeafletCrsLike {
    code?: string;
}
/** Resolve CRS by its public code without importing Leaflet at runtime. */
export declare const resolveLeafletCrs: (crs: LeafletCrsLike) => MapCrs | null;
