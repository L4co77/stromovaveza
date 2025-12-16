import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // základná cesta pre GitHub Pages: https://USERNAME.github.io/stromovaveza/
  // ak bude repozitár mať iný názov, uprav '/stromovaveza/' podľa neho
  base: "/stromovaveza/",
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.ts",
  },
});


