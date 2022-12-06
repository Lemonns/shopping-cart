import React from "react";
import '../styles/cart-style.css'
import CartProduct from "../components/CartProduct";



const Cart = ({ cartProducts, total, addQ, deleteQ, sDelete, handleQuantChange }) => {

    const inputQuantity = (e, id) => {
        //let projectToEdit = cartProducts.filter(product => product.id === id)[0];
        const userInput =  parseInt(e.target.value)
        const newState = cartProducts.map(product => {
            if (product.id === id) {
                return {...product, quantity: userInput}
            }
            return product
        })
        handleQuantChange(newState)
    }


    return (
        <div className="cart-container">
            <div className="item-container">
                {cartProducts.map(product =>
                    <CartProduct 
                      product={product} 
                      handleAddQuant={addQ} 
                      handleDeleteQuant={deleteQ} 
                      wDelete={sDelete} 
                      handleChange={inputQuantity}
                      key={product.id}
                    />
                )}
            </div>
            <div className="line"></div>
            <div className="total-container">
                <h3>Total: ${total()}</h3>
            </div>
        </div>
    )
}

export default Cart;