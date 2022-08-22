import React from 'react';
import './Specialist.css'
import Image1 from './../../../Assets/Images/IMG_0224.jpg'
const Specialist = () => {
    return (
        <div className='specialist '>
            <div className="container my-5">
                <div className='row'>
                    <div className="col-12 col-md-6">
                        <h1>SPECIALIZATION</h1>
                    </div>
                    <div className="col-12 col-md-6">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna.</p>
                    </div>
                </div>

                <div>
                    <div className="row row-cols-1 row-cols-md-3 g-4 my-5">

                        <div className="col"  >
                            <img src={Image1} className="img-fluid rounded-start w-100" alt="..." />
                            <h5 >WEDDING</h5>
                        </div>
                        <div className="col"  >
                            <img src={Image1} className="img-fluid rounded-start w-100" alt="..." />
                            <h5 >OCCASION</h5>
                        </div>
                        <div className="col"  >
                            <img src={Image1} className="img-fluid rounded-start w-100" alt="..." />
                            <h5 >THEMATIC</h5>
                        </div>
                        <div className="col"  >
                            <img src={Image1} className="img-fluid rounded-start w-100" alt="..." />
                            <h5 >OBJECT / PRODUCTS</h5>
                        </div>
                        <div className="col"  >
                            <img src={Image1} className="img-fluid rounded-start w-100" alt="..." />
                            <h5 >CORPORATE FILMING</h5>
                        </div>
                        <div className="col"  >
                            <img src={Image1} className="img-fluid rounded-start w-100" alt="..." />
                            <h5 >PETS</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specialist;