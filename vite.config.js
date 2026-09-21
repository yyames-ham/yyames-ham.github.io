import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "/",

  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        about: resolve(import.meta.dirname, "about.html"),
        experience: resolve(import.meta.dirname, "experience.html"),
        education: resolve(import.meta.dirname, "education.html"),
        projects: resolve(import.meta.dirname, "projects.html"),
      },
    },
  },
});