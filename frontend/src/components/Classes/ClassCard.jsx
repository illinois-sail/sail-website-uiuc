import React, { useEffect, useState } from "react";
import "./ClassCard.css";
import axios from "axios";
import SERVER_URL from "../server_url.js";

function ClassCard() {
    return (
        <div className="card-outline" style={{
            border: "0.39vw solid #000",
            background: "#FFF",
            boxShadow: "-0.978vw 0.978vw 0.30vw 0 rgba(0, 0, 0, 0.40)",
            width: "26vw",
            height: "32vw"
        }}>
            <div className="card-title" style={{
                display: "flex",
                flexDirection: "column",
                width: "26vw",
                height: "6vw",
                background: "linear-gradient(0deg, #7FD6F7 0%, #7FD6F7 100%), linear-gradient(0deg, #FA5B9C 0%, #FA5B9C 100%), #FA5B9C",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div className="card-class-name">
                    Class Name Goes Here
                </div>
                <div className="card-class-logistics">
                    Class Description · Goes Here
                </div>
            </div>
            <div className="card-body" style={{ 
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "26vw",
                height: "26vw"
            }}>
                <div className="class-desc" style={{ height: "19.5" }}>
                    Class description here
                </div>
                <div className="class-rem-seats" style = {{ marginTop: "1.5vw" }}>
                    Remaining Seats: REM / TOTAL
                </div>
                <button className="class-register-btn">
                    <span>Register</span>
                </button>
            </div>
        </div>
    );
}

export default ClassCard;