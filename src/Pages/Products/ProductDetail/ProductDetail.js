import React from 'react';
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import './ProductDetail.css';
import LoadingSpinner from '../../../Utilities/LoadingSpinner';
const ProductDetail = () => {
    // get single product
    const { id } = useParams();

    const { data: product, isLoading } = useQuery(['product'], () => fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json()));

    const { title, image, price, description, rating, category } = product;
    const { rate, count } = rating;

    if (isLoading) {
        return <LoadingSpinner />
    }
    return (
        <div className="row container mx-auto my-5">
            <div className="col-md-6">
                <img className="img-fluid" style={{ width: "70%" }} src={image} alt="" />
            </div>
            <div className="col-md-6">
                <h3 className="my-3">{title}</h3>
                <h4 className="my-2">${price}</h4>
                <div className="mt-5">
                    <p className="text-muted">
                        {description}
                    </p>
                    <div className="d-md-flex w-50 mt-2 ">
                        <h6 className="mx-3">{category}</h6>
                        <h6 className="text-muted mx-3">{rate} ({count})</h6>
                    </div>
                </div>
                <button className="buy-now-btn mt-5">Buy Now</button>
            </div>

        </div>
    );
};

export default ProductDetail;