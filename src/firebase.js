// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxsR15cnZu17vitpYDwMYyd0UAtt06DEo",
  authDomain: "disneyplus-clone-b5793.firebaseapp.com",
  projectId: "disneyplus-clone-b5793",
  storageBucket: "disneyplus-clone-b5793.appspot.com",
  messagingSenderId: "1079627427471",
  appId: "1:1079627427471:web:55d7015673158b6dc08afa"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;