import React from 'react';
import About from '../About/About';
import Banner from '../../libs/Banner/Banner';
import Tabs from '../../libs/Tabs/Tabs';
import Reviews from '../../libs/Reviews/Reviews';
import TrustedBy from '../../libs/Trusted/TrustedBy';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner></Banner>
            <Tabs></Tabs>
            <Reviews></Reviews>
            <TrustedBy></TrustedBy>
        </div>
    );
};

export default Home;