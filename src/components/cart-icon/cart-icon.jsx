import { connect } from "react-redux";

import "./cart-icon.scss"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart-actions"

const CartIcon = ({ toggleCartHidden }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">00</span>
    </div>
);

const mapDispatchToProps = dispath => ({
    toggleCartHidden: () => dispath(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);