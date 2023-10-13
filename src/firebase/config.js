// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlX8sctYZVaqEJ4jxpKP56td0YANruyAU",
  authDomain: "miniblog-22fa3.firebaseapp.com",
  projectId: "miniblog-22fa3",
  storageBucket: "miniblog-22fa3.appspot.com",
  messagingSenderId: "887583258225",
  appId: "1:887583258225:web:db2530475cb11f2a8d4dd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}