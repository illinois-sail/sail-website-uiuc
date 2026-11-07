import React, { useState, useEffect } from "react";
import "./PreRegisterModal.css";

function PreRegisterModal({ onClose }) {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // TODO: replace with your real endpoint  (Google Apps Script)
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzlyjdV9wWtQQJcOqOeK_xgeuN0zeFd4knmecIdt4WoncNKOWOsEbUfkw83k5F459I/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      );

      // if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pre-register-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>

        {status === "success" ? (
          <div className="modal-success">
            <h2 id="pre-register-title">You're on the list!</h2>
            <p>
              Thanks for pre-registering for Sail 2027. We'll be in touch soon.
            </p>
            <button className="modal-submit" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 id="pre-register-title">Pre-Register for Sail 2027</h2>

            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={form.firstName}
              onChange={handleChange}
              required
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={form.lastName}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            {status === "error" && (
              <p className="modal-error">
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              className="modal-submit"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default PreRegisterModal;
