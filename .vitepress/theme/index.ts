import DefaultTheme from 'vitepress/theme'
import 'katex/dist/katex.min.css'
import "@catppuccin/vitepress/theme/frappe/blue.css"

import Layout from "./Layout.vue";

export default {
  extends: DefaultTheme,
  Layout,
}
