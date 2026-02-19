import "./Auth.css"
import {useState} from "react"
import {ArrowLeftIcon} from "@heroicons/react/24/outline"
import {useNavigate} from "react-router-dom";

import Login from "./Login"
import Register from "./Register"

export default () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const setToLogin = () =>{
    setValue(0);
  };
  const setToRegister = () =>{
    setValue(1);
  }


  return (
    <div className="auth-page">
      <ArrowLeftIcon className="arrow-left" onClick={() => navigate(-1)}/>
      <div className="bg"></div>
      <div className="set-button">
        <button onClick={setToLogin} className={`login-btn ${value === 0 ? "active" : ""}`}>Login</button>
        <button onClick={setToRegister} className={`register-btn ${value === 1 ? "active" : ""}`}>Register</button>
      </div>
      <div>
        {value === 0 && <Login />}
        {value === 1 && <Register />}
      </div>
    </div>
  )
}