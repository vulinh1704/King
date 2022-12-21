// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from 'firebase/storage'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiAlmuWi1xphvIz57Wlf6ieO-kM3SG1A8",
    authDomain: "king-258f8.firebaseapp.com",
    projectId: "king-258f8",
    storageBucket: "king-258f8.appspot.com",
    messagingSenderId: "515245331588",
    appId: "1:515245331588:web:7d92711b4896a2451cded1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)