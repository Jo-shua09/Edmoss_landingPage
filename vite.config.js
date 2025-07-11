import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteFaviconsPlugin } from "vite-plugin-favicon2"; // Note: Using vite-plugin-favicon2 (maintained fork)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteFaviconsPlugin({
      logo: "./public/logo.png", // Path relative to project root
      inject: true,
      favicons: {
        appName: "EDMOSS",
        appDescription: "Business Growth Consultants",
        theme_color: "#1A365D",
        background: "#FFF",
        icons: {
          favicons: true,
          appleIcon: true,
          android: true,
          windows: false,
          appleStartup: false,
          coast: false,
          firefox: false,
          yandex: false,
        },
      },
    }),
  ],
});
