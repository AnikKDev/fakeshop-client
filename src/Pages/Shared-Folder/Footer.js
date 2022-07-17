import React from 'react';

const Footer = () => {
    const date = new Date().toDateString();
    return (
        <div>

            <footer clssName="text-center text-lg-start bg-light text-muted">
                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >

                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>



                    <div>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>

                </section>


                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>FakeShop
                                </h6>
                                <p>
                                    An e-commerce company
                                </p>
                            </div>



                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Bags
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Jeweleries</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Gadgets</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">T-Shirts</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Pants</a>
                                </p>
                            </div>



                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </div>



                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i className="fas fa-home me-3"></i> Chittagong, Bangladesh</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    email@fakeshop.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 880 1521370824</p>
                            </div>

                        </div>

                    </div>
                </section>



                <div classNameName="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © {date} Copyright:
                    <a className="text-reset fw-bold" href="#"> FakeShop</a>
                </div>

            </footer>

        </div>
    );
};

export default Footer;