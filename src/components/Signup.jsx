import React, { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert(`Signed up with username: ${username} and password: ${password}`);

    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <article style={{ display: "flex", justifyContent: "space-around" }}>
      <div style={{ width: "40%" }}>
        <form onSubmit={handleSubmit}>
          <h1 style={{ textAlign: "center" }}>Signup</h1>
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
          <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Sign up</button>
        </form>
        <div>
          Already have an account? <a href="#">Login here.</a>
        </div>
      </div>
    </article>
  );
};

export default Signup;
