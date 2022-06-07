import React from 'react';
import './ClientReview.css';

const ClientReview = () => {
    const reviews = [
        {
            id: 1,
            img: "https://i.ibb.co/XS5v3v5/team-member-03-consult.jpg",
            name: 'Jon Erik',
            review: "This headset is really good for the price but there are very specific problems which I think the average person might be able to overlook but I can't seem to in the case of these headphones."
        },
        {
            id: 2,
            img: "https://i.ibb.co/zPSpTgY/team-member-04-consult.jpg",
            name: 'Nik Ron',
            review: "This headset is really good for the price but there are very specific problems which I think the average person might be able to overlook but I can't seem to in the case of these headphones."
        },
        {
            id: 3,
            img: "https://i.ibb.co/tQTF8tF/team-member-05-consult.jpg",
            name: 'Jon Erik',
            review: "This headset is really good for the price but there are very specific problems which I think the average person might be able to overlook but I can't seem to in the case of these headphones."
        },
        {
            id: 4,
            img: "https://i.ibb.co/k6rT52q/team-member-07-consult.jpg",
            name: 'Nik Ron',
            review: "This headset is really good for the price but there are very specific problems which I think the average person might be able to overlook but I can't seem to in the case of these headphones."
        },
        {
            id: 5,
            img: "https://i.ibb.co/TLH6btq/team-member-08-consult.jpg",
            name: 'Jon Erik',
            review: "This headset is really good for the price but there are very specific problems which I think the average person might be able to overlook but I can't seem to in the case of these headphones."
        },
        {
            id: 6,
            img: "https://i.ibb.co/k6rT52q/team-member-07-consult.jpg",
            name: 'Nik Ron',
            review: "This headset is really good for the price but there are very specific problems which I think the average person might be able to overlook but I can't seem to in the case of these headphones."
        },
        {
            id: 7,
            img: "https://i.ibb.co/XS5v3v5/team-member-03-consult.jpg",
            name: 'Jon Erik',
            review: "This headset is really good for the price but there are very specific problems which I think the average person might be able to overlook but I can't seem to in the case of these headphones."
        },
        {
            id: 8,
            img: "https://i.ibb.co/zPSpTgY/team-member-04-consult.jpg",
            name: 'Nik Ron',
            review: "This headset is really good for the price but there are very specific problems which I think the average person might be able to overlook but I can't seem to in the case of these headphones."
        }
    ];


    return (
        <section>
            <h1 className='text-center text-warning my-5'>Client Reviews</h1>
            <div className='review-container'>
                {
                    reviews.map(review => <div class="card" style={{ width: '18rem' }}>
                        <img className='reviewer-img' src={review.img} alt="" />
                        <div class="card-body text-center">
                            <h5 class="card-title">{review.name}</h5>
                            <p class="card-text">{review.review}</p>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default ClientReview;