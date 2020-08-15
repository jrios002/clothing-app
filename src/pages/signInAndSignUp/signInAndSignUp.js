import React from 'react';
import SignIn from '../../components/signIn/signIn';
import SignUp from '../../components/signUp/signUp';
import './signInAndSignUp.scss';

const SignInAndSignUpPage = () => (
    <div className='signInAndSignUp'>
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;