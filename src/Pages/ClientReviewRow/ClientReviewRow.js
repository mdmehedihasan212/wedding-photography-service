import React from 'react';

const ClientReviewRow = ({ review }) => {
    return (
        <div className="card mx-auto shadow-sm bg-body rounded" style={{ width: "20rem" }}>
            <img className='rounded-circle w-25 mx-auto mt-4' src={review.img} alt="" />
            <div class="card-body text-center">
                <h5 class="card-title">{review.name}</h5>
                <p><small>{review.review}</small></p>
            </div>
        </div>
    );
};

export default ClientReviewRow;