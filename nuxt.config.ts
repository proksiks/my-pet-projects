import svgLoader from 'vite-svg-loader'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/my-pet-projects/",
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'ru',
      },
    }
  },
  css: ["normalize.css/normalize.css"],
  vite: {
    plugins: [
      svgLoader(),
    ],
  },
  modules: ["nuxt-font-loader", "@nuxt/image"],
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