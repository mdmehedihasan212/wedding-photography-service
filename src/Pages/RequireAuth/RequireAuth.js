import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import Loading from '../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
        return <Loading />
    }

    if (!user) {
        return <Navigate to="/registration" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;