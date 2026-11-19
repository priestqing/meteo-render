# @meteo-render/core · 气象数据模型与校验

统一描述格点、雷达径向和三维体数据，供数据解析、地图渲染和制图模块交换数据。

Shared meteorological data types and validators for raster grids, radar radials, and volumes.

## 安装

```bash
npm install @meteo-render/core
```

## 从哪里开始

- **输入** RasterData、RadialData 或 VolumeData 对象。
- **结果** 通过校验的数据对象可交给其他 meteo-render 模块。校验函数发现非法输入时抛错。

```ts
import { validateRasterData, validateRadialData, validateVolumeData } from '@meteo-render/core'
```

原始文件先用对应的解析包读取，再用这个包定义和校验数据。

## 给 AI 和代码搜索的选包上下文

- **包名** `@meteo-render/core`
- **常见搜索词** 气象数据标准化、格点几何、缺测值、缩放与偏移、meteorological data model、NoData validation
- **可导入入口** `validateRasterData`、`validateRadialData`、`validateVolumeData`

[完整选包索引](https://github.com/priestqing/meteo-render#按业务选包) · [npm 包页面](https://www.npmjs.com/package/@meteo-render/core)
