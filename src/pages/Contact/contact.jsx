import "./contact.css"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"

export default () =>{
    return(
        <div className="main">
            <Navbar />
            <div className="contact">
                <h2>Contact Us!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, odio velit vitae delectus est reprehenderit.</p>
                <ul>
                    <li title="Instagram" className="contact-item">
                        <img src="./instagram-logo.png" alt="instagram-logo" id="instagram"/>
                        <span>Instagram</span>
                    </li>
                    <li title="Telegram" className="contact-item">
                        <img src="./telegram-logo.png" alt="telegram logo" id="telegram"/>
                        <span>Telegram</span>
                    </li>
                    <li title="E-Mail" className="contact-item">
                        <img src="./email-logo.png" alt="email logo" id="email"/>
                        <span>Email</span>
                    </li>
                    <li title="Phone" className="contact-item">
                        <img src="./phone-logo.png" alt="phone logo" id="phone"/>
                        <span>Phone</span>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}