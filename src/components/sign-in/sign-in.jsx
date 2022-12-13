import { Component } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import './sign-in.scss'
import FormInPut from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth, signInWithGoogle } from "../../firebase/firebaseApp";


class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error.message);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        let { email, password } = this.state;
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email</span>
                <form className="sign-in-form" onSubmit={this.handleSubmit}>
                    <FormInPut
                        type="email"
                        name="email"
                        autoComplete="off"
                        value={email}
                        onChange={this.handleChange}
                        label="email"
                        required
                    />
                    <FormInPut
                        type="password"
                        name="password"
                        autoComplete="off"
                        value={password}
                        onChange={this.handleChange}
                        label="password"
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;