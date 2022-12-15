import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./checkout.scss";
import { selectCartItems, selectCartItemsTotal } from "../../redux/cart/cart-selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item";

const CheckoutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
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
            cartItems.map(({ id, ...otherCartItemProps }) => (
                <CheckoutItem key={id} {...otherCartItemProps} />
            ))
        }
        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
});

export default connect(mapStateToProps, null)(CheckoutPage);