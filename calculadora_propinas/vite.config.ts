import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
//tailwindcss se importa la clase y tambien tenemos que instalar sus dependencias
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
