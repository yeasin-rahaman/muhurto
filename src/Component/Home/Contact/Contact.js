import React from 'react';
import './Contact.css'
import qr from './../../../Assets/Images/testQR.png'
const Contact = () => {
    const mapLocation = 'https://maps.google.com/maps?q=muhurtoo&t=&z=13&ie=UTF8&iwloc=&output=embed'





    return (
        <div className=' m-0 p-0 contact bg-dark align-item-center ' >
            <div className='align-items-center row m-0 p-0 container mx-auto' data-aos="fade-up">
                <div className="col-12 col-md-6 map" >
                    <iframe src={mapLocation} className='largeMap py-5' title='Hotel and Hospital Map'></iframe>
                </div>

                <div className="col-12 col-md-4 d-flex justify-content-center">
                    <div className='' >
                        <div className='mx-auto  py-5'>
                            <div>
                                <a href="mailto: info@muhurtobangladesh.com"> <p><i class="fa-solid fa-house"></i>info@muhurtobangladesh.com</p></a>

                                <a href="tel:+8801706391888"> <p><i class="fa-solid fa-phone"></i>+880 1706391888</p></a>

                                <a href="tel:+8801706391888"> <p><i class="fa-solid fa-location-dot"></i>+Jagannath Shaha Road, Dhaka
                                </p></a>
                            </div>


                            <div className=' icons text-center'>
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-solid fa-phone"></i>
                                <i class="fa-solid fa-envelope"></i>
                                <i class="fa-solid fa-earth-americas"></i>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="col-12 col-md-2 ">
                    <div className=' py-5'>
                        <img src={qr} className='img-fluid' alt="" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

