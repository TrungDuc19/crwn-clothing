import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import './header.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'

import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectCurrentUser } from "../../redux/user/user-selectors";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { signOutStart } from "../../redux/user/user-actions";

const Header = ({ currentUser, isHidden, signOutStart }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo />
        </Link>
        <div className="options">
            <Link className="option" to="/">HOME</Link>
            <Link className="option" to="/shop">SHOP</Link>
            {
                currentUser
                    ? <div className="option" onClick={signOutStart}>SIGN OUT</div>
                    : <Link className="option" to="/sign">SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            isHidden ? null : <CartDropdown />
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isHidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);