import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import EmployeesView from "./pages/EmployeesView";

function App() {
  return (
    <>
      <h1>The employee management app</h1>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="login"
            element={<Login />}
          />
          <Route
            path="signup"
            element={<Signup />}
          />
          <Route
            path="employees"
            element={<EmployeesView />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
