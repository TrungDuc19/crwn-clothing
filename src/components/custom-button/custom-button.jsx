import React from "react";

import './custom-button.scss'

const CustomButton = (props) => {
    const { children, isGoogleSignIn, ...otherProps } = props;
    return (
        <button className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''} `} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;