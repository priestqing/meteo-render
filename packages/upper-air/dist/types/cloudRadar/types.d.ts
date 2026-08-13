export interface CloudRadarLayer {
    baseHeight: number | null;
    topHeight: number | null;
}
export interface CloudRadarElementProduct {
    kind: 'cloud-radar-elements';
    timestamp: string;
    stationCode: string;
    latitudeDms: string;
    longitudeDms: string;
    altitude: number | null;
    layers: CloudRadarLayer[];
    qualityCode: string;
}
