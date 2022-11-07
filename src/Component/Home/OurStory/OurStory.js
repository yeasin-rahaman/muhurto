import React from 'react';
import './OurStory.css'
import Image1 from './../../../Assets/Images/about-us-img-1.jpg'
import Image2 from './../../../Assets/Images/about-us-img-2.jpg'
import Image3 from './../../../Assets/Images/about-us-img-3.jpg'
const OurStory = () => {
    return (
        <div className='OurStory '>

            <div className="container my-5" data-aos="fade-up">
                <div className="row  align-items-center aboutUsContainer">


                    <div className="col-md-6 col-12 my-5">
                        <hr data-aos="fade-right" />
                        <h2  >PHOTOGRAPHY TAKES AN INSTANT OUT OF TIME, ALTERING LIFE BY HOLDING IT STILL</h2>
                        <br />
                        <div className='pe-5  aboutUsText'>

                            <p>
                                Muhurto Bangladesh has spent nearly 10 years shooting private weddings and events nationwide. We believe that it’s an honour witnessing and documenting the joining of two families and the emotions and traditions that go along with this occasion.
                            </p>
                            <br />
                            <p>
                                We preserve the happiest times in your life through pictures of you and your loved ones. We are here to capture and provide you with the most memorable moments of your life since some occasions call for unique emotions.
                            </p>
                            <br />
                            <p>
                                Spontaneity. compositional, lighting, and colour factors. A stunning, engaging shot frequently comes together in the flash of an eye. Muhurto is skilled at capturing that unique moment in time and understanding what that moment and that photograph mean to a couple in the context of a lifetime. We intend to ensure you can relive this magical day through our photographs.
                            </p>
                            <br />
                            <h3 className='d-flex justify-content-end'>About Us</h3>
                            <div className='d-flex justify-content-end '>
                                <hr className='d-flex justify-content-end w-50 downHR' data-aos="fade-right" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-12">

                        <div className="row">
                            <div className="col-12 mt-4">
                                <img className='img-fluid zoom rounded' src={Image1} alt="" />
                            </div>
                            <div className="col-6 mt-4">
                                <img className='img-fluid zoom rounded' src={Image2} alt="" />
                            </div>
                            <div className="col-6 mt-4">
                                <img className='img-fluid zoom rounded' src={Image3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurStory;