import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDFHVGNhYM9_BsnnVIF4rKhYcND6DXC4iI",
  authDomain: "confi-tech.firebaseapp.com",
  projectId: "confi-tech",
  storageBucket: "confi-tech.appspot.com",
  messagingSenderId: "91808816764",
  appId: "1:91808816764:web:7362f623bf9424591933f9",
  measurementId: "G-198FMJBLH0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
