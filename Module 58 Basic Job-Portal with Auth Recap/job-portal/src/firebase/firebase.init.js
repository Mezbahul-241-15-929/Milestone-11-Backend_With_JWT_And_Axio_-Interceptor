// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3pQiQ-bMJB41y8HWIHjP6rJ0FeTdMBVU",
    authDomain: "job-portal-2ec07.firebaseapp.com",
    projectId: "job-portal-2ec07",
    storageBucket: "job-portal-2ec07.firebasestorage.app",
    messagingSenderId: "573166223473",
    appId: "1:573166223473:web:1378dd208bb9b3f9009bd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);