import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import SocialSignUp from './SocialSignUp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [registration, setRegistration] = useState(false);
    const [error, setError] = useState("");
    const [userInfo, setUserInfo] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [createUserWithEmailAndPassword, createUser, createError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [signInWithEmailAndPassword, signInUser] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (createUser || signInUser) {
            navigate(from, { replace: true });
        }
    }, [createUser, signInUser])

    const GetUserEmail = event => {
        setUserInfo({ ...userInfo, email: event.target.value });
    }

    const GetUserPassword = event => {
        setUserInfo({ ...userInfo, password: event.target.value });
    }

    const GetUserConfirmPassword = event => {
        setUserInfo({ ...userInfo, confirmPassword: event.target.value });
    }

    const FormSubmit = event => {
        event.preventDefault();

        if (!registration) {

            if (userInfo.password !== userInfo.confirmPassword) {
                setError("Password don't match")
                return;
            }
            createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        }
        else {
            signInWithEmailAndPassword(userInfo.email, userInfo.password);
        }
    }

    const PasswordResetEmail = () => {
        sendPasswordResetEmail(userInfo.email);
        toast('Sent Password Reset Email');
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
                    {!registration && <Form.Control onChange={GetUserConfirmPassword} type="password" placeholder="Confirm Password" required />}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={() => setRegistration(!registration)} type="checkbox" label={!registration ? "Already have an account!" : "I have no account!"} />
                </Form.Group>
                {registration && <Link onClick={PasswordResetEmail} to={'/registration'}>Are you forget password?</Link>}
                <p className='text-danger'>{error}</p>
                {createError && <p className='text-danger'>{createError.message}</p>}
                {createUser && <p className='text-success'>User create successfully</p>}
                {signInUser && <p className='text-success'>User login successfully</p>}
                <Button className="w-100" variant="primary" type="submit">
                    {registration ? "Login" : "Registration"}
                </Button>
                <SocialSignUp />
                <ToastContainer />
            </Form>
        </div>
    );
};
export default Registration;