import { defineConfig } from "vite";
import react from "@react-dev/plugins/vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
