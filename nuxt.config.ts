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

  modules: ["@nuxtjs/google-fonts", "shadcn-nuxt", "@nuxtjs/apollo"],
  googleFonts: {
    display: "swap",
    subsets: "latin",
    families: {
      Poppins: {
        wght: ["400", "700", "500"],
      },
    },
  },
  shadcn: {
    componentDir: "./components/ui",
    prefix: "",
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://graphql-pokeapi.graphcdn.app/",
      },
    },
  },
});
