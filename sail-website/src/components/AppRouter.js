import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/Home" element={<Home />} /> */}
        {/* <Route path="/About" element={<About />} /> */}
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/SignUp" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter