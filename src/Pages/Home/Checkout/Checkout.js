import React from 'react';
import { useParams } from 'react-router-dom';
import usePackage from '../../../Hooks/usePackage';

const Checkout = () => {
    const { userId } = useParams();
    console.log(userId);
    const packages = usePackage([]);
    return (
        <div>
            <h1>Checkout id: {userId}</h1>
        </div>
    );
};

export default Checkout;