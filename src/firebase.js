import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBNhmOvXpj_E0dGzH0sQQHfXkVgy_JviVY",
  authDomain: "tesla-clone-738c7.firebaseapp.com",
  projectId: "tesla-clone-738c7",
  storageBucket: "tesla-clone-738c7.appspot.com",
  messagingSenderId: "662844469908",
  appId: "1:662844469908:web:3f7a2ecb7bf19665047a81",
};

const app = initializeApp(firebaseConfig);

// const auth = firebaseApp.auth();

export default app;
