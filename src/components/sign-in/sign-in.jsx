import { useState } from "react";
import { connect } from "react-redux";

import './sign-in.scss'
import FormInPut from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { emailSignInStart, googleSignInStart } from "../../redux/user/user-actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredential, setUserCredential] = useState({
        email: '',
        password: ''
    });
    const { email, password } = userCredential;

    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredential({
            ...userCredential,
            [name]: value
        })
    }

    return (
        <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email</span>
            <form className="sign-in-form" onSubmit={handleSubmit}>
                <FormInPut
                    type="email"
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={handleChange}
                    label="email"
                    required
                />
                <FormInPut
                    type="password"
                    name="password"
                    autoComplete="off"
                    value={password}
                    onChange={handleChange}
                    label="password"
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                        Sign In with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
})

export default connect(null, mapDispatchToProps)(SignIn);