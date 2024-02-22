import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "admin" && password === "password") {
      return;
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <article style={{ display: "flex", justifyContent: "space-around" }}>
      <div style={{ width: "40%" }}>
        <form onSubmit={handleSubmit}>
          <h1 style={{ textAlign: "center" }}>Login</h1>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
        <div>
          Dont have an account? <a href="#">Signup here.</a>
        </div>
      </div>
    </article>
  );
};

export default Login;
