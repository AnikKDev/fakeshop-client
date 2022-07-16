import React from 'react';
import './Product.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Product = ({ product }) => {
    const { title, price, image, id } = product;

    return (
        <div className="col-md-4 d-flex justify-content-center">
            <Link to={`/products/${id}`}>
                <Card className="product-card" style={{ width: '18rem' }}>
                    <Card.Img className="card-images p-3" variant="top" src={image} />
                    <Card.Body>
                        <div className="">
                            <p style={{ fontSize: "1.1em" }} className="text-muted">{title}</p>
                            <p style={{ fontSize: "1.3em" }} className="fw-bold text-muted">${price}</p>
                        </div>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default Product;