import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="d-flex my-5 justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default LoadingSpinner;