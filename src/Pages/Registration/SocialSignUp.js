import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const SocialSignUp = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <section>
            <article className=" mt-4 d-flex align-items-center justify-content-center">
                <div style={{ height: "20px" }} className="border-top w-50"></div>
                <p className="px-2">or</p>
                <div style={{ height: "20px" }} className="border-top w-50"></div>
            </article>
            <article>
                <p className='text-danger'>{error?.message}</p>
                <Button onClick={() => signInWithGoogle()} variant="primary" type="submit">
                    Google Sign in
                </Button>
            </article>
        </section>
    );
};

export default SocialSignUp;