import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@icons': path.resolve(__dirname, 'src/components/Icons.jsx'),
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/scripts/setupTest.js',
		css: true,
	},
});
