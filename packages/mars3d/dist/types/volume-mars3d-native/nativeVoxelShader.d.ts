import type { IVolumeOpacityStop, VolumeColorMode, VolumeColorStopInput } from '@meteo-render/volume';
export declare const createNativeVoxelFragmentShader: (colorStops: readonly VolumeColorStopInput[], opacityStops: readonly IVolumeOpacityStop[], colorMode: VolumeColorMode) => string;
