export const fallbackLocale = 'root'

export const messages = {
  root: {
    label: '简体中文',
    lang: 'zh-CN',
    title: "Rene's blog",
    description: '这是我的博客',
    nav: {
      home: '首页',
      examples: '示例',
    },
    sidebar: {
      examples: '示例',
      markdownExamples: 'Markdown 示例',
      apiExamples: 'API 示例',
      mathDemo: '数学演示',
    },
    readingTime: {
      label: '阅读时间',
      minute: '分钟',
      word: '字',
    },
    home: {
      heroText: '这是我的博客',
      tagline: '我的项目标语',
      actions: {
        markdownExamples: 'Markdown 示例',
        apiExamples: 'API 示例',
        mathDemo: '数学演示',
      },
      features: [
        {
          title: '功能 A',
          details: '使用 VitePress 构建的多语言个人博客',
        },
        {
          title: '功能 B',
          details: '支持数学公式、Mermaid 图表和阅读时长',
        },
        {
          title: '功能 C',
          details: '从一份 Markdown 内容自动生成本地化页面',
        },
      ],
    },
  },
  en: {
    label: 'English',
    lang: 'en-US',
    link: '/en/',
    title: "Rene's Blog",
    description: 'This is my blog',
    nav: {
      home: 'Home',
      examples: 'Examples',
    },
    sidebar: {
      examples: 'Examples',
      markdownExamples: 'Markdown Examples',
      apiExamples: 'API Examples',
      mathDemo: 'Math Demo',
    },
    readingTime: {
      label: 'Reading time',
      minute: 'min',
      word: 'words',
    },
    home: {
      heroText: 'This is my blog',
      tagline: 'My great project tagline',
      actions: {
        markdownExamples: 'Markdown Examples',
        apiExamples: 'API Examples',
        mathDemo: 'Math Demo',
      },
      features: [
        {
          title: 'Feature A',
          details: 'A multilingual personal blog powered by VitePress',
        },
        {
          title: 'Feature B',
          details: 'Supports math formulas, Mermaid diagrams, and reading time',
        },
        {
          title: 'Feature C',
          details: 'Generates localized pages automatically from one Markdown source',
        },
      ],
    },
  },
  fr: {
    label: 'Français',
    lang: 'fr-FR',
    link: '/fr/',
    title: 'Blog de Rene',
    description: 'Ceci est mon blog',
    nav: {
      home: 'Accueil',
      examples: 'Exemples',
    },
    sidebar: {
      examples: 'Exemples',
      markdownExamples: 'Exemples Markdown',
      apiExamples: 'Exemples API',
      mathDemo: 'Démo Math',
    },
    readingTime: {
      label: 'Temps de lecture',
      minute: 'min',
      word: 'mots',
    },
    home: {
      heroText: 'Ceci est mon blog',
      tagline: 'Le slogan de mon projet',
      actions: {
        markdownExamples: 'Exemples Markdown',
        apiExamples: 'Exemples API',
        mathDemo: 'Démo Math',
      },
      features: [
        {
          title: 'Fonctionnalité A',
          details: 'Un blog personnel multilingue propulsé par VitePress',
        },
        {
          title: 'Fonctionnalité B',
          details: 'Prend en charge les formules mathématiques, les diagrammes Mermaid et le temps de lecture',
        },
        {
          title: 'Fonctionnalité C',
          details: 'Génère automatiquement des pages localisées à partir d’une seule source Markdown',
        },
      ],
    },
  },
}

export const contentTranslations = {
  en: {
    '数学公式测试': 'Math Formula Test',
    '你好': 'Hello',
    'Markdown use': 'Markdown Use',
  },
  fr: {
    'Runtime API Examples': 'Exemples d’API d’exécution',
    'This page demonstrates usage of some of the runtime APIs provided by VitePress.': 'Cette page présente l’utilisation de quelques API d’exécution fournies par VitePress.',
    'The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:': 'L’API principale `useData()` permet d’accéder aux données du site, du thème et de la page courante. Elle fonctionne dans les fichiers `.md` comme dans les fichiers `.vue` :',
    'Results': 'Résultats',
    'Theme Data': 'Données du thème',
    'Page Data': 'Données de la page',
    'Page Frontmatter': 'Frontmatter de la page',
    'More': 'Plus d’informations',
    'Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).': 'Consultez la documentation pour la [liste complète des API d’exécution](https://vitepress.dev/reference/runtime-api#usedata).',
    'Markdown use': 'Utilisation de Markdown',
    'Markdown Extension Examples': 'Exemples d’extensions Markdown',
    'This page demonstrates some of the built-in markdown extensions provided by VitePress.': 'Cette page présente quelques extensions Markdown intégrées fournies par VitePress.',
    'Syntax Highlighting': 'Coloration syntaxique',
    'VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:': 'VitePress fournit une coloration syntaxique basée sur [Shiki](https://github.com/shikijs/shiki), avec des fonctionnalités supplémentaires comme la mise en évidence de lignes :',
    'Input': 'Entrée',
    'Output': 'Sortie',
    'Custom Containers': 'Conteneurs personnalisés',
    'This is an info box.': 'Ceci est une boîte d’information.',
    'This is a tip.': 'Ceci est une astuce.',
    'This is a warning.': 'Ceci est un avertissement.',
    'This is a dangerous warning.': 'Ceci est un avertissement dangereux.',
    'This is a details block.': 'Ceci est un bloc de détails.',
    'Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).': 'Consultez la documentation pour la [liste complète des extensions Markdown](https://vitepress.dev/guide/markdown).',
    '数学公式测试': 'Test de formules mathématiques',
    '你好': 'Bonjour',
  },
}
