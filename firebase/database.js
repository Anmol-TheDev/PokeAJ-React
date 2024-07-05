import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDePMMCVQ5zgfFBLGMUANaxGjoj9Gr4ZpU",
  authDomain: "poke-data-go.firebaseapp.com",
  projectId: "poke-data-go",
  storageBucket: "poke-data-go.appspot.com",
  messagingSenderId: "306367038875",
  appId: "1:306367038875:web:ff250e1fa14184e3c20d3e"
};

const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
