import React from "react";

import FormInPut from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { signInWithGoogle } from "../../utils/firebase/firebase";

import './sign-in.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        });
    }
    handleOnChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInPut
                        type="email"
                        name="email"
                        autoComplete="on"
                        value={this.state.email}
                        onChange={this.handleOnChange}
                        label="email"
                        required
                    />
                    <FormInPut
                        type="password"
                        name="password"
                        autoComplete="on"
                        value={this.state.password}
                        onChange={this.handleOnChange}
                        label="password"
                        required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;