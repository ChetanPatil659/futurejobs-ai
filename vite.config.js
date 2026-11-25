import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { seoContent } from "./vite-plugins/seoContent";

export default defineConfig({
  plugins: [react(), tailwindcss(), seoContent()],
  server: { port: 5174 },
});
