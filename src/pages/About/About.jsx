import "./About.css"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"

export default () =>{
    return(
        <div className="about">
            <Navbar />
            <h2>About Us!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in
            nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque.</p>
            <Footer />
        </div>
    )
}