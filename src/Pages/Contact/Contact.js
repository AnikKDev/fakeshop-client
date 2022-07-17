import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = ({ suggestions }) => {
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
            <div className="min-vh-100 d-flex justify-content-center align-items-center">
                <h1>
                    This Contact Page
                </h1>
            </div>
        </div>
    );
};

export default Contact;