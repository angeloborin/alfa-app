import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: O 'base' deve ser o nome exato do seu repositório no GitHub
  // Isso corrige o erro 404 ao procurar os arquivos JS e CSS
  base: '/alfa-app/', 
})