import React from "react";
import "./AltClassCard.css";

function AltClassCard({ className, room, time, description }) {
    return (
        <div className="card-outline" style={{
            border: "0.39vw solid #000",
            background: "#FFF",
            boxShadow: "-0.978vw 0.978vw 0.30vw 0 rgba(0, 0, 0, 0.40)",
            width: "26vw",
            height: "32vw",
            display: "flex",
            flexDirection: "column",
        }}>
            <div className="card-title" style={{
                display: "flex",
                flexDirection: "column",
                width: "26vw",
                minHeight: "6vw",
                height: "auto",
                background: "linear-gradient(0deg, #7FD6F7 0%, #7FD6F7 100%), linear-gradient(0deg, #FA5B9C 0%, #FA5B9C 100%), #FA5B9C",
                justifyContent: "center",
                alignItems: "center",
                padding: "0.5vw 0.8vw",
                boxSizing: "border-box",
            }}>
                <div className="card-class-name">
                    {className}
                </div>
                <div className="card-class-logistics">
                    {room} · {time}
                </div>
            </div>
            <div className="card-body" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "26vw",
                flex: 1,
                padding: "0.5vw",
                boxSizing: "border-box",
            }}>
                <div className="class-desc" style={{ height: "15vw", overflow: "auto", padding: "0.5vw 1vw" }}>
                    {description}
                </div>
            </div>
        </div>
    );
}

export default AltClassCard;