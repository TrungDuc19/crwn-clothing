import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "./firebaseApp";

const createUserProfileDocument = async (userAuth, addtionalData) => {
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
                ...addtionalData
            });
        } catch (error) {
            console.log(error);
        }
    }
    return userRef;
}

export default createUserProfileDocument;