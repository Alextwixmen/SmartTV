import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
// https://vitejs.dev/config/
// dotenv.config();
export default defineConfig({
  plugins: [react()],
  base: "/SmartTV/",
  define: {
    "process.env.VITE_ACCESSTOKEN": JSON.stringify(
      process.env.VITE_ACCESSTOKEN
    ),
  },
});
