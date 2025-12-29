import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Plugin para resolver imports figma:asset como URLs externas
function figmaAssetPlugin() {
  return {
    name: 'figma-asset-plugin',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        // Retorna um ID externo que será tratado como URL
        return { id, external: true }
      }
      return null
    },
    load(id: string) {
      if (id.startsWith('figma:asset/')) {
        // Retorna uma string vazia como placeholder
        // Em produção, essas imagens serão carregadas via ImageWithFallback
        return `export default "";`
      }
      return null
    }
  }
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    figmaAssetPlugin(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      // Externaliza imports figma:asset para não quebrar o build
      external: [/^figma:asset\//],
    },
  },
})