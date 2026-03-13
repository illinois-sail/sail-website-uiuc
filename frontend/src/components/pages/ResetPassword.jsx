import "../Account/Account.css";
import { useState } from "react";
import AccountInput from "../Account/AccountInput";
import { ReactComponent as SpeechSmall } from "../../assets/account/account-speech-sm.svg";
import { ReactComponent as SpeechMedium } from "../../assets/account/account-speech-md.svg";
import { ReactComponent as SpeechLarge } from "../../assets/account/account-speech-lg.svg";
import { ReactComponent as Exclamation } from "../../assets/account/forgot-exclaim.svg";
import { ReactComponent as Lightning } from "../../assets/account/forgot-lightning.svg";

function ForgotPassword() {
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

  const [confirmed, setConfirmed] = useState(false); //temp var to show whether email has been confirmed
  return (
    <form
      className="accountWrapper"
      onSubmit={(e) => e.preventDefault()}
      style={{ backgroundColor: "#F05E22" }}
    >
      <span className="accountTitle">Forgot Password?</span>
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
      {/* TODO Confirm Email Button - currently just toggles the variable */}
      <button
        className="accountButton forgotConfirm"
        onClick={() => setConfirmed(!confirmed)}
      >
        CONFIRM EMAIL
      </button>
      {/* Only show if email is confirmed */}
      {confirmed && (
        <>
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
          {/* Confirm password */}
          <AccountInput
            className="accountConfirmPassword"
            size="large"
            label="CONFIRM PASSWORD:"
            placeholder="Confirm Password"
            inputType="password"
            enterKeyHint="done"
            onKeyDown={handleKeyDown}
          />
          {/* Reset Password Button */}
          <button className="accountButton" type="submit">
            RESET PASSWORD
          </button>
        </>
      )}
      {/* Graphics */}
      <Exclamation
        style={{
          position: "absolute",
          width: "7.23vw",
          top: "0",
          left: "0",
          transform: "translate(10%, -50%)",
        }}
      />
      <Lightning
        style={{
          position: "absolute",
          width: "10.12vw",
          top: "0",
          right: "0",
          transform: "translate(64%, -61%)",
        }}
      />
    </form>
  );
}

export default ForgotPassword;
