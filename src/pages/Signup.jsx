import React, { useState } from "react";
import axios from "axios";

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
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Your Username</label>
        <input
          type="text"
          placeholder="Enter your name"
          name="username"
          value={userCredentials.username}
          onChange={handleChange}
          required
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
        />
        <br />
        <label htmlFor="userRole">Your role</label>
        <small>Leave blank if no role applies</small>
        <select
          name="userRole"
          id=""
          value={userCredentials.userRole}
          onChange={handleChange}>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </main>
  );
}

export default Signup;
