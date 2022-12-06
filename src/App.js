import React, { useState, useEffect } from "react";
import NavBar from './components/NavBar';
import Shop from './pages/Shop';
import Home from './pages/Home';
import Cart from "./pages/Cart";
import { retrieveProduct } from "./utils/ProductInventory";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/app-style.css'
function App() {
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const [productsInCart, setProductsInCart] = useState([]) //Format of array objects{id:, title:, price:, quantity:, image:}
  

  const addProductToCart = (id) => {
    const chosenProduct = retrieveProduct(id);
    const isInArray = productsInCart.find(item => item.id === id);

    //If item already in array, increase quantity by 1
    if (isInArray !== undefined) {
      const newState = productsInCart.map(item => {
        if (item.id === chosenProduct.id) {
          return {...item, quantity: item.quantity+1};
        }
        return item;
      })
      setProductsInCart(newState);
    } else {
      //if product not already in array, create new object and append to array
      setProductsInCart([...productsInCart, 
          {id:chosenProduct.id,title:chosenProduct.title,price:chosenProduct.price,quantity:1, image:chosenProduct.image}
      ]);
    }
  }


  const deleteProductFromCart = (id) => {
    const productToDelete = productsInCart.filter(product => product.id === id)[0];
    //If quantity > 1, subtract 1 from quantity
    if (productToDelete.quantity > 1) {
      const newState = productsInCart.map(item => {
        if (item.id === productToDelete.id) {
          return {...item, quantity: item.quantity-1};
        }
        return item;
      })
      setProductsInCart(newState);
    } else {
      //If quantity is 1, completely remove from array
        const updatedProducts = productsInCart.filter(product => product.id !== id);
        setProductsInCart(updatedProducts);
    }
  }

  const deleteWhole = (id) => {
    const updatedProducts = productsInCart.filter(product => product.id !== id);
    setProductsInCart(updatedProducts);
  }

  const getTotalPrice = () => {
    let tot = 0;
    for (let i = 0; i < productsInCart.length; i++) {
      tot += (productsInCart[i].price * productsInCart[i].quantity)
    }
    return Math.round((tot +  Number.EPSILON) * 100) / 100;
  }

  const fetchQuantity = () => {
    let totQuantity = 0;
    for (let i = 0; i < productsInCart.length; i++) {
        totQuantity+=productsInCart[i].quantity;
    }
    setCurrentQuantity(totQuantity);
  }

  useEffect(() => {
    fetchQuantity()
  }, [productsInCart])


  return (
    <div className="container">
      <BrowserRouter>
      <NavBar quant={currentQuantity}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route 
            path="/shop" 
            element={
              <Shop    
                cartProducts={productsInCart} 
                setCartProducts={setProductsInCart}
                addProductToCarts={addProductToCart}
              />} 
          />
          <Route path="/cart" 
            element={
              <Cart 
                cartProducts={productsInCart} 
                total={getTotalPrice} 
                addQ={addProductToCart} 
                deleteQ={deleteProductFromCart}
                sDelete={deleteWhole}
                handleQuantChange={setProductsInCart}
              />}
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;