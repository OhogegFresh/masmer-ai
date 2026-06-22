import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// Standalone Masmer AI — no Lovable dependencies.
// Deploy to Vercel, Netlify, Cloudflare, or any Node host.
// Run: npm install && npm run dev
export default defineConfig({
  plugins: [
    tanstackStart({
      // Use our custom server entry for SSR error handling
      server: { entry: "src/server" },
    }),
    tailwindcss(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});
