// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBQTSzXHlrIAn6ra75mKVdGZL9Oa5ogY7w",
    authDomain: "parcours-dev.firebaseapp.com",
    projectId: "parcours-dev",
    storageBucket: "parcours-dev.appspot.com",
    messagingSenderId: "760384337935",
    appId: "1:760384337935:web:a774113c9c2642606f0b7a",
    measurementId: "G-CP51RKL7F4",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth(app)
// const analytics = getAnalytics(app);

export { app, db, storage, auth };
