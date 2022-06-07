import React from 'react';
import ClientReview from '../../ClientReview/ClientReview';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <ClientReview></ClientReview>
        </>
    );
};

export default Home;