import React from 'react';
import './sing-in-and-sing-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sing-up/sing-up.component'

const SingInAndSignUpPage = () => (
    <div className='sing-in-and-sing-up'>
    <SignIn /><SignUp />
    </div>
    
);

export default SingInAndSignUpPage;