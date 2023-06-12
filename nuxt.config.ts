// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/my-pet-projects/",
  },
  css: ["normalize.css/normalize.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/global.scss" as *;',
        },
      },
    },
  },

  modules: ["nuxt-font-loader"],
  fontLoader: {
    local: [
      {
        src: "/fonts/NotoSans.woff2",
        fallback: "sans-serif",
        family: "Noto Sans",
        weight: "300 400 700",
        variable: "notosans",
      },
    ],
  },
});
