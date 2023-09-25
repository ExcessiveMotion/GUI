import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import svg from "@poppanator/sveltekit-svg";
import path from "path";

export default defineConfig({
    plugins: [
        sveltekit(),
        svg({
            svgoOptions: {
                multipass: true,
                plugins: [
                    {
                        name: "preset-default",
                        // by default svgo removes the viewBox which prevents svg icons from scaling
                        // not a good idea! https://github.com/svg/svgo/pull/1461
                        params: { overrides: { removeViewBox: false } },
                    },
                ],
            },
        }),
    ],
    test: {
        include: ["src/**/*.{test,spec}.{js,ts}"],
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
});
