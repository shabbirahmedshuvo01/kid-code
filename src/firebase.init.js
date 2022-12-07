// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzyqVi-V_Wmn8KEyUQFLxCa-6qDD1Oi8s",
    authDomain: "kids-code-9f056.firebaseapp.com",
    projectId: "kids-code-9f056",
    storageBucket: "kids-code-9f056.appspot.com",
    messagingSenderId: "821093879356",
    appId: "1:821093879356:web:a55393cd9ecdd60c7abd39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;