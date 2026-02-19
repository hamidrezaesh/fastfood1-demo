import { useState } from "react";
import { Link } from "react-router-dom";
import { UserIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import "./Navbar.css";

export default () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/"><img src="/icon.png" alt="logo" className="logo" /></Link>
        
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li title="Home"><Link to="/">Home</Link></li>
          <li title="Order"><Link to="/order">Order</Link></li>
          <li title="About Us"><Link to="/about">About</Link></li>
          <li title="Contact Us"><Link to="/contact">Contact</Link></li>
        </ul>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className="navbar-right">
        <ul>
          <li title="Cart"><Link to="/cart"><ShoppingBagIcon className="icon" /></Link></li>
          <li title="Profile"><Link to="/auth"><UserIcon className="icon" /></Link></li>
        </ul>
      </div>
    </div>
  );
}
