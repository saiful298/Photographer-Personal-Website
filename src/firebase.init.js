// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiXKtpZEf5PdqjPtDy6BdpnxlMVXAATh0",
    authDomain: "router-firebase-integrat-81a9b.firebaseapp.com",
    projectId: "router-firebase-integrat-81a9b",
    storageBucket: "router-firebase-integrat-81a9b.appspot.com",
    messagingSenderId: "482898909334",
    appId: "1:482898909334:web:43aa5d380d20e6a4914ab7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;