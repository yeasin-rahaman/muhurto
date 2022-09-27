import React from 'react';
import EverAfter from './../../../Assets/Images/everafter.jpg'

const EverAfterModal = () => {
    return (
        <div class="modal fade" id="EverAfterModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="EverAfterModalLabel" aria-hidden="true">
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
                                    <p>.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                    <h3 className='d-flex justify-content-end'>Price 50$</h3>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EverAfterModal;