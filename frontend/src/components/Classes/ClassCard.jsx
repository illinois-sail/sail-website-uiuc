import React, { useEffect, useState } from "react";
import "./ClassCard.css";
import axios from "axios";
import SERVER_URL from "../server_url.js";

const initialAuthUser = JSON.parse(localStorage.getItem("authUser"));

function ClassCard({ className, room, time, description, onRegisterClick, index, activated, capacity, zoomLink }) {
    const [authUser, setAuthUser] = useState(initialAuthUser);
    const [dataFetched, setDataFetched] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [seatsRemaining, setSeatsRemaining] = useState("loading");

    useEffect(() => {
        if (!dataFetched) {
            if (authUser) {
                axios.get(`${SERVER_URL}/get_classes/${authUser.email}`)
                .then((response) => {
                    setAuthUser({ ...authUser, classes: response.data.classes });
                    setDataFetched(true);
                    setIsRegistered(response.data.classes[index] === "1");
                })
                .catch((error) => {
                    console.error(error);
                });
            }
        }
        if (seatsRemaining === "loading") {
        axios.get(`${SERVER_URL}/get_seats_remaining`)
            .then((response) => {
                setSeatsRemaining(response.data[index].remainingSeats);
            })
            .catch((error) => {
                console.error("error fetching seats remaining:", error);
            });
        }
    }, [authUser, dataFetched, seatsRemaining]);

    useEffect(() => {
        if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        }
    }, [authUser]);

    useEffect(() => {
        setAuthUser(JSON.parse(localStorage.getItem('authUser')));
    }, [isRegistered]);

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
                    {className}
                </div>
                {!authUser ? (
                    // if no authUser + virtual
                    room === "Zoom" || room === "Virtual" ? (
                        <div className="card-class-logistics">
                            Zoom · {time}
                        </div>
                    ) : (
                        // if no authUser + in person
                        <div className="card-class-logistics">
                            {room} · {time}
                        </div>
                    )
                ) : (
                    // authUser + virtual
                    room === "Zoom" && zoomLink ? (
                        <div className="card-class-logistics">
                            <span><a href={zoomLink} target="_blank" rel="noopener noreferrer"><span>Zoom</span></a></span>
                            <span>·</span>
                            <span>{time}</span>
                        </div>
                    ) : (
                        // authUser + in person
                        <div className="card-class-logistics">
                            {room} · {time}
                        </div>
                    )
                )}
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
                    {description}
                </div>
                <div className="class-rem-seats" style={{ marginTop: "1.5vw" }}>
                    Remaining Seats: {seatsRemaining} / {capacity}
                </div>
                {authUser ? (
                    <button className="class-register-btn" style={{ marginTop: "0.5vw" }} onClick={() => { setIsRegistered(!isRegistered); onRegisterClick(index); }} disabled={!activated || seatsRemaining === "loading" || (!isRegistered && seatsRemaining === 0)}>
                        <span className="class-rem-seats" style={{ color: "#FFF", fontFamily: "Classic Comic"}}>
                            {seatsRemaining === 0 && !isRegistered
                                ? "Full"
                                : isRegistered
                                    ? "Unregister"
                                    : "Register"}
                        </span>
                    </button>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default ClassCard;
