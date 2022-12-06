import React, { useState, useEffect } from "react";
//name, id, price, image
//on the add button, call function with id recieved from props
//on delete do something similar...

const ProductCard = (props) => {
    const { product, handleAdd } = props;
    //product.id
    return (
        <div className="product-card">
            <div>
                <img src={product.image} alt={product.title} className="product-image"/>
            </div>
            <div className="b-info">
                <div className="title-price">
                    <p className="s-title">{product.title}</p>
                    <p className="s-price">${product.price}</p>
                </div>
                <div className="add-t-cart">
                    <button onClick={() => handleAdd(product.id)}>Add to Cart</button> {/* use id on click to add porduct/quantity product.id*/} 
                </div>
            </div>
        </div>
    )
}

export default ProductCard;