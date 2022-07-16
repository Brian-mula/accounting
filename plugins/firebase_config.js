import { initializeApp } from "firebase/app";

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
  // Doing something with nuxtApp
  const firebaseConfig = {
    apiKey: config.apiKey,

    authDomain: config.authDomain,

    projectId: config.projectId,

    storageBucket: config.storageBucket,

    messagingSenderId: config.messagingSenderId,

    appId: config.appId,
  };

  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  console.log(app)
});
