import React from "react";
import { Link, NavLink } from "react-router-dom";

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from "../../utils/firebase/firebase";

import './header.scss'

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo />
            </Link>
            <div className="options">
                <NavLink className="option" to="/">HOME</NavLink>
                <NavLink className="option" to="/shop">SHOP</NavLink>
                {currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <NavLink className="option" to="/sign">SIGN IN</NavLink>
                }
            </div>
        </div>
    )
}

export default Header;