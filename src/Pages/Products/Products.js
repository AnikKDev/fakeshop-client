import React from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../../Utilities/LoadingSpinner';
import Product from './Product/Product';
const Products = () => {
    //  get all products
    const { data: products, isLoading } = useQuery(['products'], () => fetch('https://fakestoreapi.com/products').then(res => res.json()));



    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <div className="my-5">
            <h3 className="text-center product-heading">Our Products</h3>

            <div className="row mx-auto px-4 mb-5 mt-3 gy-5">
                {
                    products.map(product => <Product product={product} key={product.id} />)
                }
            </div>
        </div>
    );
};

export default Products;