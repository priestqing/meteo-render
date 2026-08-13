import type { Fy4NonRasterOptions } from './nonRasterTypes';
import type { Fy4Hdf5ParseOptions, Fy4Hdf5ProductReader } from './types';
export declare const warmFy4Hdf5NodeAsync: () => Promise<void>;
/** Open an HDF5/NetCDF4 file through the Node host filesystem without copying the full file into WASM memory. */
export declare const openFy4Hdf5FileProductAsync: (filePath: string, rasterOptions?: Fy4Hdf5ParseOptions, nonRasterOptions?: Fy4NonRasterOptions) => Promise<Fy4Hdf5ProductReader>;
