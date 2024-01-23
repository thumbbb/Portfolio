// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from "vite-plugin-eslint"
export default defineNuxtConfig({
    target: 'static',
    router: {
        base: '/thumb/'
    },
    app: {
        cdnURL: process.env.CDN_URL
    },
    devtools: { enabled: true },
    modules: ["nuxt-swiper", "@pinia/nuxt"],
    css: ["@/assets/styles/main.scss"],
    alias: {
        "@images": process.env.IMG_BASE_URL
    },
    vite: {
        plugins: [eslintPlugin()],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @import "@/assets/styles/abstracts/_variables.scss";
                        @import "@/assets/styles/abstracts/_mixins.scss";
                    `
                }
            }
        }
    }
})
