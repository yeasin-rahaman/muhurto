import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className='HeroSection'>
            <div className="container">
                <div className='d-flex  '>
                    <div className='heroText p-5 rounded  ms-auto'>
                        <h1><strong>Muhurto</strong>
                            <br />
                            Bangladesh</h1>
                        <h3>
                            <TypewriterComponent
                                options={{
                                    strings: ['PHOTOGRAPHER & FILM MAKER.'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 100
                                }}
                            />
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;