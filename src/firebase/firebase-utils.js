import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase-app";

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = doc(db, 'users', userAuth.uid);
    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()) {
        const { displayName, email } = userAuth;

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createAt: serverTimestamp(),
                ...additionalData
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    return userRef;
}

const convertCollectionsSnapshotToMap = collectionsSnapshot => {
    return collectionsSnapshot.docs.map(doc => {
        const { id, title, items } = doc.data();

        return {
            id,
            title,
            routeName: encodeURI(title.toLowerCase()),
            items
        };
    });
};

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubcribe = auth.onAuthStateChanged(userAuth => {
            unsubcribe();
            resolve(userAuth);
        }, reject)
    });
}

export {
    googleProvider,
    signInWithGoogle,
    createUserProfileDocument,
    convertCollectionsSnapshotToMap,
    getCurrentUser
};