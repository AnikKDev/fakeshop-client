import React from 'react';
import BannerCarousel from '../../Utilities/Carousel/BannerCarousel';
import Commitment from './Commitment/Commitment';

const Home = () => {
    return (
        <div>
            <BannerCarousel />
            <Commitment />
        </div>
    );
};

export default Home;