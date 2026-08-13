import { type PointData } from '@meteo-render/core';
import type { WindProfilerProfileProduct } from './types';
export type WindProfilerField = 'windDirection' | 'windSpeed' | 'verticalVelocity' | 'horizontalConfidence' | 'verticalConfidence' | 'cn2';
export declare const windProfilerFieldToPointData: (product: WindProfilerProfileProduct, field: WindProfilerField, noData?: number) => PointData;
