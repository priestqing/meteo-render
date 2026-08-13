import type { UpperAirBufferSource, UpperAirTextSource } from '../common';
import type { WindProfilerProduct, WindProfilerProfileProduct, WindProfilerRadialProduct, WindProfilerSpectrumProduct } from './types';
export declare const parseWindProfiler: (source: UpperAirTextSource) => WindProfilerProduct;
export declare const parseWindProfilerProfile: (source: UpperAirTextSource) => WindProfilerProfileProduct;
export declare const parseWindProfilerRadial: (source: UpperAirTextSource) => WindProfilerRadialProduct;
export declare const parseWindProfilerSpectrum: (source: UpperAirBufferSource) => WindProfilerSpectrumProduct;
