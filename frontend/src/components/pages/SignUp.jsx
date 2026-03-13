import "../Account/Account.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AccountInput from "../Account/AccountInput";
import { ReactComponent as Cloud } from "../../assets/account/register-cloud.svg";
import { ReactComponent as QuestionMarks } from "../../assets/account/register-question.svg";
import { ReactComponent as Star } from "../../assets/account/register-star.svg";
import axios from "axios";
import { useAuth } from "./AuthContext";
import SERVER_URL from "./server_url";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    grade: "",
    password: "",
    confirmPassword: "",
  });

  const { setAuthUser, setIsLoggedIn } = useAuth();

  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setIsLoggedIn(true);
      setAuthUser(JSON.parse(storedUser));
      window.location.href = "/";
    }
  });

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
    if (formData.password !== formData.confirmPassword) {
      alert("Hey!  Passwords don't match!  Please try again...");
      return;
    }
    const { firstName, lastName, email, password } = formData; //unpackage specified fields
    const data = {
      firstName: firstName.trim().toLowerCase(),
      lastName: lastName.trim().toLowerCase(),
      email: email.trim().toLowerCase(),
      password,
    }; //repackage
    axios
      .post(`${SERVER_URL}/signup`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Response:", response);
        // 400 response = email already being used
        if (response.status === 401) {
          alert("Email is already in use");
        }
        // 200 response = success!
        else if (response.status === 200) {
          alert("Account created!");

          const authUserData = { email: data.email, password: data.password }; //todo: probably shouldn't store this in plaintext...
          localStorage.setItem("authUser", JSON.stringify(authUserData));
          localStorage.setItem("isLoggedIn", true);

          const authUser = JSON.parse(localStorage.getItem("authUser"));
          setAuthUser(authUser);
          setIsLoggedIn(true);

          window.location.href = "/login";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        if (error.response.status === 401) {
          alert("Email is already in use");
        } else {
          alert("Something went wrong!  Please try again later...");
        }
      });
  };

  return (
    <div>
      <form className="accountWrapper" onSubmit={(e) => handleSubmission(e)}>
        <span className="accountTitle">Create Account</span>
        {/* First and Last Name */}
        <div className="accountNames">
          {/* First Name */}
          <AccountInput
            className="accountFirstName"
            size="medium"
            label="FIRST NAME:"
            placeholder="First Name"
            inputType="text"
            enterKeyHint="next"
            onKeyDown={handleKeyDown}
            onChange={(e) => handleChange(e, "firstName")}
          />
          {/* Last Name */}
          <AccountInput
            className="accountLastName"
            size="medium"
            label="LAST NAME:"
            placeholder="Last Name"
            inputType="text"
            enterKeyHint="next"
            onKeyDown={handleKeyDown}
            onChange={(e) => handleChange(e, "lastName")}
          />
        </div>
        {/* Email & Grade */}
        <div className="registerEmailGrade">
          {/* Email */}
          <AccountInput
            className="accountEmail"
            size="small"
            label="EMAIL:"
            placeholder="Email"
            inputType="email"
            enterKeyHint="next"
            onKeyDown={handleKeyDown}
            onChange={(e) => handleChange(e, "email")}
          />
          {/* Grade */}
          <AccountInput
            className="registerGrade"
            size="small"
            label="GRADE:"
            placeholder="11th"
            inputType="text"
            enterKeyHint="next"
            onKeyDown={handleKeyDown}
            onChange={(e) => handleChange(e, "grade")}
          />
        </div>
        {/* Password */}
        <AccountInput
          className="accountPassword"
          size="medium"
          label="PASSWORD:"
          placeholder="Password"
          inputType="password"
          enterKeyHint="next"
          onKeyDown={handleKeyDown}
          onChange={(e) => handleChange(e, "password")}
        />
        {/* Confirm Password */}
        <AccountInput
          className="accountConfirmPassword"
          size="large"
          label="CONFIRM PASSWORD:"
          placeholder="Confirm Password"
          inputType="password"
          enterKeyHint="done"
          onKeyDown={handleKeyDown}
          onChange={(e) => handleChange(e, "confirmPassword")}
        />
        {/* Create Account Button */}
        <button className="accountButton" type="submit">
          CREATE
        </button>
        {/* Graphics */}
        <Star
          width="5.05vw"
          style={{ position: "absolute", top: "-1.25vw", left: "-3.15vw" }}
        />
        <Star
          width="5.05vw"
          style={{ position: "absolute", top: "40vw", right: "-4vw" }}
        />
        <Cloud
          width="38.44vw"
          style={{ position: "absolute", bottom: "-15vw", right: "-9.5vw" }}
        />
        <QuestionMarks
          width="12.55vw"
          style={{ position: "absolute", bottom: "-2.3vw", right: "-5.4vw" }}
        />
        {/* Cloud Register Instructions Text */}
        {/* TODO: Change to Registration Instructions */}
        <span
          style={{
            position: "absolute",
            width: "23.81vw",
            bottom: "-8.5vw",
            right: "-1.5vw",
            fontFamily: "Classic Comic",
            fontSize: "1.62vw",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          DON'T KNOW HOW TO REGISTER? FIND MORE INFORMATION{" "}
          <Link to="/register">HERE!</Link>
        </span>
      </form>
      {/* FAQ Text */}
      <span
        style={{
          width: "100%",
          marginLeft: "9.72%",
          fontFamily: "Classic Comic",
          fontSize: "1.62vw",
          fontWeight: "500",
          textAlign: "center",
        }}
      >
        Have more questions? Visit our <Link to="/faq">FAQ page</Link>!
      </span>
    </div>
  );
}

export default SignUp;
