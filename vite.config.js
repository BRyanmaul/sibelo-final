import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    server: {
        hmr: {
            host: "localhost",
        },
    },
    plugins: [
        laravel(["resources/js/app.jsx", "resources/css/app.css"]),
        react({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
            "resources/css/app.css": {
                // "file": "assets/app.0683d55b.css",
                src: "resources/css/app.css",
            },
        }),
    ],
});

// import { defineConfig } from 'vite';
// import laravel from 'laravel-vite-plugin';

// export default defineConfig(
// {
//     plugins: [
//         laravel({
//             input: [
//                 'resources/scss/style.scss',
//                 'resources/css/app.css',
//                 'resources/js/app.jsx',
//             ],
//             refresh: true,
//         }),
//     ],
// });
