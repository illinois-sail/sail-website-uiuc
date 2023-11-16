import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./HomePage";
import Register from "./registerMain";
import ResetPassword from "./ResetPassword";
import ResetPasswordConfirm from "./ResetPasswordConfirm";
import Activate from "./Activate";
import { Provider } from "react-redux";
import store from "./store";
import Layout from "./Layout";
import Student from "./studentRegister";
import Teacher from "./teacherRegister";
import Success from "./successPage";
import HomePage from "./HomePage";
import About from "./About";
import ClassTemplate from "./ClassTemplate";
import Hackathon from "./Hackathon";

const AppRouter = () => {
  return (
    //PROBLEM WITH PROVIDER
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/classes" element={<ClassTemplate />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/student" element={<Student />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/success" element={<Success />} />
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/password/reset/confirm/:uid/:token"
            element={<ResetPasswordConfirm />}
          />
          <Route path="/activate/:uid/:token" element={<Activate />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
export default AppRouter;
