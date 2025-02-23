//Controls routing in application

import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import { Provider } from "react-redux"; // TODO
import Home from "./Home";
import ClassTemplate from "./ClassTemplate";
import ClassSchedule from "./ClassSchedule"
import store from "./store";
import SignUp from "./SignUp";
import Profile from "./Profile";
import ProfileTest from "./ProfileTest";
import ResetPassword from "./ResetPassword";
import Logout from "./Logout";
import AboutPage from "./AboutPage";
import Register from "./Register";
import ResetPasswordToken from "./ResetPasswordToken";


const AppRouter = () => {
  return (
    <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/aboutus' element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/classes" element={<ClassTemplate />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reset_password" element={<ResetPassword />} />
          <Route path='/reset_password/:token' element={<ResetPasswordToken />} />
          <Route path='/register' element={<Register />} />
          <Route path="/profile_test" element={<ProfileTest />} />
          

          {/*  <Route path="/classes_test" element={<ClassSchedule />} /> */}
        </Routes>
    </Provider>
  );
};

export default AppRouter;