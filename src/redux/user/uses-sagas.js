import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { getDoc } from "firebase/firestore";
import { takeLatest, put, call, all } from "redux-saga/effects";

import { auth } from "../../firebase/firebase-app";
import { createUserProfileDocument, getCurrentUser, googleProvider } from "../../firebase/firebase-utils";
import { signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess } from "./user-actions";
import UserActionTypes from "./user-types";

function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ]);
}

function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield getDoc(userRef);
        yield put(signInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }));
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

function* signInWithGoogle() {
    try {
        const { user } = yield signInWithPopup(auth, googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield signInWithEmailAndPassword(auth, email, password);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield getDoc(userRef);
        yield put(signInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }));
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* userAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error.message));
    }
}

function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, userAuthenticated);
}

function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error.message));
    }
}

function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

function* signUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield createUserWithEmailAndPassword(auth, email, password);
        yield put(signUpSuccess({ user, additionalData: { displayName } }));
    } catch (error) {
        yield put(signUpFailure(error.message));
    }
}

function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

function* signInAfterSignUp({ payload: { user, additionalData } }) {
    yield getSnapshotFromUserAuth(user, additionalData);
}

function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export {
    userSagas,
    signInWithGoogle,
    signInWithEmail,
    onGoogleSignInStart,
    onEmailSignInStart,
    // userAuthenticated,
    // onCheckUserSession,
    signOut,
    onSignOutStart,
    signUp,
    onSignUpStart,
    signInAfterSignUp,
    onSignUpSuccess
};