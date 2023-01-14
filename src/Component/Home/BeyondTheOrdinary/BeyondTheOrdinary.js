import React from 'react';
import Image1 from './../../../Assets/Images/about-us-img-1.jpg'
import Image2 from './../../../Assets/Images/about-us-img-2.jpg'
import Image3 from './../../../Assets/Images/about-us-img-3.jpg'
import './BeyondTheOrdinary.css'
const BeyondTheOrdinary = () => {
    return (
        <div className='BeyondTheOrdinary'>
            <div className="container my-5">
                <div className="row  align-items-center">
                    <div className="col-md-6 col-12 my-5">
                        <h2>PHOTOGRAPHY IS THE STORY I FAIL TO PUT INTO WORDS</h2>
                        <p>Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Sem et tortor consequat id porta nibh venenatis cras tincidunt praesent semper.</p>

                        <p>
                            Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Sem et tortor consequat id porta nibh venenatis cras tincidunt praesent semper.
                        </p>
                    </div>
                    <div className="col-md-6">

                        <div className="row">

                            <div className="col-12 mt-4">
                                <img className='img-fluid rounded' src={Image1} alt="" />
                            </div>
                            <div className="col-6 mt-4">
                                <img className='img-fluid rounded' src={Image2} alt="" />
                            </div>
                            <div className="col-6 mt-4">
                                <img className='img-fluid rounded' src={Image3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BeyondTheOrdinary;