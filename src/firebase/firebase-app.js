import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
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

// Firebase localhost
// if (process.env.NODE_ENV !== "production") {
//     connectAuthEmulator(auth, "http://localhost:9099");
//     connectFirestoreEmulator(db, "localhost", 8080);
// }

export { auth, db };
export default firebaseApp;

