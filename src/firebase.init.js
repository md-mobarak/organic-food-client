// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth

// apiKey: "AIzaSyCfBwgG07M0nQT8uqjfcuf-3ST3SMegDvQ",
// authDomain: "organic-food-29953.firebaseapp.com",
// projectId: "organic-food-29953",
// storageBucket: "organic-food-29953.appspot.com",
// messagingSenderId: "1089998334994",
// appId: "1:1089998334994:web:ca26a677537054a9df3ccb"