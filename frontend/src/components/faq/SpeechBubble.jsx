import React from "react";
import "./SpeechBubble.css";

function SpeechBubble({
  width = "100px",
  tailDirection = "left",
  color = "blue",
  textColor = "#fff",
  text = "TELL ME SOMETHING GOOD!",
  onclick = null,
}) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        preserveAspectRatio="2312/329.3"
        version="1.0"
        viewBox="0 0 1734 300"
        style={{ transform: tailDirection === "right" ? "scale(-1,1)" : null }}
      >
        <defs>
          <filter
            id="buttonShadowLeft"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feDropShadow
              dx="6"
              dy="6"
              stdDeviation="2"
              floodColor="rgba(0,0,0,0.5)"
            />
          </filter>
          <filter
            id="buttonShadowRight"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feDropShadow
              dx="-6"
              dy="6"
              stdDeviation="2"
              floodColor="rgba(0,0,0,0.5)"
            />
          </filter>
        </defs>
        <path
          fill="black"
          stroke="#000"
          strokeWidth="5"
          strokeLineJoin="round"
          transform="translate(5,5)"
          d="M146.1 35.6a44.2 44.2 0 0 0-32.2 38 589 589 0 0 0-.7 48.5c.4 35 .7 41.1 2.2 45.7.9 3 1.6 5.5 1.4 5.7-.2.2-23.9 9.4-52.7 20.6a850.4 850.4 0 0 0-52.8 21.6c-.9 2.3 5.4 7.4 10.9 8.8 5 1.4 6.2 1.2 66-11 49.4-10 61.4-12.2 64-11.4 2 .5 296.6.9 759.3.9 678.1 0 756.7-.2 762-1.5a43.5 43.5 0 0 0 31.5-34c.8-4.2 1-19.6.8-50.5-.3-44-.3-44.6-2.6-50.3a59.7 59.7 0 0 0-29.9-29.9l-5.8-2.3-758-.2c-660-.1-758.7 0-763.4 1.3z"
        />
        <path
          fill={color}
          stroke="#000"
          strokeWidth="5"
          strokeLineJoin="round"
          d="M146.1 35.6a44.2 44.2 0 0 0-32.2 38 589 589 0 0 0-.7 48.5c.4 35 .7 41.1 2.2 45.7.9 3 1.6 5.5 1.4 5.7-.2.2-23.9 9.4-52.7 20.6a850.4 850.4 0 0 0-52.8 21.6c-.9 2.3 5.4 7.4 10.9 8.8 5 1.4 6.2 1.2 66-11 49.4-10 61.4-12.2 64-11.4 2 .5 296.6.9 759.3.9 678.1 0 756.7-.2 762-1.5a43.5 43.5 0 0 0 31.5-34c.8-4.2 1-19.6.8-50.5-.3-44-.3-44.6-2.6-50.3a59.7 59.7 0 0 0-29.9-29.9l-5.8-2.3-758-.2c-660-.1-758.7 0-763.4 1.3z"
        />
        <g
          className={`speechButton ${tailDirection === "right" ? "speechButtonRight" : "speechButtonLeft"}`}
          onClick={onclick}
        >
          <rect
            fill="#fff"
            stroke="#000"
            strokeWidth="7"
            width="177"
            height="115"
            x="1450"
            y="147.5"
            rx="20"
            ry="20"
          />
          <circle
            fill="#000"
            stroke="#000"
            strokeWidth="1"
            cx="1498"
            cy="205"
            r="7"
          />
          <circle
            fill="#000"
            stroke="#000"
            strokeWidth="1"
            cx="1538"
            cy="205"
            r="7"
          />
          <circle
            fill="#000"
            stroke="#000"
            strokeWidth="1"
            cx="1578"
            cy="205"
            r="7"
          />
        </g>
        <text
          x={tailDirection === "right" ? "-190px" : "190px"}
          y="123.5px"
          textAnchor={tailDirection === "right" ? "end" : "start"}
          dominantBaseline="middle"
          transform={tailDirection === "right" ? "scale(-1,1)" : null}
          style={{
            fontFamily: "Classic Relief, Comic Sans MS, sans-serif",
            fontSize: "2.2em",
            fontWeight: "700",
            fill: textColor,
          }}
        >
          {text}
        </text>
      </svg>
    </div>
  );
}

export default SpeechBubble;
