import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // ✔️ exposes the dev server to your local network
    port: 5173, // optional: use a consistent port
  },
});
