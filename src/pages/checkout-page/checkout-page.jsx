import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./checkout-page.scss";
import { selectCartItems, selectCartItemsTotal } from "../../redux/cart/cart-selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button";

const CheckoutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-page-container grid">
            <div className="checkout-header checkout-row">
                <div className="header-block checkout-col">
                    <span className="">PRODUCT</span>
                </div>
                <div className="header-block checkout-col">
                    <span className="">DESCRIPTION</span>
                </div>
                <div className="header-block checkout-col">
                    <span className="">QUANTITY</span>
                </div>
                <div className="header-block checkout-col">
                    <span className="">PRICE</span>
                </div>
                <div className="header-block checkout-col">
                    <span className="">REMOVE</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
            <div className="total">TOTAL: ${total}</div>
            <div className="test-warning">
                *Please use the following for test credit card payments*
                <br />
                VISA: 4242 4242 4242 4242
                <br />
                Exp: Any Future Date - CW: Any 3 Digits
            </div>
            <StripeCheckoutButton price={total} />
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
});

export default connect(mapStateToProps, null)(CheckoutPage);