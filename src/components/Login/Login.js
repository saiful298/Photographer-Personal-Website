import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


const auth = getAuth(app);
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }
    const Register = event => {
        navigate('/register')
    }



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

        <div className="Login w-50 mx-auto mt-5">
            <h3>Please Login </h3>
            <div style={{ margin: '20px' }}>
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
            <h2 className="text-primary"> </h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Email.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Password.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">

                </Form.Group>
                <Button type="submit">Submit</Button><br /><br />
                <span className='text-danger' onClick={Register}><p className='create-new'>Create New Account</p></span>
            </Form>
        </div>
    );
};

export default Login;