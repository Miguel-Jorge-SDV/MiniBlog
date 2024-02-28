import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlX8sctYZVaqEJ4jxpKP56td0YANruyAU",
  authDomain: "miniblog-22fa3.firebaseapp.com",
  projectId: "miniblog-22fa3",
  storageBucket: "miniblog-22fa3.appspot.com",
  messagingSenderId: "887583258225",
  appId: "1:887583258225:web:db2530475cb11f2a8d4dd0"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}