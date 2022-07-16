import { initializeApp } from "firebase/app";

export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp
  const firebaseConfig = {
    apiKey: "AIzaSyDFlIZOkQYbKSMnJ50kKafAAVYEEvI5j2o",

    authDomain: "accounting-d269f.firebaseapp.com",

    projectId: "accounting-d269f",

    storageBucket: "accounting-d269f.appspot.com",

    messagingSenderId: "510889493202",

    appId: "1:510889493202:web:436095db35fe01ce63a30b",
  };

  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  console.log(app)
});
