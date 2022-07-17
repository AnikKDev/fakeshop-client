import React from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query';
import './ProductDetail.css';
import LoadingSpinner from '../../../Utilities/LoadingSpinner';
import { BiCategoryAlt } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
const ProductDetail = ({ suggestions }) => {
    // get search result
    const navigate = useNavigate();
    console.log(suggestions);
    const handleNavigation = (id) => {
        // setGetId(id)
        console.log(id)
        navigate(`/products/${id}`)
    }
    // get single product
    const { id } = useParams();
    const { data: product, isLoading } = useQuery(['product'], () => fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json()));
    // const { title, image, price, description, rating, category } = product;
    // const { rate, count } = rating;

    if (isLoading) {
        return <LoadingSpinner />
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
            <div className="row container mx-auto py-5">
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
                        <div className="d-md-flex w-75 mt-2 ">
                            <h6 className="mx-3"><BiCategoryAlt className="me-2"></BiCategoryAlt>{product?.category}</h6>
                            <h6 className="text-muted mx-3"><i class="fa-solid fa-star"></i>{product?.rating?.rate}( <i class="fa-solid fa-user-group"></i>{product?.rating?.count})</h6>
                        </div>
                    </div>
                    <Link to={`buy-now/${id}`}>
                        <button className="buy-now-btn mt-5"><i class="fa-solid fa-cart-shopping"></i> Buy Now</button>
                    </Link>
                </div>
                {/* nested route with product purchase info */}
                <div className="my-4">
                    <Outlet />
                </div>

            </div>
        </div>
    );
};

export default ProductDetail;