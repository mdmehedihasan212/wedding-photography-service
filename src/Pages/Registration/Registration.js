import React, { useState } from 'react';
import './Registration.css';
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import SocialSignUp from './SocialSignUp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form } from 'react-bootstrap';
import Loading from '../Shared/Loading/Loading';

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
    const [createUserWithEmailAndPassword,
        createUser,
        createLoading,
        createError] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [signInWithEmailAndPassword, signInUser, signLoading] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    if (createLoading || signLoading) {
        return <Loading />
    }

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
            setError("");

        }
        else {
            signInWithEmailAndPassword(userInfo.email, userInfo.password);
            setError("");
        }
    }

    const PasswordResetEmail = () => {
        if (userInfo.email) {
            sendPasswordResetEmail(userInfo.email);
            toast('Sent Password Reset Email');
            setError("");
        }

    }

    return (
        <div>
            <Form onSubmit={FormSubmit} className='form-container'>
                <h1 className='text-center m-4 text-warning'>{registration ? "Login" : "Registration"}</h1>
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
                {registration && <Link to={'/registration'} onClick={PasswordResetEmail}>Are you forget password?</Link>}
                <p className='text-danger'>{error}</p>
                {createError && <p className='text-danger'>{createError.message}</p>}
                {createUser && <p className='text-success'>User create successfully</p>}
                {signInUser && <p className='text-success'>User login successfully</p>}
                <button className="w-100 btn btn-outline-warning" type="submit">
                    {registration ? "Login" : "Registration"}
                </button>
                <SocialSignUp />
                <ToastContainer />
            </Form>
        </div>
    );
};
export default Registration;