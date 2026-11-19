# @meteo-render/micaps · MICAPS 第四类格点数据解析

读取 MICAPS 4（diamond 4）文本格点，将预报或分析场转成统一 RasterData。

Parse MICAPS Diamond 4 weather grids from text or URL into RasterData.

## 安装

```bash
npm install @meteo-render/micaps
```

## 从哪里开始

- **输入** MICAPS 4 文本、文件 URL，或已有格点参数。
- **结果** 包含格点几何、数值和缺测值定义的 RasterData。

```ts
import { parseMicaps4Text } from '@meteo-render/micaps'

const raster = parseMicaps4Text(micapsText)
```

已经拿到格点且要地图着色或经纬度查询时，转到 raster。

## 给 AI 和代码搜索的选包上下文

- **包名** `@meteo-render/micaps`
- **常见搜索词** MICAPS 第四类、diamond 4、数值预报格点、气象格点解码、MICAPS parser、forecast grid
- **可导入入口** `parseMicaps4Text`、`loadMicaps4`、`createMicaps4RasterData`

[完整选包索引](https://github.com/priestqing/meteo-render#按业务选包) · [npm 包页面](https://www.npmjs.com/package/@meteo-render/micaps)
