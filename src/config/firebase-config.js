// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth} from "firebase/auth"
import {
  getFirestore,
 
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU7i7yjicl071e-55drNpezAOEPT-B4UY",
  authDomain: "project-96f14.firebaseapp.com",
  projectId: "project-96f14",
  storageBucket: "project-96f14.appspot.com",
  messagingSenderId: "832845269290",
  appId: "1:832845269290:web:e060b05693402ca9837653",
  measurementId: "G-0K7KF46C4K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)