import type { DefaultTheme } from 'vitepress'

type NavMessages = {
  home: string
  examples: string
}

type SidebarMessages = {
  examples: string
  markdownExamples: string
  apiExamples: string
  mathDemo: string
}

type ReadingTimeMessages = {
  label: string
  minute: string
  word: string
}

type LocaleMessage = {
  label: string
  lang: string
  link?: string
  title: string
  description: string
  nav: NavMessages
  sidebar: SidebarMessages
  readingTime: ReadingTimeMessages
}

export type LocaleKey = 'root' | 'en' | 'fr'

export const fallbackLocale: LocaleKey = 'root'

export const messages: Record<LocaleKey, LocaleMessage> = {
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
  },
}

export const localeKeys = Object.keys(messages) as LocaleKey[]

const isLocaleKey = (locale: string): locale is LocaleKey => locale in messages

export const getMessage = (locale: string = fallbackLocale) => {
  return messages[isLocaleKey(locale) ? locale : fallbackLocale]
}

const localeBasePath = (locale: LocaleKey) => {
  if (locale === 'root') return ''

  return `/${locale}`
}

const localizedPath = (locale: LocaleKey, path: string) => {
  const basePath = localeBasePath(locale)

  if (path === '/') return `${basePath}/`

  return `${basePath}${path}`
}

const postPath = (locale: LocaleKey, slug: string) => {
  if (locale === 'root') return `/post/${slug}`

  return localizedPath(locale, `/${slug}`)
}

export const defineLocale = (locale: LocaleKey) => {
  const message = getMessage(locale)
  const themeConfig: DefaultTheme.Config = {
    search: { provider: 'local' },
    logo: {
      src: '/NixOS.svg',
      alt: "Rene's Avatar",
    },
    nav: [
      { text: message.nav.home, link: localizedPath(locale, '/') },
      { text: message.nav.examples, link: postPath(locale, 'markdown-examples') },
    ],
    sidebar: [
      {
        text: message.sidebar.examples,
        items: [
          { text: message.sidebar.markdownExamples, link: postPath(locale, 'markdown-examples') },
          { text: message.sidebar.apiExamples, link: postPath(locale, 'api-examples') },
          { text: message.sidebar.mathDemo, link: postPath(locale, 'math') },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Linear-optimize' },
    ],
  }

  return {
    label: message.label,
    lang: message.lang,
    ...(message.link ? { link: message.link } : {}),
    title: message.title,
    description: message.description,
    themeConfig,
  }
}
