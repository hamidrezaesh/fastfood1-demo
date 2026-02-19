import "./Cart.css"
import React from "react"
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export default ({cart = {} }) =>{
    const totalItems = Object.values(cart).reduce((a, b) => a+b, 0);

    const addToCart = (id) =>{
        setCart(prev => ({
            ...prev,
            [id]: prev[id] ? prev[id] + 1 : 1
        }));
    };

    return(
        <div className="cart">
            <div className="cart-left">
                <ShoppingBagIcon className="cart-icon"/>
            </div>
            <div className="cart-right">
                <p>{totalItems}</p>
                <button className="buy-btn">Buy Now</button>
            </div>
        </div>
    )
}