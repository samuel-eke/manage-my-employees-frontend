import React from "react";
import { NavLink } from "react-router";
import styles from "../styles/Homepage.module.css";

function Home() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Home;
