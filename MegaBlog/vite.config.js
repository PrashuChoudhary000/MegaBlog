// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//     react()
//      ],
//   //     optimizeDeps: {
//   //   exclude: ['@tinymce/miniature']
//   // }
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      jsxRuntime: 'automatic' // Recommended for React 18+
    })
  ],
  build: {
    outDir: 'dist', // Explicit output directory
    emptyOutDir: true, // Clear the directory before build
    sourcemap: true // Helps with debugging in production
  },
  server: {
    port: 3000, // Default port for Vite
    strictPort: true // Don't try other ports if 3000 is taken
  },
  preview: {
    port: 3000 // Same as server port
  }
})
