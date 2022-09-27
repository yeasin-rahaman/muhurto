import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer bg-dark text-center'>
            <div className='d-flex justify-content-between container p-4 text-white align-items-center row mx-auto'>
                <div className='col-md-4 col-12 my-2'>
                    <p className='p-0 m-0'>© 2022 Yeasin Rahaman, All rights reserved.</p>
                </div>
                <div className='col-md-4 col-12 my-2'>
                    <div >
                        <span>
                            <a target="_blank">
                                <i class="fab px-4 fa-twitter"></i>
                            </a>
                        </span>
                        <span >
                            <a target="_blank">
                                <i class="fab px-4 fa-facebook"></i>
                            </a>
                        </span>
                        <span >
                            <a target="_blank">
                                <i class="fab px-4 fa-instagram"></i>
                            </a>
                        </span>
                        <span >
                            <a target="_blank" href='/home'>
                                <i class="fab px-4 fa-youtube"></i>
                            </a>
                        </span>
                    </div>
                </div>
                <div className='col-md-4 col-12 my-2'>
                    <div className='footerNavigation'>
                        <span>
                            Home
                        </span>
                        <span >
                            Services
                        </span>
                        <span >
                            Packages
                        </span>
                        <span >
                            Portfolio
                        </span>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Footer;