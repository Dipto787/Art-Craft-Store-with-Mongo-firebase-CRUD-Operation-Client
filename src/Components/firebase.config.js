// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ4VMxb3Osdf_oSt_5-3k6TgIUs7N6Ck4",
  authDomain: "b9-assinment-10.firebaseapp.com",
  projectId: "b9-assinment-10",
  storageBucket: "b9-assinment-10.firebasestorage.app",
  messagingSenderId: "378738892845",
  appId: "1:378738892845:web:11cecd1b2267d363ac58a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let auth=getAuth(app);