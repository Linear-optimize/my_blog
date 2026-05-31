import type { DefaultTheme } from 'vitepress'
import {
  fallbackLocale as rawFallbackLocale,
  messages as rawMessages,
} from './i18n-messages.mjs'

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

type HomeFeatureMessages = {
  title: string
  details: string
}

type HomeMessages = {
  heroText: string
  tagline: string
  actions: {
    markdownExamples: string
    apiExamples: string
    mathDemo: string
  }
  features: HomeFeatureMessages[]
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
  home: HomeMessages
}

export type LocaleKey = 'root' | 'en' | 'fr'

export const fallbackLocale = rawFallbackLocale as LocaleKey

export const messages = rawMessages as Record<LocaleKey, LocaleMessage>

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
  return localizedPath(locale, `/post/${slug}`)
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
