import React from 'react';
import About from '../About/About';
import Banner from '../../libs/Banner/Banner';
import Tabs from '../../libs/Tabs/Tabs';
import Reviews from '../../libs/Reviews/Reviews';
import TrustedBy from '../../libs/Trusted/TrustedBy';
import InstructorsHeader from '../../libs/Instructors/Instructors';
// import SlidePage from '../../libs/Slide/slide';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <Tabs></Tabs>
            <Reviews></Reviews>
            <InstructorsHeader></InstructorsHeader>
            <TrustedBy></TrustedBy>

            {/*  */}
            {/* <SlidePage></SlidePage> */}
        </div>
    );
};

export default Home;