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
});
