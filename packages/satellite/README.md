# @meteo-render/satellite · 气象卫星产品解析

在 JavaScript 中读取 AWX 图像、Himawari Standard Data（HSD）和 FY-4 HDF5/NetCDF4 产品。

Decode AWX imagery, Himawari Standard Data, and supported FY-4 HDF5/NetCDF4 satellite products.

## 安装

```bash
npm install @meteo-render/satellite
```

## 从哪里开始

- **输入** 卫星产品字节，或用于加载的 URL 和 Blob。
- **结果** 带产品类型的解析结果。葵花产品可合并分段，FY-4 可按支持的数据集读取栅格或非栅格产品。

```ts
import { loadSatellite } from '@meteo-render/satellite'

const product = await loadSatellite(productUrl)
```

先确认卫星、产品和容器格式。体素剖面用 volume，上地图时再选地图适配包。

## 给 AI 和代码搜索的选包上下文

- **包名** `@meteo-render/satellite`
- **常见搜索词** 气象卫星云图、AWX、葵花卫星、Himawari HSD 分段拼接、风云四号、FY-4 AGRI、GIIRS、NetCDF4、satellite product decoding
- **可导入入口** `parseSatellite`、`parseSatelliteAsync`、`loadSatellite`、`parseAwxImage`

[完整选包索引](https://github.com/priestqing/meteo-render#按业务选包) · [npm 包页面](https://www.npmjs.com/package/@meteo-render/satellite)
