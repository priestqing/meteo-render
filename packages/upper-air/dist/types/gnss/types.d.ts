import type { SimpleXmlNode } from '../xml';
export interface GnssPwvObservation {
    stationId: string;
    stationCode: string;
    longitude: number;
    latitude: number;
    altitude: number;
    timestamp: string;
    zenithTotalDelay: number | null;
    pressure: number | null;
    temperature: number | null;
    relativeHumidity: number | null;
    precipitableWaterVapor: number | null;
    values: Record<string, string | number | null>;
}
export interface GnssPwvProduct {
    kind: 'gnss-pwv';
    columns: string[];
    observations: GnssPwvObservation[];
}
export interface GnssStatusProduct {
    kind: 'gnss-status';
    root: SimpleXmlNode;
}
export interface RinexArchiveFile {
    name: string;
    version: string;
    type: string;
    header: string[];
    content: string;
}
export interface RinexArchiveProduct {
    kind: 'rinex-archive';
    files: RinexArchiveFile[];
}
