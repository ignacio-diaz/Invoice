import React from 'react';
var productTotal = 0; 

const ProductDetail = (props) => {
    productTotal = props.productUnits*props.productPrice;
    return (
        <div className="detail-form">
            <p className="product">{props.productName} {props.productSize}</p>
            <p>{props.productUnits}</p>
            <p>{productTotal}</p>
          </div>
    );
};

export default ProductDetail;