import React from 'react';
import './Memories.css'
import Image1 from './../../../Assets/Images/_MG_1297.jpg'
import Image2 from './../../../Assets/Images/_MG_1350.jpg'
import Image3 from './../../../Assets/Images/_MG_9851.jpg'
import Image4 from './../../../Assets/Images/_MG_9897.jpg'
const Memories = () => {
    return (
        <div className='Memories'>
            <div className="container">
                <div className="row  align-items-center">

                    <div className="col-md-6 col-12">

                        <div className="row">

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

                        <h2>PHOTOGRAPHY IS THE STORY I FAIL TO PUT INTO WORDS</h2>
                        <p>Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Sem et tortor consequat id porta nibh venenatis cras tincidunt praesent semper.</p>
                        <br />
                        <p>
                            Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Sem et tortor consequat id porta nibh venenatis cras tincidunt praesent semper.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Memories;