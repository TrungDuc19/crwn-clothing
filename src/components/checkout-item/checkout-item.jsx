import { connect } from "react-redux";

import "./checkout-item.scss";
import { addItemToCart, decreaseItemFromCart, removeItemFromCart } from "../../redux/cart/cart-actions";

const CheckoutItem = ({ cartItem, addItemToCart, decreaseItemFromCart, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className="checkout-item checkout-row">
            <div className="image-container checkout-col">
                <img src={imageUrl} alt="item" />
            </div>
            <div className="name checkout-col">{name}</div>
            <div className="quantity checkout-col">
                <span className="arrow" onClick={() => decreaseItemFromCart(cartItem)}>&#10094;</span>
                <span className="value">{quantity}</span>
                <span className="arrow" onClick={() => addItemToCart(cartItem)}>&#10095;</span>
            </div>
            <div className="price checkout-col">{price}</div>
            <div className="remove-btn checkout-col" onClick={() => removeItem(cartItem)}>&#10006;</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item)),
    decreaseItemFromCart: item => dispatch(decreaseItemFromCart(item)),
    removeItem: item => dispatch(removeItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);