import React, { useState, useEffect } from "react";
import '../styles/navbar-style.css'
import { Link } from "react-router-dom";
//this will always be a child component rendered on each page

const NavBar = (props) => {
    const {quant} = props;
    return (
        <nav>
            <div className='inner-nav'>
                <span>Store</span>
                <div className='links'>
                    <ul>
                        <Link to='/'>
                            <li>Home</li>
                        </Link>
                        <Link to="/shop">
                            <li>Shop</li>
                        </Link>
                        <Link to="/cart">
                            <li>Cart ({quant})</li>
                        </Link>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;