import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import Memories from './Memories/Memories';

import OurStory from './OurStory/OurStory';
import Specialist from './Specialist/Specialist';


const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <OurStory></OurStory>
            <Memories></Memories>
            <Specialist></Specialist>
        </div>
    );
};

export default Home;