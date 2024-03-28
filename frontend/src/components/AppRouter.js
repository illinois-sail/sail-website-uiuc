import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { Provider } from "react-redux";
import Home from "./Home";
import ClassTemplate from "./ClassTemplate";
import store from "./store";
import SignUp from "./SignUp";
import Profile from "./Profile";
import AboutUs from "./AboutUs";
import Logout from "./Logout";
import Registration from "./Registration";
import ResetPassword from "./ResetPassword";
import ResetPasswordToken from "./ResetPasswordToken";

const AppRouter = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<ClassTemplate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/reset_password' element={<ResetPassword />} />
          <Route path='/reset_password/:token' element={<ResetPasswordToken />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
export default AppRouter;
