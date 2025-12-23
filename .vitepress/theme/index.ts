import DefaultTheme from 'vitepress/theme'
import 'katex/dist/katex.min.css'
import "@catppuccin/vitepress/theme/frappe/blue.css"
// import './var.css'
import './code-block.css'
import Layout from "./Layout.vue";
import './transparent.css'

export default {
  extends: DefaultTheme,
  Layout,
  async enhanceApp() {
    if (!import.meta.env.SSR) {
      const { wlLive2d } = await import('wl-live2d');
      wlLive2d({
        models: [
          {
            path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/%E7%A2%A7%E8%93%9D%E8%88%AA%E7%BA%BF%20Azue%20Lane/Azue%20Lane(JP)/deyizhi_3/deyizhi_3.model3.json',
            scale: 0.5
          },

          {
            path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/%E7%A2%A7%E8%93%9D%E8%88%AA%E7%BA%BF%20Azue%20Lane/Azue%20Lane(JP)/aidang_2/aidang_2.model3.json',
            scale: 0.5
          },
          {
            path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/%E7%A2%A7%E8%93%9D%E8%88%AA%E7%BA%BF%20Azue%20Lane/Azue%20Lane(JP)/dafeng_2/dafeng_2.model3.json',
            scale: 0.3
          },
        ]
      });
    }
  }
}
