import "../Account/Account.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import ImpactMark from "../faq/ImpactMark";
import AccountInput from "../Account/AccountInput";

function Login() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
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

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <form
        className="accountWrapper"
        onSubmit={(e) => e.preventDefault()}
        style={{ backgroundColor: "#79CCFF" }}
      >
        <span className="accountTitle">Log In</span>
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
          to="/forgotPassword"
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
        Don't have an account yet? <Link to="/register">Create one here</Link>!
      </span>
    </div>
  );
}

export default Login;
