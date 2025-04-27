import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
    ],
    server: {
        https: true,
        host: '0.0.0.0',
    },
    // This ensures asset URLs use the same protocol as the page
    build: {
        manifest: true,
        // This makes Vite respect the APP_URL from your .env file
        base: process.env.APP_URL ? '/' : '',
        rollupOptions: {
            output: {
                // Ensures filenames are consistent in production
                entryFileNames: `assets/[name]-[hash].js`,
                chunkFileNames: `assets/[name]-[hash].js`,
                assetFileNames: `assets/[name]-[hash].[ext]`
            }
        }
    }
});
