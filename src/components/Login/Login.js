import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, getAuth } from "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css';
import app from "../../firebase.init";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";

const auth = getAuth(app)

function Login() {
    const [validated, setValidated] = useState(false);
    const [registered, setRegistered] = useState(false);
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleNameBlur = event => {
        setEmail(event.target.value)
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleRegisteredChange = event => {
        setRegistered(event.target.checked)
    }

    const handleFromSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            return;
        }
        if (!/(?=.*?[#?!@$%&*-])/.test(password)) {
            setError('Password Should Contain at least one special character ');
            return;
        }

        setValidated(true);
        setError('');

        if (registered) {
            signInWithEmailAndPassword(auth, email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                })
                .catch(error => {
                    console.error(error);
                    setError(error.massage);
                })
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    setEmail('');
                    setPassword('');
                    verifyEmail();
                    setUserName();
                })
                .catch(error => {
                    console.error(error);
                    setError(error.massage);
                })
        }
        event.preventDefault();
    }
    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log('email sent')
            })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {
                console.log('updating name');
            })
            .catch(error => {
                setError(error.massage);
            })
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log('Email Verification Sent')
            })
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
        <div>
            <div className="registration w-50 mx-auto mt-5">
                <h2 className="text-primary"> Please {registered ? "Login" : "Register"}!!</h2>
                <Form noValidate validated={validated} onSubmit={handleFromSubmit}>
                    {!registered && <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter Your Name" required />
                        <Form.Control.Feedback type="invalid">
                            Please Provide Your Name .
                        </Form.Control.Feedback>
                    </Form.Group>}

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Email.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Password.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onChange={handleRegisteredChange} type="checkbox" label="Already Registered ?" />
                    </Form.Group>
                    <p className="text-danger">{error}</p>
                    <Button onClick={handlePasswordReset} variant='link'> Forget Password</Button>
                    <Button variant="primary" type="submit">
                        {registered ? 'Login' : 'Register'}
                    </Button>
                    <div style={{ margin: '20px' }}>
                        <button onClick={handleGoogleSignIn}>Google Sign In</button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Login;
