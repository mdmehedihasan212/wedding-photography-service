import React from 'react';
import ClientReviewRow from '../ClientReviewRow/ClientReviewRow';

const ClientReview = () => {
    const reviews = [
        {
            id: 1,
            img: "https://i.ibb.co/XS5v3v5/team-member-03-consult.jpg",
            name: 'Jon Erik',
            review: "This service is really good for the price but there are very specific thanks for service"
        },
        {
            id: 2,
            img: "https://i.ibb.co/zPSpTgY/team-member-04-consult.jpg",
            name: 'Nik Ron',
            review: "This service is really good for the price but there are very specific thanks for service"
        },
        {
            id: 3,
            img: "https://i.ibb.co/tQTF8tF/team-member-05-consult.jpg",
            name: 'Jon Erik',
            review: "This service is really good for the price but there are very specific thanks for service"
        },
        {
            id: 4,
            img: "https://i.ibb.co/k6rT52q/team-member-07-consult.jpg",
            name: 'Nik Ron',
            review: "This service is really good for the price but there are very specific thanks for service"
        },
        {
            id: 5,
            img: "https://i.ibb.co/TLH6btq/team-member-08-consult.jpg",
            name: 'Jon Erik',
            review: "This service is really good for the price but there are very specific thanks for service"
        },
        {
            id: 6,
            img: "https://i.ibb.co/k6rT52q/team-member-07-consult.jpg",
            name: 'Nik Ron',
            review: "This service is really good for the price but there are very specific thanks for service"
        }

    ];


    return (
        <section className='container mt-5'>
            <h3 className='text-center text-warning'>Client Reviews</h3>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-4 g-5 mt-4'>
                {
                    reviews.map(review => <ClientReviewRow
                        review={review}
                    ></ClientReviewRow>)
                }
            </div>
        </section>
    );
};

export default ClientReview;