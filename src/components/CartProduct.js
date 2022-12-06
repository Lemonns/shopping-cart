import React, { useState, useEffect } from "react";
import "../styles/cart-item.css"

const CartProduct = ({ product, handleAddQuant, handleDeleteQuant, wDelete, handleChange }) => {
    return (
        <div className="cart-product-card">
            <div className="left-info">
                <img src={product.image} alt={product.title}/>
            </div>
            <div className="right-info">
                <p className="title">{product.title}</p>
                <p className="price">${product.price}</p>
                <div className="quant-add-del">
                    <button className="minus" onClick={() => handleDeleteQuant(product.id)}>−</button>
                    <input
                        type="number"
                        value={product.quantity}
                        onChange={(e) => handleChange(e, product.id)}
                    />
                    <button className="plus" onClick={() => handleAddQuant(product.id)}>+</button>
                </div>
                <button className="delete-btn" onClick={() => wDelete(product.id)}>Delete</button>
            </div>
        </div>
    )
}

export default CartProduct;