import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  updateProfile, 
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUPQfvahz6A3mDaYfKgS7grt79R1SMguA",
  authDomain: "linkedin-clone-a11e9.firebaseapp.com",
  projectId: "linkedin-clone-a11e9",
  storageBucket: "linkedin-clone-a11e9.appspot.com",
  messagingSenderId: "559451655672",
  appId: "1:559451655672:web:d15f9f7dd004ef6763da0d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
    db,
    collection,
    addDoc,
    query,
    orderBy,
    onSnapshot,
    auth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
}