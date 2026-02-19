import "./Register.css"

import { useState } from "react";

export default () => {
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== repeat) {
      setError("Passwords do not match");
      return;
    }

    setError("");
  };

  return (
    <div className="form">
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="E-Mail" required/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <input type="password" placeholder="Repeat password" value={repeat} onChange={(e) => setRepeat(e.target.value)} required />
            {error && <p style={{color:"red"}}>{error}</p>}
            <button type="submit">Register</button>
    </form>
    </div>
  );
}
