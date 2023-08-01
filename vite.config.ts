import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";

const __dirname = resolve();

// https://vitejs.dev/config/
export default defineConfig({
  server: { open: true },
  resolve: {
    alias: {
      "~": resolve(__dirname, "./"),
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [vue()],
  build: {
    outDir: resolve(__dirname, "./packages/compiler-vue/dist"),
    lib: {
      entry: resolve(__dirname, "./packages/compiler-vue/index.ts"),
      formats: ["es", "cjs"],
      fileName(format) {
        if (format === "es") {
          return "compiler-vue.esm-browser.js";
        } else {
          return "compiler-vue.cjs.js";
        }
      },
    },
  },
});
