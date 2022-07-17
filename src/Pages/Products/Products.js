import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../Utilities/LoadingSpinner';
import Product from './Product/Product';
const Products = ({ suggestions }) => {
    //  get all products
    const { data: products, isLoading } = useQuery(['products'], () => fetch('https://fakestoreapi.com/products').then(res => res.json()));

    const navigate = useNavigate();
    console.log(suggestions);
    const handleNavigation = (id) => {
        // setGetId(id)
        console.log(id)
        navigate(`/products/${id}`)
    }


    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <div >
            <div className="suggestion-container w-50 container">
                <ul class="list-group">
                    {
                        suggestions && suggestions.map(suggestion =>
                            <li onClick={() => handleNavigation(suggestion.id)} class="list-group-item">{suggestion.title}</li>
                        )
                    }

                </ul>
            </div>
            <div className="my-5">
                <h3 className="text-center product-heading">Our Products</h3>

                <div className="row mx-auto px-4 mb-5 mt-3 gy-5">
                    {
                        products.map(product => <Product product={product} key={product.id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;