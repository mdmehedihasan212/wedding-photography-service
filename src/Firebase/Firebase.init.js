// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcNcdk9vBCGbsSfDZl-AB9k7oPE3-Cv0E",
    authDomain: "wedding-photography-4229f.firebaseapp.com",
    projectId: "wedding-photography-4229f",
    storageBucket: "wedding-photography-4229f.appspot.com",
    messagingSenderId: "580350343411",
    appId: "1:580350343411:web:04acaec07409540feb9f86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;