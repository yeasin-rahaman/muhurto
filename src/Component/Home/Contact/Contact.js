import React from 'react';
import './Contact.css'
import qr from './../../../Assets/Images/qr-code.png'
const Contact = () => {
    const mapLocation = 'https://maps.google.com/maps?q=Muhurto%20Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed'



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
                                <a href="mailto: info@muhurtobangladesh.com" target="_blank" rel="noreferrer"> <p><i class="fa-solid fa-house"></i>info@muhurtobangladesh.com</p></a>

                                <a href="tel:+8801706391888" target="_blank" rel="noreferrer"> <p><i class="fa-solid fa-phone"></i>+880 1706391888</p></a>

                                <a href="https://goo.gl/maps/um5uaDuLznHhxyzG9" target="_blank" rel="noreferrer"> <p><i class="fa-solid fa-location-dot"></i>House 18, Road 2, Future Housing,

                                    Basila, Dhaka
                                </p></a>
                            </div>
                            <div className=' icons text-center'>
                                <a href="https://www.facebook.com/muhurtooo" target="_blank" rel="noreferrer"> <i class="fa-brands fa-facebook"></i></a>
                                <a href="https://www.instagram.com/muhurto_bangladesh" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
                                <a target="_blank" href='https://www.youtube.com/channel/UCL9_oGUICgMl0lrWL-VLNEg' rel="noreferrer">
                                    <i class="fab px-4 fa-youtube"></i></a>

                                <a href="https://telegram.me/muhurtobangladesh" target="_blank" rel="noreferrer"> <i class="fa-brands fa-telegram"></i></a>
                                <a href="https://wa.me/+8801706391888" target="_blank" rel="noreferrer" > <i class="fa-brands fa-whatsapp"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-2 ">
                    <div className=' py-5'>
                        <img src={qr} className='img-fluid p-4' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

