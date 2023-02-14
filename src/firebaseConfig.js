import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4c_eehIIU0da303RnvWWzixU6tzqHKN4",
    authDomain: "pokeapi-3cbc8.firebaseapp.com",
    projectId: "pokeapi-3cbc8",
    storageBucket: "pokeapi-3cbc8.appspot.com",
    messagingSenderId: "427108811929",
    appId: "1:427108811929:web:213c564342f7c9a2ef6408",
    measurementId: "G-Q83BJV3SEM"
  };
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);