# 项目结构与文件说明

## 顶层文件

### `index.html`

单页应用式教程文档，语言为 `zh-CN`。主要区块：

| 锚点 ID | 内容 |
|---------|------|
| `#overview` | 项目价值、Docker 方案、默认端口 |
| `#requirements` | Docker Desktop、目录、端口、WSL 等检查项 |
| `#compose` | 完整 `docker-compose.yml` 示例与环境变量说明 |
| `#run` | `docker compose up -d`、状态检查与首次访问 |
| `#provider` | Settings → API Keys → 模型注册流程 |
| `#troubleshooting` | 端口、加密密钥、卷权限、模型发现等 FAQ |
| `#deploy` | 教程站目标与使用场景说明 |

页面内 `<pre><code>` 块通过 `data-copy-target` 与 `scripts/main.js` 中的复制按钮联动。

### `render.yaml`

Render Blueprint 定义：

- **类型**：`web` + `runtime: static`
- **发布路径**：仓库根目录（`.`）
- **路由**：`/*` 重写至 `/index.html`（便于将来扩展 SPA 式路由；当前仅单页）

### `styles/main.css`

负责：

- 响应式容器与页头导航
- Hero、卡片网格、双栏布局
- 代码块工具栏、提示框（info / warning）、FAQ 列表
- 页脚与按钮状态（含复制成功样式 `.copied`）

### `scripts/main.js`

无依赖的原生脚本，职责：

1. **导航**：根据 `location.hash` 为 `.main-nav a` 添加 `.active`
2. **复制**：`[data-copy-target]` 按钮将对应 `<pre>` 文本写入剪贴板
3. **勾选**：`[data-check]` 复选框状态存入 `localStorage`，键名前缀 `open-notebook-tutorial:`

## 文档目录 `docs/`

| 文件 | 用途 |
|------|------|
| `STRUCTURE.md` | 本文件：代码与页面结构 |
| `DEPLOY.md` | 静态托管与 Render 部署步骤 |

## 修改教程正文时

内容目前集中在 `index.html`。若后续拆分为 Markdown 生成静态页，建议保留现有锚点 ID，以免破坏书签与导航链接。

## 默认端口（Open Notebook Docker）

| 端口 | 服务 |
|------|------|
| 8502 | Open Notebook Web UI |
| 5055 | 应用辅助接口 |
| 8000 | SurrealDB（compose 内映射） |

与 `index.html` 中说明保持一致；若官方 compose 变更，需同步更新 HTML 与本文档。
