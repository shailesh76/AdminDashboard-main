import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBehiVdU9X_ToW6Ro1pvkHMA0ocHhV_bRM",
  authDomain: "food-ordering-website-63a22.firebaseapp.com",
  projectId: "food-ordering-website-63a22",
  storageBucket: "food-ordering-website-63a22.appspot.com",
  messagingSenderId: "101570051381",
  appId: "1:101570051381:web:4f76f3cb1ea2926520a07c"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const storage = getStorage(app)


