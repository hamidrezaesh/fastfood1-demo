import "./Cart.css"
import Cart from "../../Components/Cart/Cart"
import { Link } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"

export default () =>{
    return(
        <div>
            <Navbar />
            <div className="section">
                <h2>Cart is Empty!</h2>
                <button><Link to="/order">Order Now!</Link></button>
            </div>
            <Cart cart={0} className="cart"/>
            <Footer />
        </div>
    )
}