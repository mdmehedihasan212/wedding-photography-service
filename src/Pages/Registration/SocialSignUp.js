import React, { useEffect } from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import google from '../../Assets/Social icon/google.png';
import facebook from '../../Assets/Social icon/facebook.png';
import github from '../../Assets/Social icon/github.png';
import Loading from '../Shared/Loading/Loading';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialSignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, gUser, gLoading] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fUser, fLoading] = useSignInWithFacebook(auth);
    const [signInWithGithub, gitUser, gitLoading] = useSignInWithGithub(auth);

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (gUser || fUser || gitUser) {
            navigate(from, { replace: true });
        }
    }, [gUser, fUser, gitUser, navigate, from])

    if (gLoading || fLoading || gitLoading) {
        return <Loading></Loading>
    }

    return (
        <section>
            <article className=" mt-4 d-flex align-items-center justify-content-center">
                <div style={{ height: "20px" }} className="border-top w-50"></div>
                <p className="px-2">or</p>
                <div style={{ height: "20px" }} className="border-top w-50"></div>
            </article>
            <article>
                <div className='d-flex mt-3 justify-content-between'>
                    <button className="btn btn-outline-warning" onClick={() => signInWithGoogle()} type="submit">
                        <img className="d-block mx-2" src={google} alt="google icon" />
                        Google
                    </button>
                    <button className="btn btn-outline-warning" onClick={() => signInWithFacebook()} type="submit">
                        <img className="d-block mx-4" src={facebook} alt="facebook icon" />
                        Facebook
                    </button>
                    <button className="btn btn-outline-warning" onClick={() => signInWithGithub()} type="submit">
                        <img className="d-block mx-2" src={github} alt="github icon" />
                        Github
                    </button>
                </div>
            </article>
        </section>
    );
};

export default SocialSignUp;