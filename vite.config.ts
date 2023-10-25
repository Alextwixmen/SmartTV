import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
// https://vitejs.dev/config/
// dotenv.config();
// export default defineConfig({
//   plugins: [react()],
//   base: "/SmartTV/",
//   define: {
//     "process.env.VITE_ACCESSTOKEN": JSON.stringify(
//       process.env.VITE_ACCESSTOKEN
//     ),
//   },
// });

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    base: "/SmartTV/",
    define: {
      VITE_ACCESSTOKEN: JSON.stringify(env.APP_ENV),
    },
  };
});
