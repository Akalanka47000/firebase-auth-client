import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const app = initializeApp(JSON.parse(window.atob(import.meta.env.VITE_FIREBASE_CONFIG)));

export const auth = getAuth(app);

export const googleAuthProvider = new GoogleAuthProvider();