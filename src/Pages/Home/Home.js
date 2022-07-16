import React from 'react';
import BannerCarousel from '../../Utilities/Carousel/BannerCarousel';
import Products from '../Products/Products';
import Commitment from './Commitment/Commitment';

const Home = () => {
    return (
        <div>
            <BannerCarousel />
            <Commitment />
            <Products />
        </div>
    );
};

export default Home;