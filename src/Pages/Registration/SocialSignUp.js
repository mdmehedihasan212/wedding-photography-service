import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import google from '../../Assets/social/google.png';
import facebook from '../../Assets/social/facebook.png';
import github from '../../Assets/social/github.png';

const SocialSignUp = () => {
    const [signInWithGoogle, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookError] = useSignInWithFacebook(auth);
    const [signInWithGithub, githubError] = useSignInWithGithub(auth);
    return (
        <section>
            <article className=" mt-4 d-flex align-items-center justify-content-center">
                <div style={{ height: "20px" }} className="border-top w-50"></div>
                <p className="px-2">or</p>
                <div style={{ height: "20px" }} className="border-top w-50"></div>
            </article>
            <article>
                <p className='text-danger'>{googleError?.message}</p>
                <Button onClick={() => signInWithGoogle()} className="w-100" variant="primary" type="submit">
                    <img className="mx-2" src={google} alt="google icon" />
                    Google Sign in
                </Button>
                <Button onClick={() => signInWithFacebook()} className="w-100 mt-2" variant="primary" type="submit">
                    <img className="mx-2" src={facebook} alt="facebook icon" />
                    Facebook Sign in
                </Button>
                <Button onClick={() => signInWithGithub()} className="w-100 mt-2" variant="primary" type="submit">
                    <img className="mx-2" src={github} alt="github icon" />
                    Github Sign in
                </Button>
            </article>
        </section>
    );
};

export default SocialSignUp;