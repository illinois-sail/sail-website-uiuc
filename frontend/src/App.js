import React, { useEffect } from "react";
import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import background from "./assets/final_background.png";
import AuthContext, { AuthProvider, useAuth } from "./components/AuthContext";

const App = () => {

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newBackgroundSize = 100 + scrollPosition * 0.1; // Adjust the multiplier as needed
      document.getElementById("background-container").style.backgroundSize = `${newBackgroundSize}% ${newBackgroundSize}%`;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <AuthProvider>
        <div style={{ position: "relative" }}>
        <div
          id="background-container"
          className="background-container"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
        <div style={{ zIndex: 1 }}>
          <NavBar />
          <AppRouter />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
