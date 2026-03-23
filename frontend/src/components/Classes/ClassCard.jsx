import React from "react";

// Temp class card
function ClassCard({ text }) {
  return (
    <div
      style={{
        aspectRatio: "0.811145511",
        width: "26.2vw",
        maxWidth: "325px",
        boxShadow: "-3px 3px rgba(0,0,0,.5)",
        backgroundColor: "white",
        border: "3px solid black",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      ClassCard of {text}
    </div>
  );
}

export default ClassCard;
