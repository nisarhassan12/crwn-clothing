import React from 'react'

import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" label="Email" handleChange={this.handleChange} value={this.state.email} required />
                    <FormInput name="password" label="Password" type="password" handleChange={this.handleChange} value={this.state.password} required />
                    <CustomButton type="submit">Submit Form</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn