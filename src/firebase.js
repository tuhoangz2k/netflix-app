// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// REACT_APP_FIREBASE_AUTH_DOMAIN=netflex-app-60f94.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=netflex-app-60f94
// REACT_APP_FIREBASE_STORAGE_BUCKET=netflex-app-60f94.appspot.com
// REACT_APP_MESSAGING_SENDER=873326534427
// REACT_APP_APP_ID=1:873326534427:web:84542b588b104ce8f6fdbe
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
    appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
