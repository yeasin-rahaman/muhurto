import React from 'react';
import BestInPrice from './BestInPrice/BestInPrice';
import BeyondTheOrdinary from './BeyondTheOrdinary/BeyondTheOrdinary';
import HeroSection from './HeroSection/HeroSection';
import Portfolio from './Portfolio/Portfolio';
import OurStory from './OurStory/OurStory';
import Specialist from './Specialist/Specialist';
import Footer from './Footer/Footer';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import Testimonial from './Testimonial/Testimonial';
import Contact from './Contact/Contact';



const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <OurStory></OurStory>
            <Portfolio></Portfolio>
            <Specialist></Specialist>
            <WhyChooseUs></WhyChooseUs>
            <Testimonial></Testimonial>
            <BestInPrice></BestInPrice>
            {/* <BeyondTheOrdinary></BeyondTheOrdinary> */}
            <Contact></Contact>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;