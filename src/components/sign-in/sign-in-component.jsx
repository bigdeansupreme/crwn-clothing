import React, { Component } from 'react';
import FormInput from './../form-input/form-input-component.jsx';
import CustomButton from './../custom-button/custom-button.component.jsx';
import { auth, signInWithGoogle } from './../../firebase/firebase.utils.js';
import './sign-in.styles.scss';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit =  async e => {
        e.preventDefault()
        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error)
        }

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
                    <div className='buttons'>
                        <CustomButton type='submit' >Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default SignIn;