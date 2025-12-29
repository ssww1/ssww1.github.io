# 个人静态作品站

该仓库已简化为纯静态站点，适用于 **GitHub Pages** 直接部署。

## 目录结构

```
├── assets/            # 打包后的 JS、图标等静态资源
│   └── index-*.js
├── index.html         # 站点入口文件
├── pic.jpg            # （可选）个人照片，若已上传
└── README.md          # 当前说明文档
```

## 在线预览

1. 进入仓库 **Settings → Pages**。
2. 在 **Source** 选择 `Deploy from a branch`，分支设为 `main`，目录保持 `/`。
3. 保存后稍等片刻，即可在给出的 URL 访问页面。

## 本地预览

无需 Node 环境；使用任何 HTTP 服务器即可：

```bash
# Python 内置服务器示例（3.x）
python -m http.server 8080
# 或使用 npx serve
# npx serve -l 8080
```

然后浏览器打开 `http://localhost:8080`。

## 常见问题

| 问题 | 解决方法 |
| ---- | -------- |
| 404 /favicon.ico | 若需要图标，在根目录放置 `favicon.ico` 或在 `index.html` 中添加 `<link rel="icon" ...>` |
| 图片仍使用占位图 | 确认已上传 `pic.jpg` 且路径与 `index.html` 中脚本一致 |

## 版权说明

页面内容、设计及资源仅供个人作品展示使用，禁止未经许可的商业用途。

