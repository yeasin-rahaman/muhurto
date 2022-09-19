import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";

const Test3 = () => {
    return (
        <>
            <div className="bg-dark">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}

                    modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >


                    <>

                        <SwiperSlide>
                            <img className='HotelSliderImage' src="https://scontent.fzyl2-1.fna.fbcdn.net/v/t1.6435-9/71091991_2636550093074413_7199296895351521280_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeECYhQQJ1LuRX6FUYF3lyWUZyEoMAylfTlnISgwDKV9OTYupSUxBDXSBSTsv_dZ9Nd3fur2zhBMGhSIbBn3JqRP&_nc_ohc=zbussjWc0uMAX9wjHK3&_nc_oc=AQkUe2615G1YQPG4F1W4aB0qOZpkCugWeEQVrN-NUBuQwk-Erm0dzNtXAvhypQGW01E&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT-EubukYXPLIvU8Po0Kmdwgvlp81PtQg4gi-JxP4Fmo0g&oe=633D2598" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='HotelSliderImage' src="https://scontent.fzyl2-1.fna.fbcdn.net/v/t1.6435-9/139049993_3849744301754980_4472406293501103924_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFGObnIlGC6iZy_iHSZC5vfSMF9732YVqhIwX3vfZhWqPi5lbQwvJHHr9wRWcLicQkNialFMfYslToaUKlkZARP&_nc_ohc=qgMidI8Pf3oAX-bswwS&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT-27FX4UBRau2z4th8dfs17DZWe0q3NZVScWc2Rcyn5Nw&oe=633CBBEB" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='HotelSliderImage' src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/70/2016/11/22074111/home-novotel-bangkok-ploenchit-sukhumvit-41.jpeg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='HotelSliderImage' src="https://scontent.fzyl2-1.fna.fbcdn.net/v/t31.18172-8/17972214_1424175724311862_6438219109208576362_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ad2b24&_nc_eui2=AeFmC55Soi2yx-oPC6SPa-RMkNXsIDVn8MmQ1ewgNWfwyfXIwLkf07f4xPwAvuI8KRbTNeIGYtip97jfLyHo-Jpp&_nc_ohc=dpE0LAAnGtoAX-aroBY&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT-_RATUPHlhxZkfMFv4fUUchPrn4OQ6RrfP2litUWNTyQ&oe=633EB968" alt="" />
                        </SwiperSlide>
                    </>




                </Swiper>
            </div>
        </>
    );
};

export default Test3;