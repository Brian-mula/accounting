import { initializeApp } from "firebase/app";

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
  // Doing something with nuxtApp
  const firebaseConfig = {
    apiKey: config.API_KEY,

    authDomain: config.AUTH_DOMAIN,

    projectId: config.PROJECT_ID,

    storageBucket: config.STORAGE_BUCKET,

    messagingSenderId: config.MESSAGING_SENDER_ID,

    appId: config.APP_ID,
  };

  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  // console.log(app)
});
