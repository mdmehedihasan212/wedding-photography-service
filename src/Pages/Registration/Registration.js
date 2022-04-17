import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import './Registration.css';

const Registration = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [registration, setRegistration] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [
        createUserWithEmailAndPassword,
        createUser,
        createLoading,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [
        signInWithEmailAndPassword,
        signInUser,
        signInloading,
        signInerror,
    ] = useSignInWithEmailAndPassword(auth);

    const from = location.state?.from?.pathname || "/";
    if (createUser || signInUser) {
        navigate(from, { replace: true });
    }

    const GetUserEmail = event => {
        setUserInfo({ ...userInfo, email: event.target.value });
    }

    const GetUserPassword = event => {
        setUserInfo({ ...userInfo, password: event.target.value });
    }

    const FormSubmit = event => {
        event.preventDefault();

        if (!registration) {
            createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        }
        else {
            signInWithEmailAndPassword(userInfo.email, userInfo.password);
        }
    }

    return (
        <div>
            <Form onSubmit={FormSubmit} className='w-25 mx-auto'>
                <h1 className='text-center m-4'>{registration ? "Login" : "Registration"}</h1>
                <Form.Group className="mb-3" controlId="formBasicName">
                    {!registration && <Form.Control type="text" placeholder="Name" />}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onChange={GetUserEmail} type="email" placeholder="Email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onChange={GetUserPassword} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    {!registration && <Form.Control type="password" placeholder="Confirm Password" required />}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={() => setRegistration(!registration)} type="checkbox" label={!registration ? "Already have an account!" : "I have no account!"} />
                </Form.Group>
                {createError && <p className='text-danger'>{createError.message}</p>}
                {createUser && <p className='text-success'>User create successfully</p>}
                {signInUser && <p className='text-success'>User login successfully</p>}
                <Button variant="primary" type="submit">
                    {registration ? "Login" : "Registration"}
                </Button>
            </Form>
        </div>
    );
};
export default Registration;