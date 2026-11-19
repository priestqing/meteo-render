import type { RadialData, RasterData } from '@meteo-render/core';
export type HmbObsScanMode = 'PPI' | 'RHI' | 'THI' | 'VOL';
export type HmbObsMomentName = 'Zd' | 'LDRd' | 'Vrd' | 'SWd' | 'SNRd' | 'LDRc' | 'Vrc' | 'SWc' | 'SNRc';
export interface IHmbObsHeader {
    format: 'HMBBAS';
    version: number;
    headerSize: number;
    siteCode: string;
    radarType: string;
    longitude: number;
    latitude: number;
    altitude: number;
    horizontalBeamWidth: number;
    verticalBeamWidth: number;
    gateSize: number;
    gateCount: number;
    startTime: string;
    endTime: string;
}
export interface IHmbObsRay {
    timestamp: string;
    azimuth: number;
    elevation: number;
    pulseRepetitionFrequency: number;
    moments: Readonly<Record<HmbObsMomentName, Float32Array>>;
}
export interface IHmbObsProduct {
    kind: 'hmb-obs';
    mode: HmbObsScanMode;
    header: IHmbObsHeader;
    noData: number;
    rays: readonly IHmbObsRay[];
}
export interface IHmbObsDrawOptions {
    moment?: HmbObsMomentName;
    elevation?: number;
    width?: number;
    height?: number;
    fitToData?: boolean;
}
export type HmbObsDrawData = RadialData | RasterData;
