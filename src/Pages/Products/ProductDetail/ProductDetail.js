import React from 'react';
import { useParams, Link, Outlet } from 'react-router-dom'
import { useQuery } from 'react-query';
import './ProductDetail.css';
import LoadingSpinner from '../../../Utilities/LoadingSpinner';
const ProductDetail = () => {
    // get single product
    const { id } = useParams();
    const { data: product, isLoading } = useQuery(['product'], () => fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json()));
    // const { title, image, price, description, rating, category } = product;
    // const { rate, count } = rating;

    if (isLoading) {
        return <LoadingSpinner />
    }
    return (
        <div className="row container mx-auto my-5">
            <div className="col-md-6">
                <img className="img-fluid" style={{ width: "70%" }} src={product?.image} alt="" />
            </div>
            <div className="col-md-6">
                <h3 className="my-3">{product?.title}</h3>
                <h4 className="my-2">${product?.price}</h4>
                <div className="mt-5">
                    <p className="text-muted">
                        {product?.description}
                    </p>
                    <div className="d-md-flex w-50 mt-2 ">
                        <h6 className="mx-3">{product?.category}</h6>
                        <h6 className="text-muted mx-3">{product?.rating?.rate} ({product?.rating?.count})</h6>
                    </div>
                </div>
                <Link to={`buy-now/${id}`}>
                    <button className="buy-now-btn mt-5">Buy Now</button>
                </Link>
            </div>
            {/* nested route with product purchase info */}
            <div className="my-4">
                <Outlet />
            </div>

        </div>
    );
};

export default ProductDetail;