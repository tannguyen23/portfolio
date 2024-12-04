import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    // This use to config host
    server: {
        host: "0.0.0.0",
        port: 5173,
    },
});
