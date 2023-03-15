import React from "react";
import { useState } from "react";

const Paperplane = () => {
  return (
    <>
      <svg
        xmlSpace="preserve"
        viewBox="0 0 100 100"
        y="0"
        x="0"
        xmlns="http://www.w3.org/2000/svg"
        id="圖層_1"
        version="1.1"
        style={{ height: "60%", width: "60%", background: "transparent"}}
        width="150px"
        height="100px"
        on
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="10 0 0; 0 0 0;"
          dur="1.5s"
          repeatCount="1"
          begin="0s"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="-65 45; 0 0;"
          dur="1.5s"
          repeatCount="1"
          begin="0s"
          additive="sum"
        />
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1.3;1.0;"
          dur="1.5s"
          repeatCount="1"
          begin="0s"
          additive="sum"
        />
        <g class="ldl-scale" style={{ transform: "scale(1.1, 1.1)" }}>
          <g class="ldl-ani">
            <g class="ldl-layer">
              <g
                class="ldl-ani"
                style={{
                  transformOrigin: "80% 50%",
                  transform: "scale(1.1)",
                }}
              >
                <path
                  d="M88.1 15L27.4 55.8l-15.5-8.5z"
                  fill="#e0e0e0"
                  style={{ fill: "rgb(100, 182, 172)" }}
                ></path>
              </g>
            </g>
            <g class="ldl-layer">
              <g
                class="ldl-ani"
                style={{
                  transformOrigin: "80% 50%",
                  transform: "scale(1.1)",
                }}
              >
                <path
                  d="M88.1 15L71.2 80.1l-19.7-11L39.4 85V62.5z"
                  fill="#e0e0e0"
                  style={{ fill: "rgb(100, 182, 172)" }}
                ></path>
              </g>
            </g>
            <g class="ldl-layer">
              <g
                class="ldl-ani"
                style={{
                  transformOrigin: "80% 50%",
                  transform: "scale(1.1)",
                }}
              >
                <path
                  fill="#666"
                  d="M29.8 56.5l7.7 18.7V62.5c0-.5.2-1 .6-1.4l33.4-32.6-41.7 28z"
                  style={{ fill: "rgb(72, 118, 113)" }}
                ></path>
              </g>
            </g>
            <g class="ldl-layer">
              <g
                class="ldl-ani"
                style={{
                  transformOrigin: "80% 50%",
                  transform: "scale(1.1)",
                }}
              >
                <path
                  d="M90 14.8c0-.2-.1-.4-.1-.5v-.1s0-.1-.1-.1c-.1-.1-.1-.2-.2-.3l-.4-.4c-.2-.1-.4-.2-.5-.2h-.6-.1c-.2 0-.3.1-.5.1L11.2 45.5c-.7.3-1.1.9-1.2 1.7s.3 1.4 1 1.8l14.8 8.2 11.8 28.5c.2.5.6.9 1.2 1.1.2.1.4.1.6.1.6 0 1.2-.3 1.5-.8l11-14.5 18.3 10.1c.5.3 1.2.3 1.7.1.6-.2 1-.7 1.1-1.3l16.9-65c.1-.2.1-.4.1-.7 0 .1 0 .1 0 0zM16.4 47.5l53.8-22.8-42.9 28.8-10.9-6zm21.7 13.6c-.4.4-.6.9-.6 1.4v12.7l-7.7-18.7 41.7-28-33.4 32.6zm3.3 4.7l7.2 4-7.2 9.5V65.8zM70 77.1l-17.6-9.7-9.7-5.4 41.8-40.8L70 77.1z"
                  style={{ fill: "#3b3f3e" }}
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </>
  );
};

export default Paperplane;
