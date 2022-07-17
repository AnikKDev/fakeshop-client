import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerCarousel from '../../Utilities/Carousel/BannerCarousel';
import Products from '../Products/Products';
import Commitment from './Commitment/Commitment';
import './Home.css';
const Home = ({ suggestions }) => {

    const navigate = useNavigate();
    console.log(suggestions);
    const handleNavigation = (id) => {
        // setGetId(id)
        console.log(id)
        navigate(`/products/${id}`)
    }
    return (
        <div>

            <div className="suggestion-container w-50 container">
                <ul class="list-group">
                    {
                        suggestions && suggestions.map(suggestion =>
                            <li onClick={() => handleNavigation(suggestion.id)} class="list-group-item">{suggestion.title}</li>
                        )
                    }

                </ul>
            </div>
            <BannerCarousel />
            <Commitment />
            <Products />
        </div>
    );
};

export default Home;