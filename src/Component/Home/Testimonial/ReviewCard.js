import React from 'react';
import StarRatings from 'react-star-ratings';
import reviewImg from './../../../Assets/Images/testtesio.png'

const ReviewCard = ({ data }) => {
    return (
        <div>
            <div className='review-box'>
                <div style={{ textAlign: 'center' }}>
                    <img src={reviewImg} id="profile-img" alt="Reviewer profile" />
                </div>
                <div>
                    <h2>{data.name}</h2>
                </div>
                <div className="flex justify-center gap-4">
                    <p>5 stars</p>
                    <StarRatings
                        starRatedColor="goldenrod"

                        rating={data.rating}
                        starDimension="30px"
                        starSpacing="10px"
                    />
                </div>
                <div ><p className='text-sm my-5'>{data.review}
                </p> </div>
            </div>
        </div>
    );
};

export default ReviewCard;