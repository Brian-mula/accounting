import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  
  runtimeConfig: {
    // The private keys which are only available within server-side
    API_KEY:process.env.API_KEY,
    AUTH_DOMAIN:process.env.AUTH_DOMAIN,
    PROJECT_ID:process.env.PROJECT_ID,
    STORAGE_BUCKET:process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID:process.env.STORAGE_BUCKET,
    APP_ID:process.env.APP_ID,
    // Keys within public, will be also exposed to the client-side
    public: {
      API_KEY:process.env.API_KEY,
      AUTH_DOMAIN:process.env.AUTH_DOMAIN,
      PROJECT_ID:process.env.PROJECT_ID,
      STORAGE_BUCKET:process.env.STORAGE_BUCKET,
      MESSAGING_SENDER_ID:process.env.STORAGE_BUCKET,
      APP_ID:process.env.APP_ID,
    }
  },
    css: [
      '@fortawesome/fontawesome-svg-core/styles.css',
      "~/assets/css/style.css"],
   
    build: {
      
      transpile:[
        '@fortawesome/vue-fontawesome',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/pro-solid-svg-icons',
        '@fortawesome/free-brands-svg-icons'
      ],
        postcss: {
          postcssOptions: {
            plugins: {
              tailwindcss: {},
              autoprefixer: {},
            },
          },
        },
      },

})
