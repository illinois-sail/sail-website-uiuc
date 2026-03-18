import "../Account/Account.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AccountInput from "../Account/AccountInput";
import { ReactComponent as Exclamation } from "../../assets/account/forgot-exclaim.svg";
import { ReactComponent as Lightning } from "../../assets/account/forgot-lightning.svg";
import { useAuth } from "./AuthContext";
import SERVER_URL from "./server_url";

function ResetPasswordToken() {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setAuthUser, setIsLoggedIn } = useAuth();

  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setIsLoggedIn(true);
      setAuthUser(JSON.parse(storedUser));
      window.location.href = "/";
    }
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const form = e.target.form;
      const elements = Array.from(form.elements);
      const index = elements.indexOf(e.target);
      const nextElement = elements[index + 1];
      if (nextElement && nextElement.tagName === "INPUT") {
        e.preventDefault();
        nextElement.focus();
      } else {
        e.target.blur();
      }
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    const formData = { new_password: newPassword };
    fetch(`${SERVER_URL}/reset_password/${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 401) {
          alert("Email does not exist. Email not sent.");
        } else if (response.status === 200) {
          alert("Password reset successfully! Please login to continue.");
          window.location.href = "/login";
        }
      })
      .catch((error) => {
        alert("Invalid request. Password was not reset.");
        console.error(error);
      });
  };

  return (
    <form
      className="accountWrapper"
      onSubmit={handleResetPassword}
      style={{ backgroundColor: "#F05E22" }}
    >
      <span className="accountTitle">Reset Password</span>

      <AccountInput
        className="accountPassword"
        size="large"
        label="NEW PASSWORD:"
        placeholder="New Password"
        inputType="password"
        enterKeyHint="next"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <AccountInput
        className="accountConfirmPassword"
        size="large"
        label="CONFIRM PASSWORD:"
        placeholder="Confirm Password"
        inputType="password"
        enterKeyHint="done"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button className="accountButton" type="submit">
        RESET PASSWORD
      </button>

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

export default ResetPasswordToken;