import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import  { singInWithGoogle } from '../../firebase/firebase.utils';



class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {email: '', password: ''};
    }


//Click is a jquery event handler. When the browsers receives a click event on a target, in this case "#imageGallery a", it calls the event handler, which is our anonymous function.
// Event data is capture by the browser, and you can decide to pass the event object into the function. In this example, you passed it as event, it's often common to see it passed as just simply e, in which case it becomes e.preventDefault().
//The event data is there, whether you capture it or not. It's just something handled by the javascript executed in the browser.
//in short event data is always there but you decide to pass it into a function as done below
handleSubmit = event => {
event.preventDefault();
this.setState({email: '', password: ''});
};

handleChange = event => {
    const {value, name} = event.target;
    this.setState({[name]: value});

};

    render (){
        return (
            <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput name="email" label='email' type="email" value={this.state.email} handleChange={this.handleChange} required />
               
                <FormInput name="password" label='password' type="password" value={this.state.password} handleChange={this.handleChange} required />
               
                <CustomButton type="submit" value="submit form"> Sign in </CustomButton>
                <CustomButton onClick={singInWithGoogle} value="submit form"> Sign in with Google </CustomButton>
            </form>

            </div>
        );
    }

}

export default SignIn;