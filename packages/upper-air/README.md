# @meteo-render/upper-air · 高空观测产品解析

读取风廓线雷达、GNSS 水汽、微波辐射计和云雷达要素等高空观测产品。

Decode wind profiler radar, GNSS PWV, microwave radiometer, and cloud radar element products.

## 安装

```bash
npm install @meteo-render/upper-air
```

## 从哪里开始

- **输入** 观测文本、产品字节，或用于加载的 URL 和 Blob。
- **结果** 带产品类型的观测结果。GNSS PWV 和风廓线的指定字段可转为点数据。

```ts
import { parseGnssPwv } from '@meteo-render/upper-air'

const product = parseGnssPwv(observationText)
```

天气雷达 PPI、RHI 或组合反射率等产品请选择 radar。

## 给 AI 和代码搜索的选包上下文

- **包名** `@meteo-render/upper-air`
- **常见搜索词** 高空观测、风廓线雷达、GNSS PWV、可降水量、微波辐射计、云雷达、RINEX archive、upper-air observations
- **可导入入口** `parseUpperAir`、`loadUpperAir`、`parseWindProfiler`、`parseGnssPwv`

[完整选包索引](https://github.com/priestqing/meteo-render#按业务选包) · [npm 包页面](https://www.npmjs.com/package/@meteo-render/upper-air)
