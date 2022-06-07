import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';

const OrderReview = () => {
    const [user] = useAuthState(auth);
    const { orderId } = useParams();
    console.log(user);
    console.log(orderId);

    return (
        <div className='my-5'>
            <h3 className='text-center'>Welcome</h3>
            <h4 className='text-center'>{user.displayName} your booking {orderId} package</h4>
            <p className='text-center text-warning'>Please wait for confirmation email to {user?.email}</p>
        </div>
    );
};

export default OrderReview;