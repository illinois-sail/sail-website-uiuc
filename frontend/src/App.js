import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/store";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import Register from "./components/pages/Register";
import Transportation from "./components/pages/Transportation";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Classes from "./components/pages/Classes.jsx";
import Faq from "./components/pages/Faq";
import SignUp from "./components/pages/SignUp";
import Logout from "./components/pages/Logout";
import ResetPassword from "./components/pages/ResetPassword";
import ResetPasswordToken from "./components/pages/ResetPasswordToken";

function App() {
  return (
    <Provider store={store}>
      <div className="app-layout">
        <Navbar />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/transportation" element={<Transportation />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/reset_password" element={<ResetPassword />} />
            <Route path="/reset_password/:token" element={<ResetPasswordToken />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Provider>
  );
}

export default App;