import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/Signup.module.css";
import { NavLink } from "react-router";

function Signup() {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
    userRole: "",
  });

  const handleChange = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      user: userCredentials.username,
      pword: userCredentials.password,
      role: userCredentials.userRole,
    };
    try {
      const resp = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/signup`,
        payload
      );
      alert("registration successful");
      console.log(resp.message);
    } catch (error) {
      console.error(error);
      alert("failed");
    }

    console.log(import.meta.env.VITE_SERVER_URL);
    console.log(userCredentials);
  };

  return (
    <div className={styles.coverall}>
      {/* <div className={styles.block1}>
        <h1>Manage workforce</h1>
      </div> */}
      <div className={`${styles.containform} ${styles.block2}`}>
        <div className={styles.formstyling}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Your Username</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="username"
              value={userCredentials.username}
              onChange={handleChange}
              required
              className={styles.input}
            />
            <br />

            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              name="password"
              id=""
              value={userCredentials.password}
              onChange={handleChange}
              required
              placeholder="Your password"
            />
            <br />

            <label htmlFor="userRole">
              Your role{" "}
              <span style={{ fontSize: "12px", color: "#FFFB46" }}>
                *Leave blank if no role applies
              </span>
            </label>
            <select
              className={styles.dropdown}
              name="userRole"
              id=""
              value={userCredentials.userRole}
              onChange={handleChange}>
              <option>----</option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
            </select>
            <button
              type="submit"
              className={styles.btn}>
              Register
            </button>
            <NavLink
              to="/login"
              className={styles.login}>
              Login
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
