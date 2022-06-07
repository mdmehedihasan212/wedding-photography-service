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
        <div>
            <h1>Order Review</h1>
        </div>
    );
};

export default OrderReview;