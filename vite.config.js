import { fileURLToPath, URL } from "node:url"

import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  let config = {
    plugins: [vue()],
    root: env.VITE_ROOT_URL,
    base: env.VITE_BASE_URL,
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      },
    },
    server: {
      host: "0.0.0.0",
      port: 6060,
      strictPort: true,
    },
    build: {
      target: "modules",
      outDir: env.VITE_OUTDIR_URL,
      emptyOutDir: true,
      assetsDir: "assets",
      minify: "terser",
    },
  }

  // console.log(config)
  return defineConfig(config)
}
