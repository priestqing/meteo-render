export const releasePackages = [
    'core',
    'rendering',
    'micaps',
    'satellite',
    'upper-air',
    'raster',
    'wind',
    'radar',
    'volume',
    'image',
    'leaflet',
    'mars3d',
    'all'
]

export const selectReleasePackages = () => {
    const argumentPackage = process.argv.slice(2).find(argument => !argument.startsWith('--'))
    const requestedPackage = argumentPackage ?? process.env.RELEASE_PACKAGE

    if (!requestedPackage || requestedPackage === 'all') return releasePackages
    if (!releasePackages.includes(requestedPackage)) {
        throw new Error(`未知发布包：${requestedPackage}，可选值：${releasePackages.join(', ')}`)
    }

    return [requestedPackage]
}
