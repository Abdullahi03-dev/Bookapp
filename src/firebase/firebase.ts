import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyADXJmBNbHHzT_u3vlkcOgt-Es1LciUBuM",
    authDomain: "bookapp-3b6ba.firebaseapp.com",
    projectId: "bookapp-3b6ba",
    storageBucket: "bookapp-3b6ba.firebasestorage.app",
    messagingSenderId: "490250673965",
    appId: "1:490250673965:web:9d19dbc3e08a2d44837da4",
    measurementId: "G-HBV4FW8ZBT"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, collection, query, where, getDocs, doc, setDoc };
export type {User}