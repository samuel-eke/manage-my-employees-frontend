import React, { useState, useContext } from "react";
import styles from "../styles/Login.module.css";
import axios from "axios";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { userLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      user: username,
      pword: password,
    };

    try {
      const resp = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/login`,
        payload
      );
      console.log(resp.data);
      const token = resp.data.accessToken;
      userLogin(token); // Store auth token in context
      console.log(userLogin);
      alert("User successfully logged in");
      sessionStorage.setItem("authToken", token);
      navigate("/dashboard");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>Login</h2>
      <form
        onSubmit={handleSubmit}
        className={styles.form}>
        <div className={styles.formGroup}>
          <label
            htmlFor="username"
            className={styles.label}>
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label
            htmlFor="password"
            className={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <button
          type="submit"
          className={styles.button}>
          Login
        </button>
      </form>
      <p className={styles.noAccount}>
        No account? <NavLink to="/signup">Sign up</NavLink>
      </p>
    </div>
  );
};

export default Login;
