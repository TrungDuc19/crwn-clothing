import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";

import './cart-dropdown.scss'
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { toggleCartHidden } from "../../redux/cart/cart-actions";

const CartDropdown = ({ cartItems, toggleCartHidden }) => {
    const navigate = useNavigate();

    const handleCLick = () => {
        navigate('/checkout');
        toggleCartHidden();
    }

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length
                    ? cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                    : <span className="cart-items--empty">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={handleCLick}>
                GO TO CHECKOUT
            </CustomButton >
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);