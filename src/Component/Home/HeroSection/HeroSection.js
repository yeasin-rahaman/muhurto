import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import muhurtoLogo from './../../../Assets/Images/muhurtooLogo.png'

import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className='HeroSection'>
            <div className="container">
                <div className='d-flex  '>
                    <div className='heroText p-5 rounded'>
                        <img src={muhurtoLogo} className='img-fluid mb-5' alt="" />

                        <h3>
                            <TypewriterComponent
                                options={{
                                    strings: ['Photographer', 'Film Maker', 'Reflect what you Desire', 'Tomorrow is Precious'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100
                                }}
                            />
                        </h3>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default HeroSection;