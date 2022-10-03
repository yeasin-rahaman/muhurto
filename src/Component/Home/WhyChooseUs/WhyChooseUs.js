import React from 'react';
import './WhyChooseUs.css'
import icon1 from './../../../Assets/Images/Icons/1.png'
import icon2 from './../../../Assets/Images/Icons/2.png'
import icon3 from './../../../Assets/Images/Icons/3.png'
import icon4 from './../../../Assets/Images/Icons/4.png'
import icon5 from './../../../Assets/Images/Icons/5.png'
import icon6 from './../../../Assets/Images/Icons/4.png'
const WhyChooseUs = () => {
    return (
        <div className='WhyChooseUs'>
            <div className="container my-5">
                <div className='row my-5' >
                    <div className="col-12 col-md-6 ">
                        <h1>WHY CHOOSE US ?</h1>
                        <hr data-aos="fade-right" />
                    </div>
                    <div className="col-12 col-md-6">
                        <p>Our collection of photography was cultivated over the course of 10 years. This business is a dream come true and one that (many years ago) felt quite impossible. Our hope is that these images inspire you to have your story uniquely told through photography with us as your photographer
                        </p>
                    </div>
                </div>

                <div>
                    <div className="row row-cols-1 row-cols-md-3 g-4 my-5">

                        <div className="col d-flex align-items-center my-5"   >
                            <div className='pe-3'>
                                <span>
                                    <img src={icon1} className="img-fluid" alt="" />
                                </span>
                            </div>
                            <div>
                                <h5 >10 YEARS OF EXPERIENCE</h5>
                                <p>Our collection of photography was cultivated over the course of 10 years.
                                </p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-center my-5"   >
                            <div className='pe-3'>
                                <span>
                                    <img src={icon2} className="img-fluid" alt="" />
                                </span>
                            </div>
                            <div>
                                <h5 >24 Event in a year only</h5>
                                <p>To ensure priority, we have been taking two events per month and 24 bookings per year.
                                </p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-center my-5"   >
                            <div className='pe-3'>
                                <span>
                                    <img src={icon3} className="img-fluid" alt="" />
                                </span>
                            </div>
                            <div>
                                <h5 >Experts Only</h5>
                                <p>Client satisfaction and quality are the most important factors for Muhurto Bangladesh</p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-center my-5"   >
                            <div className='pe-3'>
                                <span>
                                    <img src={icon4} className="img-fluid" alt="" />
                                </span>
                            </div>
                            <div>
                                <h5 >MASTER IN FINE ARTS
                                </h5>
                                <p>We combine elements of creativity with a classic twist to craft our fine art wedding photography.</p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-center my-5"   >
                            <div className='pe-3'>
                                <span>
                                    <img src={icon5} className="img-fluid" alt="" />
                                </span>
                            </div>
                            <div>
                                <h5 >Pricing</h5>
                                <p>Our Premium Packages are designed to provide you with exclusive photography and cinematography services to capture the most important moments in your life.</p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-center my-5"   >
                            <div className='pe-3'>
                                <span>
                                    <img src={icon6} className="img-fluid" alt="" />
                                </span>
                            </div>
                            <div>
                                <h5 >One Day Delivery</h5>
                                <p>24 Hours or within a day delivery is available for those who will book for our super express priority service . </p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;