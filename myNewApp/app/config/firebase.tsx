// app/config/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGApOXdagJLKmy4CpTHaGHmVFy3TCSkEg",
  authDomain: "microlink-74d91.firebaseapp.com",
  projectId: "microlink-74d91",
  storageBucket: "microlink-74d91.firebasestorage.app",
  messagingSenderId: "769572675431",
  appId: "1:769572675431:web:771921eb23122260ffd9c2",
  measurementId: "G-QQF4X44PWZ",
};

const app = initializeApp(firebaseConfig);

// Initialize auth - AsyncStorage persistence is handled automatically in React Native
export const auth = getAuth(app);

export default app;
