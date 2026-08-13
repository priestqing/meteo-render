import type { ScalarField } from './types';
export declare const isNoDataValue: (field: ScalarField, rawValue: number) => boolean;
export declare const decodeFieldValue: (field: ScalarField, index: number) => number | undefined;
