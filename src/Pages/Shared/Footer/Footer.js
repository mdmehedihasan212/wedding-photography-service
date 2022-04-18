import React from 'react';
import { FcHome } from 'react-icons/fc';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineMarkEmailRead } from 'react-icons/md';

const Footer = () => {
    return (
        <section className='d-flex mt-5 align-items-center justify-content-around'>
            <article>
                <h4>Wedding Photography</h4>
            </article>
            <article className='footer-text'>
                <h4>Contact Us</h4>
                <p><FcHome /> Barishal City Corporation <br /><FiPhoneCall /> +01741-112233 <br /><MdOutlineMarkEmailRead /> support@gmail.com</p>
            </article>
        </section>
    );
};

export default Footer;