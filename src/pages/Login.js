import React, { useState } from "react";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      // TO DO: Implement login logic here
      // For now, just console log the credentials
      console.log(`Email: ${email}, Password: ${password}`);
    } else {
      // TO DO: Implement signup logic here
      // For now, just console log the credentials
      console.log(
        `Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}`
      );
    }
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-signup-container">
      <form onSubmit={handleSubmit}>
        <h2>{isLogin ? "Login" : "Sign up"}</h2>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter your password"
        />
        <br />
        {!isLogin && (
          <>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="Confirm your password"
            />
            <br />
          </>
        )}
        {error && <div style={{ color: "red" }}>{setError}</div>}
        <button type="submit">{isLogin ? "Login" : "Sign up"}</button>
        <p>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span onClick={handleToggle}>{isLogin ? "Sign up" : "Login"}</span>
        </p>
      </form>
    </div>
  );
}

export default Login;
