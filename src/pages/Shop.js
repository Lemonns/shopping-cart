import React, { useState, useEffect } from "react";
import '../styles/store-style.css'
import { productsArray, retrieveProduct } from "../utils/ProductInventory";
import ProductCard from "../components/ProductCard";

const Shop = ({ addProductToCarts }) => {
    
    return (
        <div className="store">
            <div className="store-container">
                {productsArray.map((product) => 
                    <ProductCard
                      product={product}
                      handleAdd={addProductToCarts}
                      key={product.id}
                    />
                )}
            </div>
        </div>
    )
}

export default Shop;