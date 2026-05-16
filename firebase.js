// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

import {
    getStorage
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-storage.js";

// Configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAaUqBNAqL9JcX_okhnE0c1U3pqpgsNA6s",
    authDomain: "photo-contest-ylann.firebaseapp.com",
    projectId: "photo-contest-ylann",
    storageBucket: "photo-contest-ylann.firebasestorage.app",
    messagingSenderId: "290922422993",
    appId: "1:290922422993:web:3ade8b3fe345ff4f8e9bf0"
};

// Initialisation
const app = initializeApp(firebaseConfig);

// Services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Google Provider
const provider = new GoogleAuthProvider();

// Exports
export {
    auth,
    db,
    storage,
    provider,
    signInWithPopup,
    signOut
};
