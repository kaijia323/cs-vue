import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
import dts from "vite-plugin-dts";

const __dirname = resolve();

// console.log(process.env.NODE_ENV === "development");

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: { open: true },
  resolve: {
    alias: {
      "~": resolve(__dirname, "./"),
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [
    vue(),
    dts({
      // entryRoot: resolve(__dirname, "./packages/compiler-vue"),
      include: ["packages/**/*.ts", "packages/**/*.d.ts"],
      rollupTypes: true,
      insertTypesEntry: true,
    }),
  ],
  esbuild: {
    drop:
      process.env.NODE_ENV === "development"
        ? undefined
        : ["console", "debugger"],
  },
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
}));
