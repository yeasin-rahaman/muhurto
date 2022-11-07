import React from 'react';
import './Footer.css'
import PrivacyAndPolicy from './PrivacyAndPolicy';
const Footer = () => {
    return (
        <div className='footer bg-dark text-center'>
            <div className='d-flex justify-content-between container p-4 text-white align-items-center row mx-auto'>
                <div className='col-md-4 col-12 my-2'>
                    {/* <p className='p-0 m-0'>© 2022  <a className='text-decoration-none copyright' href='http://yeasinrahaman.netlify.app/' target="_blank" rel="noreferrer">Yeasin Rahaman</a>, All rights reserved.</p> */}
                </div>
                <div className='col-md-4 col-12 my-2'>
                    <div >
                        {/* <span>
                            <a href='/*' target="_blank" rel="noreferrer">
                                <i class="fab px-4 fa-twitter"></i>
                            </a>
                        </span> */}
                        <span >
                            <a href='https://www.facebook.com/muhurtooo' target="_blank" rel="noreferrer" >
                                <i class="fab px-4 fa-facebook"></i>
                            </a>
                        </span>
                        <span >
                            <a href='https://www.instagram.com/muhurto_bangladesh' target="_blank" rel="noreferrer">
                                <i class="fab px-4 fa-instagram"></i>
                            </a>
                        </span>
                        <span >
                            <a target="_blank" href='https://www.youtube.com/channel/UCL9_oGUICgMl0lrWL-VLNEg' rel="noreferrer">
                                <i class="fab px-4 fa-youtube"></i>
                            </a>
                        </span>
                    </div>
                </div>
                <div className='col-md-4 col-12 my-2'>
                    {/* <div className='footerNavigation'>

                        <span >
                            Services
                        </span>
                        <span >
                            Packages
                        </span>
                        <span >
                            Portfolio
                        </span>
                        <span data-bs-toggle="modal" data-bs-target="#PrivacyAndPolicyModal" >
                            Privacy & Policy
                        </span>
                    </div> */}
                </div>
            </div >
            <PrivacyAndPolicy></PrivacyAndPolicy>
        </div>
    );
};

export default Footer;


