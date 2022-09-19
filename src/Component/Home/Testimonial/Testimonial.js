import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import reviewImg from './../../../Assets/Images/google.png'
import './Testimonial.css';
import StarRatings from 'react-star-ratings';
import ReviewCard from './ReviewCard';
const Testimonial = () => {
    const reviewData = [
        {
            id: 1,
            name: 'Muhammad Anwer',
            rating: 5,
            review: 'Arif is an amazing and honest man. Great place to buy cars at reasonable price.'
        },
        {
            id: 2,
            name: 'Huma Khan',
            rating: 5,
            review: 'Been going here for years and wouldn\'t be able to find a single thing to complain about'
        },
        {
            id: 3,
            name: 'Zeyad Darwesh',
            rating: 5,
            review: 'Prices are very competitive and the work is well done. Really recommend this shop'
        },
        {
            id: 4,
            name: 'Ajay Kumar',
            rating: 5,
            review: 'Honest guy, affordable price, happy for my wife\'s car'
        },
        {
            id: 5,
            name: 'Chrystelle Hoarau',
            rating: 5,
            review: 'I purchased a car through Arif, and the service I received from him, was exceptional ....'
        },
    ]
    return (
        <div className="Testimonial">
            <div className="container">
                <div className='d-flex justify-content-center m-5'>
                    <h2>Customer Reviews
                    </h2>

                </div>


                <Swiper
                    className='review-container'
                    spaceBetween={30}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,

                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Autoplay, Pagination]}
                >

                    {reviewData.map(data => <SwiperSlide><ReviewCard key={data.id} data={data}></ReviewCard></SwiperSlide>)}

                </Swiper>

            </div>
        </div>
    );
};

export default Testimonial;