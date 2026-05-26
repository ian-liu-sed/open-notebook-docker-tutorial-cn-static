# 部署说明

本仓库为静态资源，任意支持「上传目录 / 连接 Git」的静态托管均可使用。

## Render（推荐）

仓库已包含 `render.yaml`，可按 Blueprint 或手动创建 Static Site：

1. 登录 [Render Dashboard](https://dashboard.render.com)
2. **New** → **Static Site**
3. 连接 GitHub 仓库 `ian-liu-sed/open-notebook-docker-tutorial-cn-static`
4. 配置建议：
   - **Build Command**：留空
   - **Publish Directory**：`.`（根目录）
5. 部署完成后通过 Render 提供的 `*.onrender.com` 域名访问

`render.yaml` 中已配置 SPA 式 rewrite，将全部路径指向 `index.html`。

## 其他平台

| 平台 | 说明 |
|------|------|
| GitHub Pages | 将分支根目录或 `/docs` 设为 Pages 源；无需构建 |
| Cloudflare Pages | 框架选 None，输出目录为 `/` |
| Vercel / Netlify | 静态站点，无构建命令 |

## 自定义域名

在托管平台控制台添加 CNAME 记录指向平台提供的地址即可；本站点无服务端 API，无需额外环境变量。

## 本地与生产一致性

生产环境仅托管 `index.html`、`styles/`、`scripts/`，与本地 `npx serve .` 行为一致。修改内容后提交 Git，由平台自动重新部署。

## 安全说明

- 教程页**不包含**任何 API Key 或私有凭据
- `docker-compose.yml` 示例中的 `OPEN_NOTEBOOK_ENCRYPTION_KEY` 仅为占位，用户必须在自有环境中替换
