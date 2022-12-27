import ShopActionTypes from "./shop-types";

const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

const fetchCollectionsSuccess = collections => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
});

const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

export {
    fetchCollectionsStart,
    fetchCollectionsSuccess,
    fetchCollectionsFailure
};