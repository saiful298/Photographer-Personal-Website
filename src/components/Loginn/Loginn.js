


import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);
const Login = () => {
    const [SignInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const Navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/'
    const handleGoogleSignIn = () => {
        SignInWithGoogle()
            .then(() => {
                Navigate(from, { replace: true })
            })
    }

    return (
        <div>
            <h3>Please Login </h3>
            <div style={{ margin: '20px' }}>
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>



        </div>
    );
};

export default Login;