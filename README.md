# Personal Blog

A personal blog powered by **VitePress**, with math rendering, Mermaid diagrams, reading-time display, and multilingual content.

## English

### 1) Project Structure

```text
.
├── index.md                 # Default language homepage
├── post/                    # Default language posts
│   ├── api-examples.md
│   ├── markdown-examples.md
│   └── math.md
├── .vitepress/i18n-messages.mjs # Locale messages and Markdown translation dictionary
├── .vitepress/scripts/       # Build-time i18n content generator
├── public/                  # Static assets (images, svg)
├── types/                   # Type declarations
└── package.json             # Scripts and dependencies
```

### 2) Tech Stack
- VitePress `^1.6.4`
- Mermaid `^11.12.2` + `vitepress-plugin-mermaid`
- KaTeX `^0.16.27` + `markdown-it-texmath`
- reading-time `^1.5.0`

### 3) Install
```bash
npm install
```

### 4) Development
```bash
npm run docs:dev
```
Then open the local URL shown in terminal (usually `http://localhost:5173`).

### 5) Build
```bash
npm run docs:build
```

### 6) Preview Production Build
```bash
npm run docs:preview
```

### 7) Implemented Features
- Math formula rendering in Markdown pages.
- Mermaid diagram support.
- Reading-time calculation support.
- Multilingual UI and generated English/French pages from the single `post/` Markdown source.
- `pnpm docs:i18n` regenerates ignored `/en` and `/fr` output folders before dev/build.

---

# 个人博客

这是一个基于 **VitePress** 的个人博客，支持数学公式、Mermaid 图表、阅读时长显示和多语言内容。

## 中文

### 1）项目结构

```text
.
├── index.md                 # 默认语言首页
├── post/                    # 默认语言文章
│   ├── api-examples.md
│   ├── markdown-examples.md
│   └── math.md
├── .vitepress/i18n-messages.mjs # 多语言文案和 Markdown 翻译字典
├── .vitepress/scripts/       # 构建时 i18n 内容生成脚本
├── public/                  # 静态资源（图片、svg）
├── types/                   # 类型声明
└── package.json             # 脚本与依赖配置
```

### 2）技术栈
- VitePress `^1.6.4`
- Mermaid `^11.12.2` + `vitepress-plugin-mermaid`
- KaTeX `^0.16.27` + `markdown-it-texmath`
- reading-time `^1.5.0`

### 3）安装依赖
```bash
npm install
```

### 4）本地开发
```bash
npm run docs:dev
```
运行后打开终端显示的本地地址（通常为 `http://localhost:5173`）。

### 5）构建
```bash
npm run docs:build
```

### 6）预览生产构建
```bash
npm run docs:preview
```

### 7）已实现功能
- Markdown 页面中的数学公式渲染。
- Mermaid 图表支持。
- 文章阅读时长统计支持。
- 多语言 UI，并从唯一的 `post/` Markdown 源自动生成英文/法文页面。
- `pnpm docs:i18n` 会在开发/构建前重新生成被忽略的 `/en` 和 `/fr` 输出目录。
