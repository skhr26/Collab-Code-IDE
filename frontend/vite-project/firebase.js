import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aicodeeditor-13bd2.firebaseapp.com",
  projectId: "aicodeeditor-13bd2",
  storageBucket: "aicodeeditor-13bd2.firebasestorage.app",
  messagingSenderId: "314972645923",
  appId: "1:314972645923:web:491f588905565aeeaf9f96",
  measurementId: "G-2VM11HXPRP",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const analytics = getAnalytics(app);