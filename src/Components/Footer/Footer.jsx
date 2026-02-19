import "./Footer.css"
import { Link } from "react-router-dom"

export default () =>{
    return(
        <div className="Footer">
            <div className="footer">
                <div className="footer-left">
                    <ul>
                        <li title="Home"><Link to="/">Home</Link></li>
                        <li title="Order"><Link to="/order">Order</Link></li>
                        <li title="About"><Link to="/about">About</Link></li>
                        <li title="Contact"><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-center">
                    <ul>
                        <li title="Instagram"><img src="./instagram-logo.png" alt="instagram-logo" id="instagram"/></li>
                        <li title="Telegram"><img src="./telegram-logo.png" alt="telegram logo" id="telegram"/></li>
                        <li title="E-Mail"><img src="./email-logo.png" alt="email logo" id="email"/></li>
                        <li title="Phone"><img src="./phone-logo.png" alt="phone logo" id="phone"/></li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; Copyright 2026. All Rights Reserved.</p>
            </div>
        </div>
    )
}