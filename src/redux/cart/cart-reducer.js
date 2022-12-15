import CartActionTypes from "./cart-types";
import { addItemToCart, decreaseItemFromCart, removeItemFromCart } from "./cart-utils";

const INIT_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CartActionTypes.DECREASE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: decreaseItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;