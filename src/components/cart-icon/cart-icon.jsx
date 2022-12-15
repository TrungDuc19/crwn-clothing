import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./cart-icon.scss"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart-actions"
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispath => ({
    toggleCartHidden: () => dispath(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);