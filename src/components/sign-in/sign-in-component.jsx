import React, { Component } from 'react';
import FormInput from './../form-input/form-input-component.jsx';
import CustomButton from './../custom-button/custom-button.component.jsx';
import { signInWithGoogle } from './../../firebase/firebase.utils.js';
import './sign-in.styles.scss';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = e => {
        e.preventDefault()

        this.setState({ email: '', password: '' })
    }

    handleChange = e => {
        const { value, name } = e.target

        this.setState({ [name]: value })
    }


    render() { 

        const { email, password } = this.state
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={email}
                        label='email'
                        handleChange={this.handleChange}
                        required 
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={password}
                        label='password'
                        handleChange={this.handleChange}
                        required
                    />

                    <CustomButton type='submit' >Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} >Sign in with Google</CustomButton>
                </form>
            </div>
        );
    }
}
 
export default SignIn;