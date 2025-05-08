import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// ✅ Correct config with base + plugins
export default defineConfig({
  base: '/Casa-Coziei/',
  plugins: [react(), tailwindcss()],
});
