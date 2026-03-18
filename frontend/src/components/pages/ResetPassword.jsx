import "../Account/Account.css";
import { useState, useEffect } from "react";
import AccountInput from "../Account/AccountInput";
import { ReactComponent as Exclamation } from "../../assets/account/forgot-exclaim.svg";
import { ReactComponent as Lightning } from "../../assets/account/forgot-lightning.svg";
import { useAuth } from "./AuthContext";
import SERVER_URL from "./server_url";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const { setAuthUser, setIsLoggedIn } = useAuth();

  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setIsLoggedIn(true);
      setAuthUser(JSON.parse(storedUser));
      window.location.href = "/";
    }
  }, []);

  const handleResetPassword = (e) => {
    e.preventDefault();
    const formData = { email };
    fetch(`${SERVER_URL}/reset_password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 401) {
          alert("Email does not exist. Email not sent.");
        } else if (response.status === 200) {
          alert(`An email has been sent to ${email} with reset instructions.`);
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
      <span className="accountTitle">Forgot Password?</span>

      <AccountInput
        className="accountEmail"
        size="small"
        label="EMAIL:"
        placeholder="Email"
        inputType="email"
        enterKeyHint="done"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="accountButton forgotConfirm" type="submit">
        SEND RESET EMAIL
      </button>

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

export default ResetPassword;