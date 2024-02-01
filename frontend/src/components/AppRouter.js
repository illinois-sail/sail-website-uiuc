import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { Provider } from "react-redux";
import HomePage from "./HomePage";
import ClassTemplate from "./ClassTemplate";
import store from "./store";
import SignUp from "./SignUp";

const AppRouter = () => {
  return (
    //PROBLEM WITH PROVIDER
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/classes" element={<ClassTemplate />} />
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
export default AppRouter;
