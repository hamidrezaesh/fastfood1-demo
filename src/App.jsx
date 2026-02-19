import React from 'react'
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/contact"
import Order from "./pages/Order/Order"
import Cart from "./pages/Cart/Cart"
import Auth from "./pages/Auth/Auth"
import ScrollToTop from "./Components/‌ScrollToTop/ScrollToTop"
import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"

export default () => {
  return(
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="home" element={ <Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='contact' element={ <Contact />}/>
        <Route path="order" element={ <Order />}/>
        <Route path="cart" element={ <Cart />} />
        <Route path='auth' element={ <Auth />} />
      </Routes>
    </div>
  )
}