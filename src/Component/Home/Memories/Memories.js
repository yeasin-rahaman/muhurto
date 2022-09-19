import React from 'react';
import './Memories.css'
import Image1 from './../../../Assets/Images/_MG_1297.jpg'
import Image2 from './../../../Assets/Images/_MG_1350.jpg'
import Image3 from './../../../Assets/Images/_MG_9851.jpg'
import Image4 from './../../../Assets/Images/_MG_9897.jpg'
import Modal from '../../Test/Modal';
const Memories = () => {
    return (
        <div className='Memories'>
            <div className="container">
                <div className="row  align-items-center">

                    <div className="col-md-6 col-12">

                        <div className="row" data-bs-toggle="modal"
                            data-bs-target="#EditModal">

                            <div className="col-6 ">
                                <img className='img-fluid mt-4' src={Image1} alt="" />
                            </div>
                            <div className="col-6 ">
                                <img className='img-fluid mt-4' src={Image2} alt="" />
                            </div>
                            <div className="col-6 ">
                                <img className='img-fluid mt-4' src={Image3} alt="" />
                            </div>
                            <div className="col-6 ">
                                <img className='img-fluid mt-4' src={Image4} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-12 my-5">

                        <h2>In photography there is a reality so subtle that it becomes more real than reality

                        </h2>
                        <br />
                        <p>Our goal is to use our skills and passions to leave the world a bit more beautiful than we found it—whether that’s telling the story of a once-in-a-lifetime wedding day, or sharing images that shed light on issues of global importance—it’s the work we’re honoured to do.
                        </p>
                        <br />
                        <div className='d-flex justify-content-end' data-bs-toggle="modal"
                            data-bs-target="#EditModal">
                            <h3 >Portfolio
                            </h3>
                        </div>

                        {/* <button data-bs-toggle="modal"
                            data-bs-target="#EditModal"

                            className=" bookingSubmitButton btn btn-danger p-3 m-2">Portfolio</button> */}
                    </div>
                </div>
            </div>
            <Modal

            ></Modal>
        </div>
    );
};

export default Memories;