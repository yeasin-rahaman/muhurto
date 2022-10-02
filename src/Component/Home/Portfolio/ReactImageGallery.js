import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Modal.css'
import img1 from './../../../Assets/Images/Portfolio/1.jpg';
import img2 from './../../../Assets/Images/Portfolio/2.jpg';
import img3 from './../../../Assets/Images/Portfolio/3.jpg'
import img4 from './../../../Assets/Images/Portfolio/4.jpg'
import img5 from './../../../Assets/Images/Portfolio/4(2).jpg'
import img6 from './../../../Assets/Images/Portfolio/5.jpg'
import img7 from './../../../Assets/Images/Portfolio/6.jpg'
import img8 from './../../../Assets/Images/Portfolio/7.jpg'
import img9 from './../../../Assets/Images/Portfolio/8.jpg'
import img10 from './../../../Assets/Images/Portfolio/9.jpg'
import img11 from './../../../Assets/Images/Portfolio/10.jpg'
import img12 from './../../../Assets/Images/Portfolio/11.jpg'
import img13 from './../../../Assets/Images/Portfolio/12.jpg'
import img14 from './../../../Assets/Images/Portfolio/13.jpg'
import img15 from './../../../Assets/Images/Portfolio/14.jpg'
import img16 from './../../../Assets/Images/Portfolio/15.jpg'
import img17 from './../../../Assets/Images/Portfolio/16.jpg'
import img18 from './../../../Assets/Images/Portfolio/17.jpg'
import img19 from './../../../Assets/Images/Portfolio/18.jpg'
import img20 from './../../../Assets/Images/Portfolio/19.jpg'
import img21 from './../../../Assets/Images/Portfolio/20.jpg'
import img22 from './../../../Assets/Images/Portfolio/21.jpg'
import img23 from './../../../Assets/Images/Portfolio/22.jpg'
import img24 from './../../../Assets/Images/Portfolio/23.jpg'
import img25 from './../../../Assets/Images/Portfolio/24.jpg'
import img26 from './../../../Assets/Images/Portfolio/25.jpg'
import img27 from './../../../Assets/Images/Portfolio/26.jpg'
import img28 from './../../../Assets/Images/Portfolio/27.jpg'
import img29 from './../../../Assets/Images/Portfolio/28.jpg'
import img30 from './../../../Assets/Images/Portfolio/29.jpg'
import img31 from './../../../Assets/Images/Portfolio/30.jpg'
import img32 from './../../../Assets/Images/Portfolio/31.jpg'
import img33 from './../../../Assets/Images/Portfolio/32.jpg'
import img34 from './../../../Assets/Images/Portfolio/33.jpg'
import img35 from './../../../Assets/Images/Portfolio/34.jpg'
import img36 from './../../../Assets/Images/Portfolio/35.jpg'
import img37 from './../../../Assets/Images/Portfolio/36.jpg'
import img38 from './../../../Assets/Images/Portfolio/37.jpg'
import img39 from './../../../Assets/Images/Portfolio/38.jpg'

import "react-image-gallery/styles/css/image-gallery.css";
// import "react-image-gallery/styles/scss/image-gallery.scss";
const ReactImageGallery = () => {
    const images = [
        {
            original: img1,

            thumbnail: img1,
        },
        {
            original: img2,

            thumbnail: img2,
        },
        {
            original: img3,

            thumbnail: img3,
        },
        {
            original: img4,

            thumbnail: img4,
        },
        {
            original: img5,

            thumbnail: img5,
        },
        {
            original: img6,

            thumbnail: img6,
        },
        {
            original: img7,

            thumbnail: img7,
        },
        {
            original: img8,

            thumbnail: img8,
        },
        {
            original: img9,

            thumbnail: img9,
        },
        {
            original: img10,

            thumbnail: img10,
        },
        {
            original: img11,

            thumbnail: img11,
        },
        {
            original: img12,

            thumbnail: img12,
        },
        {
            original: img13,

            thumbnail: img13,
        },
        {
            original: img14,

            thumbnail: img14,
        },
        {
            original: img15,

            thumbnail: img15,
        },
        {
            original: img16,

            thumbnail: img16,
        },
        {
            original: img17,

            thumbnail: img17,
        },
        {
            original: img18,

            thumbnail: img18,
        },
        {
            original: img19,

            thumbnail: img19,
        },
        {
            original: img20,

            thumbnail: img20,
        },
        {
            original: img21,

            thumbnail: img21,
        },
        {
            original: img22,

            thumbnail: img22,
        },
        {
            original: img23,

            thumbnail: img23,
        },
        {
            original: img24,

            thumbnail: img24,
        },
        {
            original: img25,

            thumbnail: img25,
        },
        {
            original: img26,

            thumbnail: img26,
        },
        {
            original: img27,

            thumbnail: img27,
        },
        {
            original: img28,

            thumbnail: img28,
        },
        {
            original: img29,

            thumbnail: img29,
        },
        {
            original: img30,

            thumbnail: img30,
        },

        {
            original: img31,

            thumbnail: img31,
        },
        {
            original: img32,

            thumbnail: img32,
        },
        {
            original: img33,

            thumbnail: img33,
        },
        {
            original: img34,

            thumbnail: img34,
        },
        {
            original: img35,

            thumbnail: img35,
        },
        {
            original: img36,

            thumbnail: img36,
        },
        {
            original: img37,

            thumbnail: img37,
        },
        {
            original: img38,

            thumbnail: img38,
        },
        {
            original: img39,

            thumbnail: img39,
        },

    ];
    return (
        <div>

            <ImageGallery items={images} />
        </div>
    );
};

export default ReactImageGallery;