import { Component } from "react";
import { connect } from "react-redux";

import './sign-up.scss'
import FormInPut from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { signUpStart } from "../../redux/user/user-actions";

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        const { signUpStart } = this.props;

        if (password !== confirmPassword) {
            alert("Password don't match!");
            return;
        }

        signUpStart({ email, password, displayName });
    }

    handleOnChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInPut
                        type='text'
                        name='displayName'
                        autoComplete="off"
                        value={displayName}
                        onChange={this.handleOnChange}
                        label='Display Name'
                        required
                    />
                    <FormInPut
                        type='email'
                        name='email'
                        autoComplete="off"
                        value={email}
                        onChange={this.handleOnChange}
                        label='Email: '
                        required
                    />
                    <FormInPut
                        type='password'
                        name='password'
                        autoComplete="off"
                        value={password}
                        onChange={this.handleOnChange}
                        label='Password'
                        required
                    />
                    <FormInPut
                        type='password'
                        name='confirmPassword'
                        autoComplete="off"
                        value={confirmPassword}
                        onChange={this.handleOnChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>

                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredential => dispatch(signUpStart(userCredential))
});

export default connect(null, mapDispatchToProps)(SignUp);