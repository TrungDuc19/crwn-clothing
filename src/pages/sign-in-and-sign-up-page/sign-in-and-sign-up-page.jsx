import './sign-in-and-sign-up-page.scss';
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <div className='sign-in-and-sign-up-container grid'>
            <SignIn />
            <SignUp />
        </div>
    </div>
)

export default SignInAndSignUpPage;