import react from "react";
import "./Home.css";
import burger_photo_1 from "../../assets/burger.png";
import pizza_photo_1 from "../../assets/pizza.png";
import dish_photo_1 from "../../assets/dish.png"
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";
import { Link } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"

export default () =>{
    useEffect( () => {AOS.init({duration:800}); }, [] )
    return(
        <div className='home'>
            <Navbar />
            <div className='part-1'>
                <img src={burger_photo_1} alt="burger photo" id='food-image'/>
                <p id='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in
                nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque.
                </p>
                <button className="order-btn"><Link to="/order">Order Now!</Link></button>
            </div>
            <div className='part-2' data-aos="fade-up">
                <img src={pizza_photo_1} alt="pizza photo" id='food-image'/>
                <p id='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in
                nisl nisi.</p>
                <button className="order-btn"><Link to="/order">Order Now!</Link></button>
            </div>
            <div className="part-3" data-aos="fade-up">
                <img src={dish_photo_1} alt="dish photo" id="food-image"/>
                <p id='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in
                nisl nisi.</p>
                <button className="order-btn"><Link to="/order">Order Now!</Link></button>
            </div>
            <Footer />
        </div>
    )
}