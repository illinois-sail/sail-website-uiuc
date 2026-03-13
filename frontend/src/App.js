import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Classes from "./components/pages/Classes";
import Faq from "./components/pages/Faq";
import SignUp from "./components/pages/SignUp"
import ResetPassword from "./components/pages/ResetPassword";
function App() {
  return (
    <div className="app-layout">
      <Navbar />

      <main className="page-content">
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/faq" element={<Faq />} />
          {/* <Route path="/transportation" element={<Transportation />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}

          {/* Auth pages */}
          <Route path="/login" element={<Login />} /> 
          <Route path="/profile" element={<Profile />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/reset_password" element={<ResetPassword />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="/logout" element={<Logout />} /> */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
