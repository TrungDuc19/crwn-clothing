const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => (
        cartItem.id === cartItemToAdd.id
    ));

    if (existingCartItem) {
        return cartItems.map(cartItem => (
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        ))
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

const decreaseItemFromCart = (cartItems, cartItemToDecrease) => {
    const existingCartItem = cartItems.find(cartItem => (
        cartItem.id === cartItemToDecrease.id
    ));

    if (existingCartItem.quantity > 1) {
        return cartItems.map(cartItem => (
            cartItem.id === cartItemToDecrease.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        ))
    }

    return cartItems;
}

const removeItemFromCart = (cartItems, cartItemToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
}

export { addItemToCart, decreaseItemFromCart, removeItemFromCart };