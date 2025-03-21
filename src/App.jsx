import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <h1>The App</h1>
      <BrowserRouter>
        <Routes>
          <Route
            path="login"
            element={<Login />}
          />
          <Route
            path="signup"
            element={<Signup />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
