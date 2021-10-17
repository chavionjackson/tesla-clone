import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyBNhmOvXpj_E0dGzH0sQQHfXkVgy_JviVY",
  authDomain: "tesla-clone-738c7.firebaseapp.com",
  projectId: "tesla-clone-738c7",
  storageBucket: "tesla-clone-738c7.appspot.com",
  messagingSenderId: "662844469908",
  appId: "1:662844469908:web:3f7a2ecb7bf19665047a81",
};

const app = initializeApp(firebaseConfig);
// const auth = app.auth()
const db = getFirestore(app)

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// const registerWithEmailAndPassword = async (name, email, password) => {
//   try {
//     const res = await createUserWithEmailAndPassword(email, password);
//     const user = res.user;
//     await db.collection("users").add({
//       uid: user.uid,
//       name,
//       authProvider: "local",
//       email,
//     });
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };

// const logout = () => {
//   auth.signOut();
// };



export {
  db,
  signInWithEmailAndPassword,
};
