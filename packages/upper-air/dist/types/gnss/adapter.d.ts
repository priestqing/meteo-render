import { type PointData } from '@meteo-render/core';
import type { GnssPwvProduct } from './types';
export type GnssPwvField = 'zenithTotalDelay' | 'pressure' | 'temperature' | 'relativeHumidity' | 'precipitableWaterVapor';
export declare const gnssPwvToPointData: (product: GnssPwvProduct, field?: GnssPwvField, noData?: number) => PointData;
