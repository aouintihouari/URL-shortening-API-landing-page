import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "https://cleanuri.com", // Target URL for the API
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove `/api` prefix when forwarding
        secure: false, // Optional if the target server is HTTP
      },
    },
  },
});
