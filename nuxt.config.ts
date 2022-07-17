import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available within server-side
    api_key:process.env.API_KEY,
    auth_domain:process.env.AUTH_DOMAIN,
    project_id:process.env.PROJECT_ID,
    storage_bucket:process.env.STORAGE_BUCKET,
    messaging_sender_id:process.env.STORAGE_BUCKET,
    app_id:process.env.APP_ID,
    // Keys within public, will be also exposed to the client-side
    public: {
    api_key:process.env.API_KEY,
    auth_domain:process.env.AUTH_DOMAIN,
    project_id:process.env.PROJECT_ID,
    storage_bucket:process.env.STORAGE_BUCKET,
    messaging_sender_id:process.env.STORAGE_BUCKET,
    app_id:process.env.APP_ID,
    }
  },
    css: ["~/assets/css/style.css"],
    build: {
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
