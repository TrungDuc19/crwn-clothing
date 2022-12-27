import { Component } from "react";
import { connect } from "react-redux";

import './sign-in.scss'
import FormInPut from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { emailSignInStart, googleSignInStart } from "../../redux/user/user-actions";


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
        const { emailSignInStart } = this.props;

        emailSignInStart(email, password);
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        let { email, password } = this.state;
        const { googleSignInStart } = this.props;
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
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                            Sign In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
})

export default connect(null, mapDispatchToProps)(SignIn);