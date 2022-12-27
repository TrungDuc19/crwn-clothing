import CartActionTypes from "./cart-types";

const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

const addItemToCart = item => ({
    type: CartActionTypes.ADD_ITEM_TO_CART,
    payload: item
});

const decreaseItemFromCart = item => ({
    type: CartActionTypes.DECREASE_ITEM_FROM_CART,
    payload: item
});

const removeItemFromCart = item => ({
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
});

const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
});

export {
    toggleCartHidden,
    addItemToCart,
    decreaseItemFromCart,
    removeItemFromCart,
    clearCart
};