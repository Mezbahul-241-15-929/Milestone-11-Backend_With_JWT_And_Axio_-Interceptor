import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import SocialLogin from './SocialLogin';
import { useLocation, useNavigate } from 'react-router';

const Login = () => {
    const { signInUser } = use(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // firebase sign in send 
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate(from);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Sign In now!</h1>
                <form onSubmit={handleSignIn} className="fieldset">

                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Sign in</button>
                </form>
                <SocialLogin from={from}></SocialLogin>
            </div>
        </div>
    );
};

export default Login;