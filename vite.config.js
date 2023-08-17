import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dns from 'dns'
import { error } from 'console'
// https://vitejs.dev/config/server-options.html#server-options
dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
// export default defineConfig({
//   base: process.env.BASE_URL,
//   plugins: [react()],
//   server: {
//     port: 3000,
//   },
// })
export default defineConfig((config) => {
  const env = loadEnv(config.mode, process.cwd(), "")
  return {
    base: env.BASE_URL,
    plugins: [react()],
    server: {
      port: 3000,
    }
  }
}) 