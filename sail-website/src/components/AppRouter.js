import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./HomePage";
import Register from "./Register";
import ResetPassword from "./ResetPassword";
import ResetPasswordConfirm from "./ResetPasswordConfirm";
import Activate from "./Activate"
import {Provider} from 'react-redux';
import store from './store';
import Layout from './Layout';  

function AppRouter() {
  return (
    //PROBLEM WITH PROVIDER 
    //<Provider store ={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          {/* <Route path="/About" element={<About />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword/>}/>
          <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm/>}/>
          <Route path="/activate/:uid/:token" element={<Activate/>}/>
        </Routes>
      </BrowserRouter>
    //</Provider>
  );
}

export default AppRouter;
