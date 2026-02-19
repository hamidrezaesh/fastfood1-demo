import React, { useState } from "react";
import "./Order.css";
import { foods } from "../../data/food.js";
import Cart from "../../Components/Cart/Cart.jsx"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"

export default ()=> {

  const [cart, setCart] = useState({});

  const increase = (id) => {
    setCart(prev => ({
      ...prev,
      [id]: prev[id] ? prev[id] + 1 : 1
    }));
  };

  const decrease = (id) => {
    setCart(prev => {
      const current = prev[id] || 0;
      if (current <= 0) return prev;
        return {
          ...prev,
          [id]: current - 1
        };
      });
    };


  return (
    <div>
      <Navbar />
      <div className="order">
        {foods.map(item => (
          <div key={item.id} className="food-card">
            <img src={item.image} alt={item.name} className="food-image" />
            <h3 className="food-name">{item.name}</h3>
            <p className="food-price">{item.price}$</p>
          <div className="add-to-cart">
            <button onClick={() => decrease(item.id)}>-</button>&nbsp;&nbsp;
            <span>{cart[item.id] || 0}</span>&nbsp;&nbsp;
            <button onClick={() => increase(item.id)}>+</button>
          </div>
        </div>
      ))}
      </div>
      <Cart cart={cart} className="cart"/>
      <Footer />
    </div>
  );
}