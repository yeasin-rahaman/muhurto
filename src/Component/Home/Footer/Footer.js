import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer bg-dark'>
            <div className='d-flex justify-content-between container p-4 text-white align-items-center'>
                <div>
                    <p className='p-0 m-0'>© 2020 fab px-4rizio Ferraro, All rights reserved.</p>
                </div>
                <div>
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
                <div>
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