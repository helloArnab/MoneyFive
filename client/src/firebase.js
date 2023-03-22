import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAU6Es_B_-OIhCg7ksn-hSwXzHr_hrDMZQ",
  authDomain: "moneyhive-f6957.firebaseapp.com",
  projectId: "moneyhive-f6957",
  storageBucket: "moneyhive-f6957.appspot.com",
  messagingSenderId: "1057446512032",
  appId: "1:1057446512032:web:7713d6ef40f13acc9910c5",
  measurementId: "G-FXFNFY5HK1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();