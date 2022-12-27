import { takeEvery, call, put, all } from "redux-saga/effects";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { convertCollectionsSnapshotToMap } from "../../firebase/firebase-utils";

import { db } from "../../firebase/firebase-app";
import { fetchCollectionsFailure, fetchCollectionsSuccess } from "./shop-actions";
import ShopActionTypes from "./shop-types";

function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ]);
}

function* fetchCollectionsAsync() {
    try {
        const collectionsRef = yield query(collection(db, 'collections'), orderBy('id'));
        const collectionsSnapshot = yield getDocs(collectionsRef);
        const collections = yield call(convertCollectionsSnapshotToMap, collectionsSnapshot);
        yield put(fetchCollectionsSuccess(collections));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

function* fetchCollectionsStart() {
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}

export {
    shopSagas,
    fetchCollectionsAsync,
    fetchCollectionsStart
};