import { all, call } from "redux-saga/effects";
import { cartSagas } from "./cart/cart-sagas";

import { shopSagas } from "./shop/shop-sagas"
import { userSagas } from "./user/uses-sagas";

function* rootSaga() {
    yield all([
        call(cartSagas),
        call(shopSagas),
        call(userSagas)
    ]);
};

export default rootSaga;