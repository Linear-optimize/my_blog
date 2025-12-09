import DefaultTheme from 'vitepress/theme'
import 'katex/dist/katex.min.css'
import "@catppuccin/vitepress/theme/frappe/blue.css"

import Layout from "./Layout.vue";

export default {
  extends: DefaultTheme,
  Layout,
  async enhanceApp() {
    if (!import.meta.env.SSR) {
      const { loadOml2d } = await import('oh-my-live2d');
      loadOml2d({
        models: [
          {
            path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json'
          }
        ]
      });
    }
  }
}
