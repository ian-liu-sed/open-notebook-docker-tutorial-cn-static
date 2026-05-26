# Open Notebook Docker 中文教程（静态站）

面向中文用户的 **Open Notebook** 自托管入门站点：用 Docker / Docker Compose 快速跑通 [lfnovo/open-notebook](https://github.com/lfnovo/open-notebook)，并在 Web UI 中完成 AI Provider 配置。

本仓库为**纯静态**项目（HTML + CSS + JavaScript），无构建步骤，可直接本地打开 `index.html`，或通过 [Render](https://render.com) 等静态托管平台部署。

## 功能概览

- 中文分步教程：环境准备 → `docker-compose.yml` → 启动 → API Key / 模型配置 → 常见问题
- 可一键复制的配置块与命令（页面内「复制」按钮）
- 学习进度勾选（`localStorage` 持久化）
- 附带 `render.yaml`，支持 Render Static Site 一键部署

## 目录结构

| 路径 | 说明 |
|------|------|
| `index.html` | 教程主页面与全部正文内容 |
| `styles/main.css` | 布局、排版、组件样式 |
| `scripts/main.js` | 导航高亮、代码复制、勾选状态 |
| `render.yaml` | Render 静态站点 Blueprint |
| `docs/` | 项目说明与部署文档（本仓库的补充 Markdown） |

详见 [docs/STRUCTURE.md](./docs/STRUCTURE.md)。

## 本地预览

```bash
# 任选一种方式
npx serve .
# 或
python -m http.server 8080
```

浏览器访问提示的地址即可（避免部分浏览器对 `file://` 的限制）。

## 在线部署

参见 [docs/DEPLOY.md](./docs/DEPLOY.md)。推荐将仓库连接到 Render，使用根目录 `render.yaml` 中的 `static` 服务配置。

## 与上游项目的关系

- **教程内容**针对 [Open Notebook](https://github.com/lfnovo/open-notebook) 官方 Docker Quick Start 整理，镜像与 compose 字段以官方 README 为准。
- **本仓库**仅托管静态教程页，不包含 Open Notebook 应用源码。

## 维护者

[SED PHARMA INC.](https://github.com/ian-liu-sed) — 教程站用于降低中文用户 Docker 部署门槛，便于团队内部评估 NotebookLM 替代方案。

## 许可证

教程页文本与样式以本仓库为准；Open Notebook 本身遵循其上游仓库许可证。
