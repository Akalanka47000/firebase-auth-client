import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp(window.atob(import.meta.env.VITE_FIREBASE_CONFIG));

export const auth = getAuth(app);