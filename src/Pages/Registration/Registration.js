import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import './Registration.css';

const Registration = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [registration, setRegistration] = useState(false);
    const [user, loading, error] = useAuthState(auth);

    const from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <Form className='w-25 mx-auto'>
                <h1 className='text-center my-2'>{registration ? "Login" : "Registration"}</h1>
                <Form.Group className="mb-3" controlId="formBasicName">
                    {!registration && <Form.Control type="text" placeholder="Name" />}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    {!registration && <Form.Control type="password" placeholder="Confirm Password" />}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={() => setRegistration(!registration)} type="checkbox" label={!registration ? "Already have an account!" : "I have no account!"} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    {registration ? "Login" : "Registration"}
                </Button>
            </Form>
        </div>
    );
};
export default Registration;