import "./Login.css"

export default () =>{
    return(
        <div className="form">
            <form>
                <input type="email" placeholder="E-Mail" required/>
                <input type="password" placeholder="Password" required/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}