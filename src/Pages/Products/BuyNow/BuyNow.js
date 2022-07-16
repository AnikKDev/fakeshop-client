import React from 'react';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom'
import swal from 'sweetalert'
import { useQuery } from 'react-query';
import LoadingSpinner from '../../../Utilities/LoadingSpinner';

const BuyNow = () => {
    // get single product
    const { id } = useParams();

    const { data: buyingProduct, isLoading } = useQuery(['buingProduct'], () => fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json()));
    // console.log(buyingProduct)

    // const { title, image, price, description, rating, category } = buyingProduct;

    const handleSubmit = e => {
        e.preventDefault();
        swal("Success!", "Your order has been placed!", "success");
    }

    if (isLoading) {
        return <LoadingSpinner />
    }
    return (
        <div className="my-5">
            <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="productName">
                    <Form.Control type="text" value={buyingProduct?.title} disabled />
                </Form.Group>

                <Form.Group className="mb-3" controlId="price">
                    <Form.Control type="text" value={`$${buyingProduct?.price}`} disabled />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Control type="text" required placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Control type="text" required placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Control type="number" required placeholder="Phone" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                    <Form.Control type="text" required placeholder="Address" />
                </Form.Group>

                <button className="buy-now-btn d-block mx-auto" type="submit">Proceed</button>
            </Form>
        </div>
    );
};

export default BuyNow;