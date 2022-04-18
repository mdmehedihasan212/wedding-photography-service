import React from 'react';
import './Footer.css';
import { GrLocation } from 'react-icons/gr';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import google from '../../../Assets/Social icon/google.png';
import facebook from '../../../Assets/Social icon/facebook.png';
import github from '../../../Assets/Social icon/github.png';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';

const Footer = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);
    return (
        <section className='d-flex mt-5 align-items-center justify-content-around'>
            <article className='footer-text'>
                <p><GrLocation /> Barishal City Corporation <br /><FiPhoneCall /> +01741-112233 <br /><MdOutlineMarkEmailRead /> support@gmail.com</p>
            </article>
            <article>
                <h4 className='text-warning'>Wedding Photography</h4>
            </article>
            <article className='social-button'>
                <p>
                    <button onClick={() => signInWithGoogle()}><img src={google} alt="img" /></button>
                    <button onClick={() => signInWithFacebook()}><img src={facebook} alt="img" /></button>
                    <button onClick={() => signInWithGithub()}><img src={github} alt="img" /></button>
                </p>
            </article>
        </section>
    );
};

export default Footer;