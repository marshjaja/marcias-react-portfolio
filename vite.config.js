import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/marcias-react-portfolio/",
	build: { outDir: "./build" },
	plugins: [react()],
});
