# Game Highlight Vault

一个可以直接部署到 GitHub Pages 的个人游戏精彩视频展示站。

## 本地运行

```bash
npm install
npm run dev
```

## 替换视频内容

编辑 `src/data/videos.ts`，替换每条视频的：

- `title`：视频标题
- `game`：游戏名称
- `category`：分类
- `coverUrl`：封面图地址
- `videoUrl`：视频地址，支持 mp4/webm 等浏览器可播放链接
- `description`：视频描述
- `tags`：标签

如果视频文件较大，建议放到 GitHub Releases、对象存储或视频平台，再把外链填入 `videoUrl`。

## 构建

```bash
npm run build
```

构建产物在 `dist/` 目录。

## 部署到 GitHub Pages

1. 新建 GitHub 仓库并推送代码。
2. 运行 `npm run build`。
3. 在仓库 Settings -> Pages 中选择发布来源。
4. 如果使用 GitHub Actions，可把 `dist/` 自动发布到 Pages。

本项目在 `vite.config.ts` 中使用 `base: './'`，适合部署到 `https://用户名.github.io/仓库名/` 这样的子路径。
