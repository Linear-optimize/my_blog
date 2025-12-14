import DefaultTheme from 'vitepress/theme'
import 'katex/dist/katex.min.css'
import "@catppuccin/vitepress/theme/frappe/blue.css"
import './var.css'
import './code-block.css'
import Layout from "./Layout.vue";

export default {
  extends: DefaultTheme,
  Layout,
   async enhanceApp() {
    if (!import.meta.env.SSR) {
      const { wlLive2d } = await import('wl-live2d');
      wlLive2d({
        models: [
          {
            path: 'https://fastly.jsdelivr.net/gh/Eikanya/Live2d-model/%E5%B4%A9%E5%9D%8F%E5%AD%A6%E5%9B%AD2/yiselin/model.json',
            scale: 0.7
          },
          {
            path: 'https://fastly.jsdelivr.net/gh/Eikanya/Live2d-model/%E5%B0%91%E5%A5%B3%E5%89%8D%E7%BA%BF%20girls%20Frontline/live2dold/old/kp31/normal/model.json',
            scale: 0.5
          },
          {
            path:'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/%E7%A2%A7%E8%93%9D%E8%88%AA%E7%BA%BF%20Azue%20Lane/Azue%20Lane(JP)/aidang_2/aidang_2.model3.json',
            scale:0.5
          },
        ]
      });
    }
  }
}
