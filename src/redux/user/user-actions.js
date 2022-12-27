import UserActionTypes from "./user-types";

const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

const emailSignInStart = ({ email, password }) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: { email, password }
});

const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

const signInFailure = errorMessage => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: errorMessage
});

const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
})

const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
});

const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});

const signOutFailure = errorMessage => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: errorMessage
});

const signUpStart = userCredential => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredential
});

const signUpSuccess = ({ user, additionalData }) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: { user, additionalData }
});

const signUpFailure = (errorMessage) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: errorMessage
});

export {
    googleSignInStart,
    emailSignInStart,
    signInSuccess,
    signInFailure,
    checkUserSession,
    signOutStart,
    signOutSuccess,
    signOutFailure,
    signUpStart,
    signUpSuccess,
    signUpFailure
};