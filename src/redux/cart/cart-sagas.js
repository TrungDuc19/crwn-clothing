import { all, call, put, takeLatest } from "redux-saga/effects";

import UserActionTypes from "../user/user-types";
import { clearCart } from "./cart-actions";

function* cartSagas() {
    yield all([
        call(onSignOutSuccess),
    ]);
}

function* clearCartOnSignOut() {
    yield put(clearCart());
}

function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export {
    cartSagas,
    clearCartOnSignOut,
    onSignOutSuccess
}