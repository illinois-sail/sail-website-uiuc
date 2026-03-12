import "../Account/Account.css";
import { Link } from "react-router-dom";
import AccountInput from "../Account/AccountInput";
import { ReactComponent as Cloud } from "../../assets/account/register-cloud.svg";
import { ReactComponent as QuestionMarks } from "../../assets/account/register-question.svg";
import { ReactComponent as Star } from "../../assets/account/register-star.svg";

function Register() {
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
    <div>
      <form className="accountWrapper" onSubmit={(e) => e.preventDefault()}>
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
          <Link to="/Faq">HERE!</Link>
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
        Have more questions? Visit our <Link to="/Faq">FAQ page</Link>!
      </span>
    </div>
  );
}

export default Register;
