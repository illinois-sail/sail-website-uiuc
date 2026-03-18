import "../Account/Account.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImpactMark from "../faq/ImpactMark";
import AccountInput from "../Account/AccountInput";
import axios from "axios";
import { useAuth } from "./AuthContext";
import SERVER_URL from "./server_url";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { setAuthUser, setIsLoggedIn } = useAuth();

  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setIsLoggedIn(true);
      setAuthUser(JSON.parse(storedUser));
      window.location.href = "/";
    }
  }, []);

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  // Handle Enter key to move focus to the next input instead of submitting the form
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const form = e.target.form;
      // Get all form elements as an array
      const elements = Array.from(form.elements);
      const index = elements.indexOf(e.target);

      // Find the next focusable input
      const nextElement = elements[index + 1];

      // Check if the next element is an input (and not the submit button)
      if (nextElement && nextElement.tagName === "INPUT") {
        // STOP the form from submitting
        e.preventDefault();
        // Move the focus to the next box
        nextElement.focus();
      } else {
        e.target.blur(); // Remove focus from the last input - DOES NOT SUBMIT
      }
    }
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    const { email, password } = formData; //unpackage specified fields
    const data = { email: email.trim().toLowerCase(), password }; //repackage
    axios
      .post(`${SERVER_URL}/login`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // console.log("Response:", response);
        // No error but unable to login
        if (response.status === 400) {
          alert(
            "Email not found or Password is incorrect!  Please try again...",
          );
        }
        // 200 response = success!
        else if (response.status === 200) {
          localStorage.setItem("authUser", JSON.stringify(response.data));
          localStorage.setItem("isLoggedIn", true);

          const authUser = JSON.parse(localStorage.getItem("authUser"));
          setAuthUser(authUser);
          setIsLoggedIn(true);

          window.location.href = "/profile";
        }
      })
      //Handles errors
      .catch((error) => {
        if (error.status === 400) {
          alert("Incorrect credentials!  Please try again...");
        } else {
          // console.error("Error:", error);
          alert("Something went wrong!  Please try again later!");
        }
      });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <form
        className="accountWrapper"
        onSubmit={(e) => handleSubmission(e)}
        style={{ backgroundColor: "#79CCFF" }}
      >
        <span className="accountTitle">Log In</span>
        {/* Email */}
        <AccountInput
          className="accountEmail"
          size="small"
          label="EMAIL:"
          placeholder="Email"
          inputType="email"
          enterKeyHint="done"
          onKeyDown={handleKeyDown}
          onChange={(e) => handleChange(e, "email")}
        />
        {/* Password */}
        <AccountInput
          className="accountPassword"
          size="medium"
          label="PASSWORD:"
          placeholder="Password"
          inputType="password"
          enterKeyHint="done"
          onKeyDown={handleKeyDown}
          onChange={(e) => handleChange(e, "password")}
        />

        {/* Forgot Password Text */}
        <Link
          to="/reset_password"
          style={{
            fontFamily: "Classic Comic",
            fontSize: "1.25vw",
            fontWeight: "500",
            width: "100%",
            marginTop: "-6.1vw",
          }}
        >
          Forgot your password?
        </Link>
        {/* Log In Button */}
        <button className="accountButton" type="submit">
          Log In
        </button>
        {/* Graphics */}
        <div
          style={{
            position: "absolute",
            width: "8.50vw",
            top: "-5.4vw",
            left: "-5.4vw",
          }}
        >
          <ImpactMark />
        </div>
        <div
          style={{
            position: "absolute",
            width: "8.50vw",
            bottom: "-5.8vw",
            right: "-6.2vw",
            transform: "rotate(180deg)",
          }}
        >
          <ImpactMark />
        </div>
      </form>
      {/* Register Text */}
      <span
        style={{
          fontFamily: "Classic Comic",
          fontSize: "1.62vw",
          fontWeight: "500",
        }}
      >
        Don't have an account yet? <Link to="/signup">Create one here</Link>!
      </span>
    </div>
  );
}

export default Login;
