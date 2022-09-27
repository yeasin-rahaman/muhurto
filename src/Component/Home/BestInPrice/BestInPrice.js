import React from 'react';
import './BestInPrice.css'
import EverAfterModal from "./EverAfterModal";
import BronzeModal from "./BronzeModal";
import RichCrazyAsiansModal from "./RichCrazyAsiansModal";
import CasablancaModal from "./CasablancaModal";
import ChoseHowYouWantItModal from "./ChoseHowYouWantItModal";

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
                    <div className="row text-center justify-content-center row-cols-1 row-cols-md-3 g-4">

                        <div className="col d-flex justify-content-center mt-5" data-bs-toggle="modal" data-bs-target="#EverAfterModal" >
                            <div className='text-center packages w-100'>
                                <h2>Ever After</h2>
                                <br />
                                {/* <h1>199 $</h1> */}
                                <p>1 Senior Photographer </p>
                                <p>1 Junior Photographer</p>
                                <p>1 Cinematographer </p>
                                <p>5 Hours Duration </p>
                            </div>

                        </div>

                        <div className="col d-flex justify-content-center mt-5" data-bs-toggle="modal" data-bs-target="#BronzeModal"  >
                            <div className='text-center packages w-100'>
                                <h2>Bronze</h2>
                                <br />
                                {/* <h1>199 $</h1> */}
                                <p>1 Senior Photographer </p>
                                <p>2 Junior Photographer</p>
                                <p>1 Cinematographer </p>
                                <p>5 Hours Duration </p>
                            </div>

                        </div>

                        <div className="col d-flex justify-content-center mt-5" data-bs-toggle="modal" data-bs-target="#RichCrazyAsiansModal" >
                            <div className='text-center packages w-100'>
                                <h2>Rich Crazy Asians</h2>
                                <br />
                                {/* <h1>199 $</h1> */}
                                <h4>CEO, Full Hour</h4>
                                <p>2 Senior Photographer </p>
                                <p>2 Junior Photographer</p>
                                <p>2 Cinematographer </p>
                                <p>5 Hours Duration </p>
                            </div>

                        </div>

                        <div className="col d-flex justify-content-center mt-5" data-bs-toggle="modal" data-bs-target="#CasablancaModal"   >
                            <div className='text-center packages w-100'>
                                <h2>Casablanca</h2>
                                <br />
                                {/* <h1>199 $</h1> */}
                                <h5>1 Core Photographer</h5>
                                <p>1 Senior Photographer </p>
                                <p>2 Junior Photographer</p>
                                <p>2 Cinematographer </p>
                                <p>5 Hours Duration </p>
                            </div>

                        </div>
                        <div className="col d-flex justify-content-center mt-5" data-bs-toggle="modal" data-bs-target="#ChoseHowYouWantItModal" >
                            <div className='text-center packages w-100 '>
                                <h2>Chose How You Want It</h2>
                                {/* <h1>199 $</h1> */}
                                <br />
                                <h5>Choose How you want it

                                    Custom Package
                                </h5>

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