import React from 'react';
import FormImport from '../formInput/formInput';
import CustomButton from '../customButton/customButton';
import { signInWithGoogle } from '../../firebase/firebase';
import './signIn.scss';

class SignIn extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render () {
        return (
            <div className='signIn'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
    
                <form>
                    <FormImport 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='email'
                        required
                    />
                    <FormImport 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type="submit"> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign in with google </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;

