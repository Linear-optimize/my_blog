// import { defineConfig } from 'vitepress'
import texmath from 'markdown-it-texmath'
import readingTime from 'reading-time'
import { withMermaid } from "vitepress-plugin-mermaid";


export default withMermaid({

    base:'/my_blog/',

    
    themeConfig: {
    search: { provider: 'local' },
    nav: [{ text: '首页', link: '/' }],
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
    
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "Rene's blog",
      description: '这是我的博客',

      themeConfig: {
        search: { provider: 'local' },
        logo: {
          src: '/NixOS.svg',
          alt: "Rene's Avatar",
        },

        nav: [
          { text: '首页', link: '/' },
          { text: '示例', link: '/post/markdown-examples' },
        ],

        sidebar: [
          {
            text: '示例',
            items: [
              { text: 'Markdown 示例', link: '/post/markdown-examples' },
              { text: 'API 示例', link: '/post/api-examples' },
              { text: '数学演示', link: '/post/math' },
            ],
          },
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/Linear-optimize' },
        ],
      },
    },

    /* ---------- English ---------- */
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: "Rene's Blog",
      description: 'This is my blog',

      themeConfig: {
      search: { provider: 'local' },
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Examples', link: '/en/markdown-examples' },
        ],

        sidebar: [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/en/markdown-examples' },
              { text: 'API Examples', link: '/en/api-examples' },
              { text: 'Math Demo', link: '/en/math' },
            ],
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

      themeConfig: {
      search: { provider: 'local' },
        nav: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'Exemples', link: '/fr/markdown-examples' },
        ],

        sidebar: [
          {
            text: 'Exemples',
            items: [
              { text: 'Exemples Markdown', link: '/fr/markdown-examples' },
              { text: 'Exemples API', link: '/fr/api-examples' },
              { text: 'Démo Math', link: '/fr/math' },
            ],
          },
        ],
      },
    },
  },
})
