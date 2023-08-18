import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCntkdvVjcv6VepQvfw4koR1OZuz7__Qu4",
  authDomain: "reactjs-b9a34.firebaseapp.com",
  projectId: "reactjs-b9a34",
  storageBucket: "reactjs-b9a34.appspot.com",
  messagingSenderId: "30803724011",
  appId: "1:30803724011:web:b7f20ac1aeeab5ea51e0ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);