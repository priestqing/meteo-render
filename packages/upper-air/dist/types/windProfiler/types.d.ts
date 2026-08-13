export interface WindProfilerStation {
    code: string;
    longitude: number;
    latitude: number;
    altitude: number;
    radarType: string;
}
export interface WindProfilerLevel {
    height: number;
    windDirection: number | null;
    windSpeed: number | null;
    verticalVelocity: number | null;
    horizontalConfidence: number | null;
    verticalConfidence: number | null;
    cn2: number | null;
}
export interface WindProfilerProfileProduct {
    kind: 'wind-profiler-profile';
    format: 'ROBS' | 'HOBS' | 'OOBS';
    version: string;
    station: WindProfilerStation;
    timestamp: string;
    levels: WindProfilerLevel[];
}
export interface WindProfilerRadialLevel {
    height: number;
    spectrumWidth: number | null;
    signalNoiseRatio: number | null;
    radialVelocity: number | null;
}
export interface WindProfilerRadialBeam {
    name: string;
    levels: WindProfilerRadialLevel[];
}
export interface WindProfilerRadialProduct {
    kind: 'wind-profiler-radial';
    version: string;
    station: Omit<WindProfilerStation, 'radarType'> & {
        radarType: string;
    };
    beams: WindProfilerRadialBeam[];
    attributes: Record<string, string | number | string[]>;
}
export interface WindProfilerSpectrumProduct {
    kind: 'wind-profiler-spectrum';
    version: number;
    headerLength: number;
    station: {
        country: string;
        province: string;
        code: string;
        name: string;
        radarType: string;
        longitudeText: string;
        latitudeText: string;
        altitude: number | null;
    };
    values: Float32Array;
}
export type WindProfilerProduct = WindProfilerProfileProduct | WindProfilerRadialProduct | WindProfilerSpectrumProduct;
