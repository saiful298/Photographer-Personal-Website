import React from 'react';
import './Register.css'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const Login = () => {
        navigate('/login');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;


        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='registration'>
            <h3 className='register' >Register Now </h3>
            <br />
            <Form onSubmit={handleRegister} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" required />
                    <Form.Text className="text-muted">
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Email.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Password.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">

                </Form.Group>
                <Button type="submit">Submit</Button><br /><br />
                <span className='text-danger' onClick={Login}><p className='create-new'>Already Have An Account</p></span>

            </Form>
        </div>
    );
};

export default Register;