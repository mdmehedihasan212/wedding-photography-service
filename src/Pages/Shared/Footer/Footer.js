import React from 'react';
import './Footer.css';
import { GrLocation } from 'react-icons/gr';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineMarkEmailRead } from 'react-icons/md';

const Footer = () => {

    return (
        <section className='d-flex mt-5 justify-content-around bg-warning p-3 text-dark bg-opacity-10'>
            <article>
                <h2 className='text-warning'>Wedding Photography</h2>
            </article>
            <article className='footer-text'>
                <p><GrLocation /> Barishal City Corporation <br /><FiPhoneCall /> +01741-112233 <br /><MdOutlineMarkEmailRead /> support@gmail.com</p>
            </article>
        </section>
    );
};

export default Footer;