import { spawnSync } from 'node:child_process'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { selectReleasePackages } from './release-packages.mjs'

const releaseRoot = dirname(dirname(fileURLToPath(import.meta.url)))
const npmCliPath = process.env.npm_execpath
const selectedPackages = selectReleasePackages()

const runNpm = argumentsList => spawnSync(
    npmCliPath ? process.execPath : process.platform === 'win32' ? 'npm.cmd' : 'npm',
    npmCliPath ? [npmCliPath, ...argumentsList] : argumentsList,
    {
        cwd: releaseRoot,
        encoding: 'utf8'
    }
)

for (const packageDirectory of selectedPackages) {
    const packagePath = join(releaseRoot, 'packages', packageDirectory)
    const result = runNpm([
        'pack',
        packagePath,
        '--dry-run',
        '--ignore-scripts',
        '--json'
    ])

    if (result.error) throw result.error
    if (result.status !== 0) {
        process.stderr.write(result.stderr)
        process.exit(result.status ?? 1)
    }

    const [summary] = JSON.parse(result.stdout)
    console.log(
        `${summary.name}@${summary.version}：${summary.files.length} 个文件，` +
        `压缩后 ${summary.size} 字节，解压后 ${summary.unpackedSize} 字节`
    )
}
