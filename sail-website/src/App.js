import "./App.css";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
//import React from '/react';
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from "./components/HomePage";
import Home from "./components/Home";
import Typography from "@mui/material/Typography";
import Question from "./components/Questions";
import Box from "@mui/material/Box";
import beachHut from "./surf_hut.png";
import React from "react";
import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import ResetPasswordConfirm from "./components/ResetPasswordConfirm";
import Activate from "./components/Activate"
import {Provider} from 'react-redux';
import store from './components/store';
import Layout from './components/Layout';  



function App() {
  return (
    <div>
      <AppRouter />
      {/* <Provider store ={store}>         */}
      {/* <Router>
          <Layout>
            <Routes>
              <Route exact path = '/' element={HomePage}/>
              <Route exact path = '/login' element={Login}/>
              <Route exact path = '/register' element={Register}/>
              <Route exact path = '/reset-password' element={ResetPassword}/>
              <Route exact path = '/password/reset/confirm/:uid/:token' element={ResetPasswordConfirm}/>
              <Route exact path = '/activate/:uid/:token' element={Activate}/>
            </Routes>
          </Layout>
        </Router> */}
      {/* </Provider> */}
      <NavBar />
      {/* <HomePage /> */}
      {/* <div className="homepage">
       <div>
        <br></br>
       </div>
      <Typography variant='h2' algin='center'>Welcome to SAIL</Typography>
      <h1> April 8th 2023 </h1>
      <div className='info'>

          <p >
            Welcome to Illinois Computer Science Sail!
            We are an entirely student-run organization that hosts an annual event where
            high schoolers have the chance to experience what it is like to be a computer science student
            at the University of Illinois at Urbana-Champaign.
          </p>
          </div>
        <a href="">
          <button className = "button"> Interest From </button>
        </a>
        <a href="">
          <button className = "button"> Teacher Registration </button>
        </a>
        <a href="">
          <button className = "button"> Student Registration </button>
        </a>
        
      <Typography variant='h3' algin='center'>Contact SAIL</Typography>
      <p>Google Form Link?</p>
      </div>
      <div className="section-about">
      <Typography variant='h3' alginItem='center'>About SAIL</Typography>
      <Box
                sx={{
                  display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
                  mx: 5,
                  alignItems: 'center',
                }}
            >
                <Question />
                <img src={beachHut} alt='beach hut' />
            </Box>
      
      </div> */}
    </div>
  );
}

export default App;
