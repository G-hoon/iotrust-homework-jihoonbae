import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, type PluginOption } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
	plugins: [
		react(),
		svgr({
			svgrOptions: {
				icon: true,
			},
		}),
		tailwindcss() as PluginOption
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			app: path.resolve(__dirname, './src/app'),
			pages: path.resolve(__dirname, './src/pages'),
		},
	},
});
