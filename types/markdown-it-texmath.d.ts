declare module 'markdown-it-texmath' {
  import type { PluginWithOptions } from 'markdown-it'

  interface TexMathOptions {
    engine?: 'katex' | 'mathjax'
    delimiters?: 'dollars' | 'brackets' | 'gitlab'
    katexOptions?: Record<string, any>
    mathjaxOptions?: Record<string, any>
  }

  const texmath: PluginWithOptions<TexMathOptions>
  export default texmath
}
