import React from 'react';
import EverAfter from './../../../Assets/Images/Chose-How-You-Want-It-package.png'

const ChoseHowYouWantItModal = () => {
    return (
        <div className="priceModal">
            <div class="modal fade" id="ChoseHowYouWantItModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="ChoseHowYouWantItModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered  modal-xl">
                    <div class="modal-content">
                        <div class="modal-header bg-dark ">

                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body bg-dark">
                            <div class="container-fluid">
                                <div class="row align-items-center">
                                    <div class="col-md-6 col-12"><img src={EverAfter} className='img-fluid' alt="" /></div>
                                    <div class="col-md-6 ms-auto">
                                        <p>Choose how you want it .
                                            #You can customize any package
                                            <br />
                                            #You can add any service to your package
                                            <br />
                                            #You can choose and create a suitable package or service the way you want it
                                            <br />
                                            For more please call us at +8801885513223 or +8801706391888
                                        </p>
                                        <h3 className='d-flex justify-content-end'>BDT 100,000.00</h3>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChoseHowYouWantItModal;