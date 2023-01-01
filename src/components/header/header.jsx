import React from "react";
import { Link, NavLink } from "react-router-dom";
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
        <div className="header-container grid">
            <Link className="logo" to="/">
                <Logo />
            </Link>
            <div className="options">
                <NavLink className="option" to="/" end>HOME</NavLink>
                <NavLink className="option" to="/shop">SHOP</NavLink>
                {
                    currentUser
                        ? <div className="option" onClick={signOutStart}>SIGN OUT</div>
                        : <NavLink className="option" to="/sign">SIGN IN</NavLink>
                }
                <CartIcon />
            </div>
            {
                isHidden ? null : <CartDropdown />
            }
        </div>
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