import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./registerMain";
import { Provider } from "react-redux";
import HomePage from "./HomePage";
import ClassTemplate from "./ClassTemplate";
import Hackathon from "./Hackathon";
import store from "./store";

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
          <Route path="/hackathon" element={<Hackathon />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
export default AppRouter;
