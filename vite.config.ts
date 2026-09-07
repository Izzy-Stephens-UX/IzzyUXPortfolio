import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  // Set VITE_BASE_URL in your environment for project GitHub Pages sites
  // e.g. VITE_BASE_URL=/portfolio/ pnpm build
  // Leave unset (or set to /) for a user/org site (username.github.io)
  base: process.env.VITE_BASE_URL ?? '/',

  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    // Raise the inline-asset threshold so small SVGs/images become data URIs
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          // React runtime in its own long-cached vendor chunk
          'vendor-react': ['react', 'react-dom'],
          // Motion in its own chunk — only loaded if the user adds animations
          'vendor-motion': ['motion'],
        },
      },
    },
  },
})
