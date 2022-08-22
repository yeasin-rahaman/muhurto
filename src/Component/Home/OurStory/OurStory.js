import React from 'react';
import './OurStory.css'
import Image1 from './../../../Assets/Images/IMG_0224.jpg'
import Image2 from './../../../Assets/Images/all most done.jpg'
import Image3 from './../../../Assets/Images/িগলোত.jpg'
const OurStory = () => {
    return (
        <div className='OurStory '>
            <div className="container">
                <div className="row  align-items-center">
                    <div className="col-md-6 col-12">

                        <h2>PHOTOGRAPHY IS THE STORY I FAIL TO PUT INTO WORDS</h2>
                        <p>Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Sem et tortor consequat id porta nibh venenatis cras tincidunt praesent semper.</p>
                        <br />
                        <p>
                            Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Sem et tortor consequat id porta nibh venenatis cras tincidunt praesent semper.
                        </p>
                    </div>
                    <div className="col-md-6">

                        <div className="row">
                            <div className="col-12 mt-4">
                                <img className='img-fluid' src={Image1} alt="" />
                            </div>
                            <div className="col-6 mt-4">
                                <img className='img-fluid' src={Image2} alt="" />
                            </div>
                            <div className="col-6 mt-4">
                                <img className='img-fluid' src={Image3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurStory;