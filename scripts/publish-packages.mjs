import { spawnSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { selectReleasePackages } from './release-packages.mjs'

const releaseRoot = dirname(dirname(fileURLToPath(import.meta.url)))
const npmCliPath = process.env.npm_execpath
const preview = process.argv.includes('--dry-run')
const selectedPackages = selectReleasePackages()

const runNpm = (argumentsList, options = {}) => spawnSync(
    npmCliPath ? process.execPath : process.platform === 'win32' ? 'npm.cmd' : 'npm',
    npmCliPath ? [npmCliPath, ...argumentsList] : argumentsList,
    {
        cwd: releaseRoot,
        encoding: 'utf8',
        stdio: options.stdio ?? 'inherit'
    }
)

for (const packageDirectory of selectedPackages) {
    const manifestPath = join(releaseRoot, 'packages', packageDirectory, 'package.json')
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
    const packageSpec = `${manifest.name}@${manifest.version}`
    const lookup = runNpm(['view', packageSpec, 'version'], { stdio: 'ignore' })

    if (lookup.status === 0) {
        console.log(`跳过已存在版本：${packageSpec}`)
        continue
    }

    if (preview) {
        console.log(`待发布：${packageSpec}`)
        continue
    }

    console.log(`发布：${packageSpec}`)
    const publish = runNpm([
        'publish',
        join('packages', packageDirectory),
        '--access',
        'public',
        '--ignore-scripts'
    ])
    if (publish.status !== 0) process.exit(publish.status ?? 1)
}
