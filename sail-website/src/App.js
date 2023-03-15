// import "./App.css";
// import AppRouter from "./components/AppRouter";
// import NavBar from "./components/NavBar";
// //import React from '/react';
// //import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import HomePage from "./components/HomePage";
// import Home from "./components/Home";
// import Typography from "@mui/material/Typography";
// import Question from "./components/Questions";
// import Box from "@mui/material/Box";
// import beachHut from "./surf_hut.png";
import React from "react";
// import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import ResetPassword from "./components/ResetPassword";
// import ResetPasswordConfirm from "./components/ResetPasswordConfirm";
// import Activate from "./components/Activate"
// import {Provider} from 'react-redux';
// import store from './components/store';
// import Layout from './components/Layout';  

// in main branch
import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Home from './components/Home';
import Typography from '@mui/material/Typography';
import Question from './components/Questions';

import Box from "@mui/material/Box";


const App = () => {
  return (
    <div>
      <AppRouter />
      <NavBar />
    </div>
  );
}

export default App;
