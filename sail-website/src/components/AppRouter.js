import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./HomePage";
import Register from "./Register";
import ResetPassword from "./ResetPassword";
import ResetPasswordConfirm from "./ResetPasswordConfirm";
import Activate from "./Activate"

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/About" element={<About />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset_password" element={<ResetPassword/>}/>
        <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm/>}/>
        <Route path="/activate/:uid/:token" element={<Activate/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
