import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

function localFileCompatibleHtml(): Plugin {
  return {
    name: 'local-file-compatible-html',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const html = bundle['index.html']

      if (html?.type === 'asset' && typeof html.source === 'string') {
        const moduleScript = /<script type="module" crossorigin>([\s\S]*?)<\/script>/
        const scriptContents = html.source.match(moduleScript)?.[1]

        if (scriptContents) {
          html.source = html.source
            .replace(moduleScript, '')
            .replace('</body>', () => `<script>${scriptContents}</script></body>`)
        }
      }
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    viteSingleFile(),
    localFileCompatibleHtml(),
  ],
  base: './',
})
