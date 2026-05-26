# Open Notebook Docker 中文教程（静态站点）

面向中文用户的自托管入门页：用 Docker 快速部署 [open-notebook](https://github.com/lfnovo/open-notebook)（开源、隐私优先的 NotebookLM 替代品），并说明 AI Provider 配置与常见问题。

## 仓库内容

| 路径 | 说明 |
|------|------|
| [`index.html`](index.html) | 教程正文（简体中文）：环境准备、`docker-compose`、启动步骤、模型配置、排错 |
| [`styles/main.css`](styles/main.css) | 页面样式 |
| [`scripts/main.js`](scripts/main.js) | 页内交互（导航、代码复制等） |
| [`render.yaml`](render.yaml) | Render Blueprint：`runtime: static`，根目录发布 |

## 本地预览

在项目根目录执行：

```bash
python -m http.server 8080
```

浏览器访问 `http://127.0.0.1:8080/`。

## 在线部署

可将本仓库作为静态站点部署到 [Render](https://render.com)（见 `render.yaml`），或任意支持静态文件的托管服务。

## 维护

- 更新教程：编辑 `index.html`
- 调整样式：编辑 `styles/main.css`

上游项目：<https://github.com/lfnovo/open-notebook>
