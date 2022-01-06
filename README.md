## Vite + React + TypeScript  实践案例

### 生成项目

> pnpx create-vite

### 总结

- 开发环境：`ESM` + `HMR`
  - 依赖：原生 `js` 代码，使用 `esbuild` 构建，速度快 `10` ~ `100` 倍
  - 源码：`jsx`、`vue`、`sfc` 等
- 生产环境：`rollup` 构建

#### Vite 相比于原生 `ESM` 的优化

- 解析的引用路径 `/node_module/.vite/xxx.js?hash`，支持第三方依赖直接引用，而非固定路径引用
- 模块按需加载

#### 为什么生产要 rollup 构建

- 嵌套引用的局限性（依赖的依赖）
- `EMS` 在浏览器的兼容性问题

### 访问地址

https://elastic-elion-90b693.netlify.app
