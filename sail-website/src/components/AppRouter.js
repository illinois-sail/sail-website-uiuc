import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./HomePage";
import Register from "./Register";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/About" element={<About />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
