import { useState } from "react";
import "./App.css";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [login, setLogin] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleLogin() {
    alert(`Welcome ${name}! You are logged in.`);
    setLogin(true);
  }

  return (
    <>
      {!submitted && (
        <form id="form-box" onSubmit={handleFormSubmit}>

          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Submit</button>

        </form>
      )}

      {!login && submitted && (
        <div id="box">
          <h3>Submitted Data</h3>
          <p>Name: {name}</p>
          <p>Email: {email}</p>

          <button
            onClick={() => setSubmitted(false)}
            id="edit-btn"
          >
            Edit
          </button>

          <button
            onClick={handleLogin}
            id="login-btn"
          >
            Login
          </button>
        </div>
      )}

      {login && (
        <div className="app">
          <h1>Welcome to The Cyberpath</h1>
          <p>You are successfully logged in.</p>
        </div>
      )}
    </>
  );
}

export default App;