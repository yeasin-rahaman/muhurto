import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import './Testimonial.css';
import ReviewCard from './ReviewCard';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules

const Testimonial = () => {

    const reviewData = [
        {
            id: 1,
            name: 'Muhammad Anwer',
            rating: 5,
            review: 'Muhurto Bangladesh was able to capture our big day through small details, amazing mood settings, and intimate moments and meetings between us and our guests, which made our day memorable.'
        },
        {
            id: 2,
            name: 'Huma Khan',
            rating: 5,
            review: 'They are truly passionate about creating great photos and will go to any length to achieve them and satisfy their customers. They strike a good balance between trying new things and not staging the photos."'
        },
        {
            id: 3,
            name: 'Zeyad Darwesh',
            rating: 5,
            review: 'I am very, very picky. I have talked to many excellent photographers and have explained our wedding marathon. Most photographers were not up to it, or at least not the way I liked it.  It was a great pleasure a privilege to have Muhurto to cover our wedding. I am very happy with my decision and not only would I hire them again for the wedding, but also for different future events that hopefully come up.”'
        },
        {
            id: 4,
            name: 'Moury Ahmed',
            rating: 5,
            review: 'Muhurtooo bangladesh is simply AMAZING! They really are more than photographers. From the beginning through to the end they offered endless support,advice and guidance. On the day itself me and my husband felt in proper hands and they created a friendly environment to ease us as we both are camera-shy There experience and professionalism shines through, allowing us to relax and have the best day of our lives ! We got our photos within 10 days of the event  and couldn’t be more happier with the results, they are seriously talented and genuinely love what they do ! If you’re thinking about booking them for your wedding or any event, DO IT!!! You won’t be disappointed ! They have captured memories that we will cherish forever. Thank u so much Muhurtooo Bangladesh team '
        }


    ]
    return (
        <div className="Testimonial ">
            <div className="container my-5 " data-aos="fade-up">


                <div className="my-5">
                    <div className='d-flex justify-content-center '>
                        <h1>Customer Reviews
                            <hr className='w-100' data-aos="fade-down" />
                        </h1>

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
        </div>
    );
};

export default Testimonial;