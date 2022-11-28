import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from "../../firebase/firebaseApp";

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

const mapStateToProps = state => ({
    user: state.user.currentUser
})

export default connect(mapStateToProps)(Header);