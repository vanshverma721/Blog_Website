// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCuiiGlwkhOsyY6CgIHSq_TdajhRa1WQ9c",
    authDomain: "fir-blog-79025.firebaseapp.com",
    projectId: "fir-blog-79025",
    storageBucket: "fir-blog-79025.appspot.com",
    messagingSenderId: "445752664843",
    appId: "1:445752664843:web:b8873094ec7931d84a780e",
    measurementId: "G-LDCL0L6PF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);