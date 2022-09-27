import React from 'react';

import "./style.css";

import ReactImageGallery from './ReactImageGallery';


const PortfolioModal = () => {

    return (
        <>
            <div className='portfolioModal'>
                <div class="modal fade" id="EditModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="EditModalLabel" aria-hidden="true">
                    <div class="modal-fullscreen  modal-dialog modal-dialog-centered">
                        <div class="modal-content  bg-dark">

                            <div class="modal-header bg-dark border-0">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>

                            </div>
                            <div class="modal-body p-0 m-0">
                                <div class=" col-12 ">
                                    <div class="w-100 mx-auto">
                                        <div id="booking" className="section ">
                                            <div className="section-center">
                                                <div className="">
                                                    <div className="row">
                                                        <div className="bg-dark">

                                                            <ReactImageGallery></ReactImageGallery>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    );
};

export default PortfolioModal;