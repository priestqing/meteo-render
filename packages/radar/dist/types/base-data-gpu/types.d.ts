export interface IGpuRadarRay {
    azimuth: number;
    elevation: number;
    moment: {
        values: Float32Array | Float64Array | number[];
        encodedValues?: Uint8Array | Uint16Array;
    };
}
export interface IGpuRadarCut {
    number: number;
    scan: {
        startRange: number;
        logResolution: number;
        dopplerResolution: number;
        angularResolution: number;
    };
    moments: Map<number, IGpuRadarRay[]>;
}
export interface IGpuRadarVolume {
    site: {
        latitude: number;
        longitude: number;
        antennaHeight: number;
    };
    cuts: IGpuRadarCut[];
    reflectivityCuts: IGpuRadarCut[];
    noData: number;
}
export interface IGpuRadarSelection {
    kind: 'moment' | 'cr' | 'et' | 'vil';
    cut?: number;
    type?: number;
}
export interface IGpuRadarOptions {
    threshold: number;
    vilFloor: number;
    vilCap: number;
    maxGap: number;
    heightReference: 'msl' | 'radar';
}
export interface IGpuRadarGrid {
    width: number;
    height: number;
    minLat: number;
    maxLat: number;
    minLng: number;
    maxLng: number;
    noData: number;
}
export interface IGpuRadarStats {
    valid: number;
    positive: number;
    minimum: number;
    maximum: number;
    crossing: number;
    lowerBound: number;
    partial: number;
    bounds: number[];
}
export interface IGpuRadarResult {
    grid: IGpuRadarGrid;
    selection: IGpuRadarSelection;
    stats: IGpuRadarStats;
    cacheHit: boolean;
    elapsedMs: number;
}
export interface IGpuRadarTexture {
    texture: WebGLTexture;
    width: number;
    height: number;
    bytes: number;
}
export interface IGpuRadarAtlas {
    values: IGpuRadarTexture;
    rays: IGpuRadarTexture;
    cuts: Float32Array;
    tolerances: Float32Array;
    count: number;
}
export interface IGpuRadarColorStop {
    min: number;
    max: number;
    color: string;
}
export interface IGpuRadarRendererOptions {
    coordinateSystem?: 'wgs84' | 'gcj02';
}
export interface IGpuRadarMesh {
    vertices: Float32Array;
    originX: number;
    originY: number;
}
export interface IGpuRadarMeshView {
    mesh: IGpuRadarMesh;
    left: number;
    top: number;
    width: number;
    height: number;
}
