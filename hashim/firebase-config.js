import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAoC51qunH31opTG50e92KNFl_fRsFIqqM",
  authDomain: "smarthealth-85876.firebaseapp.com",
  projectId: "smarthealth-85876",
  storageBucket: "smarthealth-85876.firebasestorage.app",
  messagingSenderId: "706581803098",
  appId: "1:706581803098:web:12adcccf9074c95092a863",
  measurementId: "G-RF69MDJWJ6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { app, auth, db, provider };
