import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import path from "node:path";
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(import.meta.dirname, "./src") } },
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: "base-ui", test: /node_modules\/@base-ui/, priority: 20 },
            {
              name: "react",
              test: /node_modules\/(react|react-dom|scheduler)\//,
              priority: 20,
            },
            {
              name: "radix",
              test: /node_modules\/(@radix-ui|radix-ui)\//,
              priority: 20,
            },
            {
              name: "vendor",
              test: /node_modules\//,
              priority: 0,
              maxSize: 350000,
            },
          ],
        },
      },
    },
  },
});
