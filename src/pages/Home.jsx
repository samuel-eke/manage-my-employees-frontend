import React from "react";
import { NavLink } from "react-router";
import styles from "../styles/Homepage.module.css";

function Home() {
  return (
    <div className={styles.contain}>
      <NavLink
        to="/signup"
        className={`${styles.signup} ${styles.btn}`}>
        Signup
      </NavLink>

      <NavLink
        to="/login"
        className={`${styles.btn} ${styles.login}`}>
        Login
      </NavLink>
    </div>
  );
}

export default Home;
