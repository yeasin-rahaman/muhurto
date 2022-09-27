import React from 'react';
import './BestInPrice.css'
import EverAfterModal from "./EverAfterModal";
import BronzeModal from "./BronzeModal";
import RichCrazyAsiansModal from "./RichCrazyAsiansModal";
import CasablancaModal from "./CasablancaModal";
import ChoseHowYouWantItModal from "./ChoseHowYouWantItModal";
import ChoseHowYouWantIt from './../../../Assets/Images/Chose-How-You-Want-It.png'
import EverAfter from './../../../Assets/Images/everafterlogo.png'
import midnight from './../../../Assets/Images/midnightLogor.png'
import casablanca from './../../../Assets/Images/casablankaLogo.png'
import richCrazyAsiansGolden from './../../../Assets/Images/richCrezzyAsianLogoGolden.png'
import richCrazyAsiansWhite from './../../../Assets/Images/richCrezzyAsianLogo.png'

const BestInPrice = () => {
    return (
        <div className='BestInPrice'>
            <div className="container my-5" data-aos="fade-up">
                <div className='row my-5' >

                    <div className="col-12 col-md-6 ">

                        <h1>BEST IN PRICE</h1>
                        <hr />
                    </div>
                    <div className="col-12 col-md-6">
                        <p>We believe in capturing a moment in a timeless way, so we set trends aside with an elegant, classic, and clean style captured on pictures with our premium packages.
                        </p>
                    </div>
                </div>

                <div >
                    <div className="row text-center justify-content-center row-cols-1 row-cols-md-4 g-4">

                        <div className="col d-flex justify-content-center mt-5" data-bs-toggle="modal" data-bs-target="#EverAfterModal" >
                            <div className='text-center packages w-100'>
                                <img src={EverAfter} className="img-fluid  p-5" alt="" />
                                <br />
                                {/* <h1>199 $</h1> */}
                                <p>1 Senior Photographer </p>
                                <p>1 Junior Photographer</p>
                                <p>1 Cinematographer </p>
                                <p>5 Hours Duration </p>
                                <p >See More
                                    <i class="fa-solid fa-angles-right ms-2 brandColor"></i></p>
                            </div>

                        </div>

                        <div className="col d-flex justify-content-center mt-5" data-bs-toggle="modal" data-bs-target="#BronzeModal"  >
                            <div className='text-center packages w-100'>
                                <img src={midnight} className="img-fluid p-5" alt="" />
                                <br />
                                {/* <h1>199 $</h1> */}
                                <p>1 Senior Photographer </p>
                                <p>2 Junior Photographer</p>
                                <p>1 Cinematographer </p>
                                <p>5 Hours Duration </p>
                                <p >See More
                                    <i class="fa-solid fa-angles-right ms-2 brandColor"></i></p>
                            </div>

                        </div>


                        <div className="col d-flex justify-content-center mt-5" data-bs-toggle="modal" data-bs-target="#CasablancaModal"   >
                            <div className='text-center packages w-100'>
                                <img src={casablanca} className="img-fluid p-5" alt="" />
                                <br />
                                {/* <h1>199 $</h1> */}
                                <h5>1 Core Photographer</h5>
                                <p>1 Senior Photographer </p>
                                <p>2 Junior Photographer</p>
                                <p>2 Cinematographer </p>
                                <p>5 Hours Duration </p>
                                <p >See More
                                    <i class="fa-solid fa-angles-right ms-2 brandColor"></i></p>
                            </div>

                        </div>

                        <div className="col d-flex justify-content-center mt-5" data-bs-toggle="modal" data-bs-target="#RichCrazyAsiansModal" >
                            <div className='text-center packages w-100'>

                                <img src={richCrazyAsiansGolden} className="img-fluid richCrazyAsiansGolden p-5" alt="" />
                                <img src={richCrazyAsiansWhite} className="img-fluid richCrazyAsiansWhite p-5 " alt="" />
                                <br />
                                {/* <h1>199 $</h1> */}
                                <h4>CEO, Full Hour</h4>
                                <p>2 Senior Photographer </p>
                                <p>2 Junior Photographer</p>
                                <p>2 Cinematographer </p>
                                <p>5 Hours Duration </p>

                                <p >See More
                                    <i class="fa-solid fa-angles-right ms-2 brandColor"></i></p>

                            </div>

                        </div>

                        <div className="col d-flex justify-content-center mt-5" data-bs-toggle="modal" data-bs-target="#ChoseHowYouWantItModal" >
                            <div className='text-center packages w-100 '>
                                {/* <h2>Chose How You Want It</h2> */}
                                <img src={ChoseHowYouWantIt} className="img-fluid p-3" alt="" />
                                {/* <h1>199 $</h1> */}
                                <br />


                                <p >See More
                                    <i class="fa-solid fa-angles-right ms-2 brandColor"></i></p>
                            </div>

                        </div>



                    </div>
                </div>
            </div>







            <EverAfterModal></EverAfterModal>
            <BronzeModal></BronzeModal>
            <RichCrazyAsiansModal></RichCrazyAsiansModal>
            <CasablancaModal></CasablancaModal>
            <ChoseHowYouWantItModal></ChoseHowYouWantItModal>


        </div>
    );
};

export default BestInPrice;