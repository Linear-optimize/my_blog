import { defineConfig } from 'vitepress';
import texmath from 'markdown-it-texmath'


// https://vitepress.dev/reference/site-config
export default defineConfig({
    markdown: {
    config(md) {
      md.use(texmath, {
        engine: 'katex',      // ✅ 用 KaTeX
        delimiters: 'dollars',// ✅ $ / $$
        katexOptions: {
          displayMode: true,
          throwOnError: false,
        },
      })
    },
  },  
    
  title: "Rene's blog",
  description: "C'est mon blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          {text:'math demo',link:'/math'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
