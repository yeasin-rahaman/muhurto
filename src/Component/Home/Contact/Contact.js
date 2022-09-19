import React from 'react';
import './Contact.css'
import qr from './../../../Assets/Images/testQR.png'
const Contact = () => {
    const mapLocation = 'https://maps.google.com/maps?q=mominauto%20canada&t=&z=15&ie=UTF8&iwloc=&output=embed'

    return (
        <div className='row bg-dark'>
            <div className="col-12 col-md-6 map p-5">
                <iframe src={mapLocation} className='largeMap' title='Hotel and Hospital Map'></iframe>
            </div>

            <div className="col-12 col-md-6 p-5">
                <div>

                </div>
            </div>
        </div>
    );
};

export default Contact;

