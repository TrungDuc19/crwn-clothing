import ShopActionTypes from "./shop-types";

const INIT_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: null
};

const shopReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                isFetching: false,
                errorMessage: null
            }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}

export default shopReducer;