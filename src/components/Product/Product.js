import React from 'react';
import './Product.css';

const Product = (props) => {

    console.log(props.product);

    return (
        <div>
            <h2>This is Product</h2>
        </div>
    );
};

export default Product;