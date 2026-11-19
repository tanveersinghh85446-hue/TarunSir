import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const siteUrl = (env.VITE_SITE_URL || "").replace(/\/$/, "");

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        // Fills the link-preview (og:) URLs in index.html.
        // If VITE_SITE_URL is not set, those tags are removed instead of
        // shipping a wrong placeholder address.
        name: "site-url",
        transformIndexHtml(html) {
          if (siteUrl) return html.replaceAll("%SITE_URL%", siteUrl);
          return html.replace(/^.*%SITE_URL%.*\r?\n/gm, "");
        },
      },
    ],
  };
});
