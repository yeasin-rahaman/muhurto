import React from 'react';
import BestInPrice from './BestInPrice/BestInPrice';
import BeyondTheOrdinary from './BeyondTheOrdinary/BeyondTheOrdinary';
import HeroSection from './HeroSection/HeroSection';
import Memories from './Memories/Memories';
import OurStory from './OurStory/OurStory';
import Specialist from './Specialist/Specialist';
import Footer from './Footer/Footer';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';


const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <OurStory></OurStory>
            <Memories></Memories>
            <Specialist></Specialist>
            <WhyChooseUs></WhyChooseUs>
            <BestInPrice></BestInPrice>
            <BeyondTheOrdinary></BeyondTheOrdinary>
            <Footer></Footer>
        </div>
    );
};

export default Home;