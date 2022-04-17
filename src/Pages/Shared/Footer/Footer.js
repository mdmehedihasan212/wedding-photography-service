import React from 'react';

const Footer = () => {
    return (
        <section style={{ height: "180px" }} className='d-flex mt-5 align-items-center justify-content-around bg-primary text-light'>
            <article>
                <h1>Wedding Photography</h1>
            </article>
            <article className='footer-text'>
                <h1>Contact Us</h1>
                <p>Address: Barishal City Corporation <br /> Phone: +01741-112233 <br />
                    E-mail: support@gmail.com</p>
            </article>
        </section>
    );
};

export default Footer;