import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { releasePackages, selectReleasePackages } from './release-packages.mjs'

const releaseRoot = fileURLToPath(new URL('..', import.meta.url))
const manifests = new Map()
const selectedPackages = selectReleasePackages()

for (const packageDirectory of releasePackages) {
    const manifestPath = join(releaseRoot, 'packages', packageDirectory, 'package.json')
    if (!existsSync(manifestPath)) throw new Error(`${packageDirectory} 缺少 package.json`)

    const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
    manifests.set(manifest.name, manifest)
}

for (const packageDirectory of selectedPackages) {
    const directory = join(releaseRoot, 'packages', packageDirectory)
    const manifestPath = join(directory, 'package.json')
    const licensePath = join(directory, 'LICENSE')
    const distPath = join(directory, 'dist')

    if (!existsSync(licensePath)) throw new Error(`${packageDirectory} 缺少 LICENSE`)
    if (!existsSync(distPath) || !statSync(distPath).isDirectory()) throw new Error(`${packageDirectory} 缺少 dist`)

    const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))

    for (const field of ['main', 'module', 'types']) {
        if (!manifest[field]) throw new Error(`${manifest.name} 缺少 ${field}`)
        if (!existsSync(join(directory, manifest[field]))) throw new Error(`${manifest.name} 的 ${field} 文件不存在：${manifest[field]}`)
    }

    if (manifest.publishConfig?.access !== 'public') throw new Error(`${manifest.name} 未配置 public 发布`)
    if (manifest.publishConfig?.registry !== 'https://registry.npmjs.org/') throw new Error(`${manifest.name} registry 配置错误`)
    if (manifest.license !== 'Apache-2.0') throw new Error(`${manifest.name} license 不是 Apache-2.0`)
    if (!manifest.repository?.url?.includes('github.com/priestqing/meteo-render')) throw new Error(`${manifest.name} repository 配置错误`)
    if (manifest.homepage !== 'https://github.com/priestqing/meteo-render#readme') throw new Error(`${manifest.name} homepage 配置错误`)

    const unexpected = readdirSync(directory).filter(name => !['dist', 'package.json', 'LICENSE', 'README.md'].includes(name))
    if (unexpected.length) throw new Error(`${manifest.name} 包目录存在非发布内容：${unexpected.join(', ')}`)
}

const selectedManifests = selectedPackages.map(packageDirectory => {
    const packageName = `@meteo-render/${packageDirectory}`
    const manifest = manifests.get(packageName)
    if (!manifest) throw new Error(`${packageDirectory} 缺少有效的包清单`)
    return manifest
})
const versions = new Set(selectedManifests.map(manifest => manifest.version))
if (versions.size !== 1) throw new Error(`待发布包版本不统一：${[...versions].join(', ')}`)

const [releaseVersion] = versions
const releaseTag = process.env.RELEASE_TAG
if (releaseTag && releaseTag !== `v${releaseVersion}`) {
    throw new Error(`发布标签 ${releaseTag} 与包版本 ${releaseVersion} 不一致，应使用 v${releaseVersion}`)
}

for (const manifest of selectedManifests) {
    for (const [dependencyName, dependencyRange] of Object.entries(manifest.dependencies ?? {})) {
        if (!dependencyName.startsWith('@meteo-render/')) continue
        const dependency = manifests.get(dependencyName)
        if (!dependency) throw new Error(`${manifest.name} 引用了未交付的内部包 ${dependencyName}`)
        if (dependencyRange !== `^${dependency.version}`) {
            throw new Error(`${manifest.name} 的 ${dependencyName} 版本应为 ^${dependency.version}，实际为 ${dependencyRange}`)
        }
    }
}

const releaseScope = selectedPackages.length === releasePackages.length ? '全部包' : selectedPackages.join(', ')
console.log(`发布内容检查通过：${releaseScope}，版本 ${releaseVersion}`)
