import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Classes from "./components/pages/Classes";
import Faq from "./components/pages/Faq";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Classes" element={<Classes />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/HowToRegister" element={<HowToRegisterRedirect />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Transportation" element={<Transportation />} />
        <Route path="/Faq" element={<Faq />} />
      </Routes>
      <Footer />        

        {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div> */}
    </>
  );
}

export default App;
