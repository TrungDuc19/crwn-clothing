import { useState } from "react";
import { connect } from "react-redux";

import './sign-up.scss'
import FormInPut from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { signUpStart } from "../../redux/user/user-actions";

const SignUp = ({ signUpStart }) => {
    const [userCredential, setUserCredential] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const { displayName, email, password, confirmPassword } = userCredential;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Password don't match!");
            return;
        }

        signUpStart({ email, password, displayName });
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setUserCredential({
            ...userCredential,
            [name]: value
        });
    }

    return (
        <div className="sign-up">
            <h2 className="title">I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInPut
                    type='text'
                    name='displayName'
                    autoComplete="off"
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInPut
                    type='email'
                    name='email'
                    autoComplete="off"
                    value={email}
                    onChange={handleChange}
                    label='Email: '
                    required
                />
                <FormInPut
                    type='password'
                    name='password'
                    autoComplete="off"
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInPut
                    type='password'
                    name='confirmPassword'
                    autoComplete="off"
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </div>

            </form>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredential => dispatch(signUpStart(userCredential))
});

export default connect(null, mapDispatchToProps)(SignUp);