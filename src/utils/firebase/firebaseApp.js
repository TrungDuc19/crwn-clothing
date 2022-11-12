import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBzcQYpuYFOgiO7yKmfU-aPdIKjX1VcM0g",
    authDomain: "crwn-db-25ba3.firebaseapp.com",
    projectId: "crwn-db-25ba3",
    storageBucket: "crwn-db-25ba3.appspot.com",
    messagingSenderId: "318466435542",
    appId: "1:318466435542:web:4078e8ebe8e44a97f65c77",
    measurementId: "G-EDKND8571B"
};
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
const signInWithGoogle = () => signInWithPopup(auth, provider);

export { auth, db, signInWithGoogle };
export default firebaseApp;

