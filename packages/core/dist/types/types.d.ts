export type DataKind = 'raster' | 'vector-grid' | 'radial' | 'points' | 'volume';
export type DataAttributes = Readonly<Record<string, unknown>>;
export interface DataMetadata {
    id?: string;
    name?: string;
    product?: string;
    unit?: string;
    timestamp?: string;
    attributes?: DataAttributes;
}
export interface Bounds2D {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
    /** The bounds cross the horizontal wrap seam, such as the antimeridian. */
    wrapX?: boolean;
}
export interface Bounds3D extends Bounds2D {
    minZ: number;
    maxZ: number;
}
export interface SpatialReference2D {
    /** CRS identifier such as EPSG:4326, EPSG:3857, or a product-specific CRS. */
    crs: string;
    bounds: Bounds2D;
}
export interface ValueEncoding {
    /** Actual value = raw value * scale + offset. */
    scale?: number;
    offset?: number;
    /** Finite sentinel in the raw value domain. */
    noData?: number;
}
export interface ScalarField extends ValueEncoding {
    /** GPU-friendly, row-major raw values. */
    values: Float32Array;
    metadata?: DataMetadata;
}
export type GridBoundsReference = 'cell-centers' | 'cell-edges';
export type GridRowOrder = 'north-to-south' | 'south-to-north';
export type GridColumnOrder = 'west-to-east' | 'east-to-west';
export interface GridGeometry extends SpatialReference2D {
    width: number;
    height: number;
    boundsReference: GridBoundsReference;
    rowOrder: GridRowOrder;
    columnOrder: GridColumnOrder;
}
export interface RasterData {
    kind: 'raster';
    geometry: GridGeometry;
    field: ScalarField;
    metadata?: DataMetadata;
}
export interface VectorGridData {
    kind: 'vector-grid';
    geometry: GridGeometry;
    u: ScalarField;
    v: ScalarField;
    metadata?: DataMetadata;
}
export interface RadialRay {
    startAngle: number;
    endAngle: number;
    startRange: number;
    gateSize: number;
    field: ScalarField;
    metadata?: DataMetadata;
}
export interface RadialData {
    kind: 'radial';
    crs: string;
    origin: readonly [x: number, y: number, z?: number];
    elevation?: number;
    rays: readonly RadialRay[];
    metadata?: DataMetadata;
}
export interface PointData {
    kind: 'points';
    crs: string;
    count: number;
    coordinateStride: 2 | 3;
    coordinates: Float64Array;
    field?: ScalarField;
    metadata?: DataMetadata;
}
export interface VolumeGeometry {
    crs: string;
    width: number;
    height: number;
    depth: number;
    bounds: Bounds3D;
    boundsReference: GridBoundsReference;
    rowOrder: GridRowOrder;
    columnOrder: GridColumnOrder;
    /** Optional explicit, strictly increasing vertical coordinates. */
    zCoordinates?: Float32Array;
}
export interface VolumeData {
    kind: 'volume';
    geometry: VolumeGeometry;
    field: ScalarField;
    metadata?: DataMetadata;
}
export type DrawData = RasterData | VectorGridData | RadialData | PointData | VolumeData;
export interface ValidationOptions {
    /** Scan all numeric values. Disabled by default for large datasets. */
    checkValues?: boolean;
}
