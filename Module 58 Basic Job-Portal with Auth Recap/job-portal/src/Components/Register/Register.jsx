import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import lottiefile1 from '../../assets/lottiefiles/register.json';
import Lottie from 'lottie-react';
import SocialLogin from '../Login/SocialLogin';

const Register = () => {

    const { createUser } = useContext(AuthContext);
    console.log(createUser);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // password validation: 
        // show password validation error
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    return (
        <div className="w-11/12 mt-10 card bg-base-100 mx-auto shrink-0 shadow-2xl grid grid-cols-2">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Sign Up now!</h1>

                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Signup</button>
                </form>
                <SocialLogin></SocialLogin>
            </div>
            <div>
                <Lottie style={{ width: '400px' }} animationData={lottiefile1} loop={true} />
            </div>
        </div>
    );
};

export default Register;
