// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        display: "swap",
        subsets: "latin",
        families: {
          Poppins: {
            wght: ["400", "700", "500"],
          },
        },
      },
    ],
  ],
});
