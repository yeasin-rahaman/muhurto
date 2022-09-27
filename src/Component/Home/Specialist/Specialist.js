import React from 'react';
import './Specialist.css'
import Image1 from './../../../Assets/Images/_MG_6426aa.jpg'
import Image2 from './../../../Assets/Images/_O7A0453.jpg'
import Image3 from './../../../Assets/Images/Consultancy.jpg'
import Image4 from './../../../Assets/Images/_MG_8295.jpg'
import Image5 from './../../../Assets/Images/_OY_3378.jpg'
import Image6 from './../../../Assets/Images/_O7A1222.jpg'
const Specialist = () => {
    return (
        <div className='specialist '>
            <div className="container my-5" data-aos="fade-up">
                <div className='row my-5' >
                    <div className="col-12 col-md-6 ">
                        <h1>SPECIALIZATION</h1>
                        <hr />
                    </div>
                    {/* <div className="col-12 col-md-6">
                        <p>For a moment, time stands still—A memory is captured, a glance is immortalized and pure magic arises.
                        </p>
                    </div> */}
                </div>

                <div>
                    <div className="row row-cols-1 row-cols-md-3 g-4 my-5">

                        <div className="col zoom"  >
                            <img src={Image1} className="img-fluid rounded w-100 " alt="Photography" />
                            <h5 >Photography </h5>
                        </div>
                        <div className="col zoom"  >
                            <img src={Image2} className="img-fluid rounded w-100" alt="Film Making" />
                            <h5 >Film Making</h5>
                        </div>
                        <div className="col zoom"  >
                            <img src={Image3} className="img-fluid rounded w-100" alt="Consultancy" />
                            <h5 >Consultancy</h5>
                        </div>
                        {/* <div className="col"  >
                            <img src={Image4} className="img-fluid rounded w-100" alt="..." />
                            <h5 >OBJECT / PRODUCTS</h5>
                        </div>
                        <div className="col"  >
                            <img src={Image5} className="img-fluid rounded w-100" alt="..." />
                            <h5 >CORPORATE FILMING</h5>
                        </div>
                        <div className="col"  >
                            <img src={Image6} className="img-fluid rounded w-100" alt="..." />
                            <h5 >PETS</h5>
                        </div> */}
                    </div>
                    <div className="col-12 col-md-12 text-align-center ">
                        <p>For a moment, time stands still—A memory is captured, a glance is immortalized and pure magic arises.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Specialist;