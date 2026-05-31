// import { defineConfig } from 'vitepress'
import texmath from 'markdown-it-texmath'
import readingTime from 'reading-time'
import { withMermaid } from "vitepress-plugin-mermaid";
import { defineLocale } from './i18n'

const rootLocale = defineLocale('root')

export default withMermaid({
  appearance: 'dark',
  base: '/',



  themeConfig: {
    search: rootLocale.themeConfig.search,
    nav: rootLocale.themeConfig.nav,
  },

  mermaid: {
    theme: 'default',
    startOnLoad: true,
    flowchart: { curve: 'basis' },
  },

  markdown: {
    config(md) {

      md.use(texmath, {
        engine: 'katex',
        delimiters: 'dollars',
        katexOptions: {
          displayMode: true,
          throwOnError: false,
        },
      })


      md.core.ruler.push('reading-time', (state) => {
        const stats = readingTime(state.src)

        state.env.frontmatter ||= {}
        state.env.frontmatter.readingTime = {
          minutes: Math.ceil(stats.minutes),
          words: stats.words,
        }
      })
    },
  },


  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === 'eqn',
      },
    },
  },


  locales: {
    root: rootLocale,
    en: defineLocale('en'),
    fr: defineLocale('fr'),
  },
})
