import { defineConfig } from 'vitepress';
import texmath from 'markdown-it-texmath';
import readingTime from "reading-time";


// https://vitepress.dev/reference/site-config
export default defineConfig({
   markdown: {
    config(md) {
      // ✅ 数学公式（KaTeX）
      md.use(texmath, {
        engine: "katex",
        delimiters: "dollars",
        katexOptions: {
          displayMode: true,
          throwOnError: false,
        },
      });

      // ✅ 阅读时间（注入 frontmatter）
      md.core.ruler.push("reading-time", (state) => {
        const text = state.src;
        const stats = readingTime(text);

        state.env.frontmatter ||= {};
        state.env.frontmatter.readingTime = {
          minutes: Math.ceil(stats.minutes),
          words: stats.words,
        };
      });
    },
  },

  // ✅ 允许 <eqn> 自定义标签（消除 Vue warn）
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === "eqn",
      },
    },
  },
    
  title: "Rene's blog",
  description: "C'est mon blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
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
