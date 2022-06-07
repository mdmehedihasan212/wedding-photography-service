import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../Firebase/Firebase.init';

const Checkout = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [updateUser, setUpdateUser] = useState({
        name: "",
        email: "",
        address: "",
        phone: ""
    })
    const [agree, setAgree] = useState(false);
    const [userError, setUserError] = useState('');
    const [updateProfile] = useUpdateProfile(auth);

    const GetUserName = event => {
        setUpdateUser({ ...updateUser, name: event.target.value });
    }

    const GetUserEmail = event => {
        setUpdateUser({ ...updateUser, email: event.target.value });
    }

    const GetUserAddress = event => {
        setUpdateUser({ ...updateUser, address: event.target.value });
    }

    const GetUserPhone = event => {
        setUpdateUser({ ...updateUser, phone: event.target.value });
    }

    const FormSubmit = event => {
        event.preventDefault();

        if (updateUser.phone.length === 11) {
            updateProfile({ displayName: updateUser.name })
            toast.success('Thank you for the booking.');
            navigate('/order-review')
        }
        else {
            setUserError('Phone number minimum eleven character')
        }

    }

    return (
        <div>
            <Form onSubmit={FormSubmit} className='mx-auto shadow px-4 py-4 mb-5 bg-body rounded mt-4' style={{ width: '450px' }}>
                <Form.Text className="text-center text-warning m-2">
                    <h1>Booking Form</h1>
                    <h5>Choses Package : {userId}</h5>
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control onChange={GetUserName} type="text" placeholder="Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onChange={GetUserEmail} type="email" placeholder="Email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control onChange={GetUserAddress} type="text" placeholder="Address" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Control onChange={GetUserPhone} type="text" placeholder="Phone" required />
                </Form.Group>
                <p className='text-danger'>{userError}</p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={() => setAgree(!agree)} label="Accept booking terms and condition!" />
                </Form.Group>
                <button
                    className="w-100 btn btn-outline-warning mb-4"
                    type="submit"
                    disabled={!agree}>
                    Submit
                </button>
            </Form>
        </div>
    );
};

export default Checkout;