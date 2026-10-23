import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Relative asset paths keep the static build portable to a GitHub Pages
  // project site without assuming a repository name.
  base: "./",
  plugins: [react(), tailwindcss()],
});
