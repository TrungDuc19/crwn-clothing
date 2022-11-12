import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebaseApp";

const createUserProfileDocument = async (userAuth, addtionalData) => {
    if (!userAuth) return;

    const userRef = doc(db, `users/${userAuth.uid}`);
    const snapShot = await getDoc(userRef);

    if (!snapShot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userRef, {
                displayName,
                email,
                createAt,
                ...addtionalData
            });
        } catch (error) {
            console.log(error);
        }
    }
    return userRef;
}

export default createUserProfileDocument;