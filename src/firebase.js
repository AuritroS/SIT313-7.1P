import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAtz-7U-jFERnUb6NU0-VeGezZlW_BFa8k",
  authDomain: "deakin-app-7d1a8.firebaseapp.com",
  projectId: "deakin-app-7d1a8",
  storageBucket: "deakin-app-7d1a8.firebasestorage.app",
  messagingSenderId: "1022319390737",
  appId: "1:1022319390737:web:94b258e6bd9310906cc1b0",
  measurementId: "G-5J45YH0H4N",
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);


const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });


export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const createAuthUserWithEmailAndPassword = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const signInAuthUserWithEmailAndPassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);


export const createUserDocFromAuth = async (userAuth, additionalData = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const snap = await getDoc(userDocRef);

  if (!snap.exists()) {
    const { email } = userAuth;
    const createdAt = new Date();
    await setDoc(userDocRef, { email, createdAt, ...additionalData });
  }
  return userDocRef;
};
