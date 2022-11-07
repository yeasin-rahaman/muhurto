import React from 'react';
import './Portfolio.css'
import Image1 from './../../../Assets/Images/_MG_1297.jpg'
import Image2 from './../../../Assets/Images/_MG_1350.jpg'
import Image3 from './../../../Assets/Images/_MG_9851.jpg'
import Image4 from './../../../Assets/Images/_MG_9897.jpg'
import PortfolioModal from './PortfolioModal'
const Portfolio = () => {
    return (
        <div className='Portfolio'>
            <div className="container" data-aos="fade-up">
                <div className="row  align-items-center">

                    <div className="col-md-6 col-12">

                        <div className="row pe-5" data-bs-toggle="modal"
                            data-bs-target="#EditModal">

                            <div className="col-6 ">
                                <img className='img-fluid mt-4 rounded zoom' src={Image1} alt="" />
                            </div>
                            <div className="col-6 ">
                                <img className='img-fluid mt-4 rounded zoom' src={Image2} alt="" />
                            </div>
                            <div className="col-6 ">
                                <img className='img-fluid mt-4 rounded zoom' src={Image3} alt="" />
                            </div>
                            <div className="col-6 ">
                                <img className='img-fluid mt-4 rounded zoom' src={Image4} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-12 my-5 ">
                        <hr data-aos="fade-left" />
                        <h2>IN PHOTOGRAPHY THERE IS A REALITY SO SUBTLE THAT IT BECOMES MORE REAL THAN REALITY
                        </h2>
                        <br />
                        <p>Our Goal is to use our Skills and Passions to leave the world a bit more beautiful than we found it—whether that’s telling the story of a once-in-a-lifetime wedding day, or sharing Photographs that shed light on issues of global importance—it’s the work we’re honoured to do.
                        </p>
                        <br />
                        <div className='d-flex mt-5 justify-content-end d-flex align-items-center zoom' data-bs-toggle="modal"
                            data-bs-target="#EditModal">
                            <div className='mt-2'></div>
                            <h3 >Portfolio
                            </h3>
                            <h3> <i class="fa-solid fa-angles-right ms-2 brandColor"></i></h3>
                        </div>
                        {/* <div className='d-flex justify-content-end '>
                            <hr className='d-flex justify-content-end w-50 downHR' data-aos="fade-right" />
                        </div> */}

                        {/* <button data-bs-toggle="modal"
                            data-bs-target="#EditModal"

                            className=" bookingSubmitButton btn btn-danger p-3 m-2">Portfolio</button> */}
                    </div>
                </div>
            </div>
            <PortfolioModal

            ></PortfolioModal>
        </div>
    );
};

export default Portfolio;