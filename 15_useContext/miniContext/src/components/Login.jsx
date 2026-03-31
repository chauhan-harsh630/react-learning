import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";
import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { setUser } = useContext(UserContext);
  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ username, password });
    console.log(username, password);
    alert("Login Successfull");
  };
  return (
    <>
      <div className="container">
        <h2>Login</h2>
        <div className="input-container">
          <FaUser className="icon" />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="input-container">
          <FaLock className="icon" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </>
  );
}

export default Login;
