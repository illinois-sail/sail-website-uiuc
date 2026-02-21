const CloudPart = ({ cx, cy, rx, ry }) => (
  <g>
    {/* Shadow */}
    <ellipse cx={cx + 6} cy={cy + 6} rx={rx + 4} ry={ry + 4} fill="black" />
    {/* Outline */}
    <ellipse cx={cx} cy={cy} rx={rx + 4} ry={ry + 4} fill="black" />
    {/* Fill */}
    <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="white" />
  </g>
);

function FaqCloud() {
  const parts = [
    //center
    { id: "center", cx: 150, cy: 83.59, rx: 125, ry: 43.59 },
    //highest, then ccw
    { id: "c1", cx: 183.37, cy: 33.06, rx: 41.25, ry: 29.06 },
    { id: "c2", cx: 118.48, cy: 37.9, rx: 41.25, ry: 29.06 },
    { id: "c3", cx: 58.23, cy: 56.59, rx: 41.25, ry: 29.06 },
    { id: "c4", cx: 45.25, cy: 85.65, rx: 41.25, ry: 29.06 },
    { id: "c5", cx: 71.21, cy: 111.94, rx: 41.25, ry: 29.06 },
    { id: "c6", cx: 118.48, cy: 124.4, rx: 41.25, ry: 29.06 },
    { id: "c7", cx: 164.83, cy: 129.94, rx: 41.25, ry: 29.06 },
    { id: "c8", cx: 217.67, cy: 129.94, rx: 41.25, ry: 29.06 },
    { id: "c9", cx: 270.5, cy: 120.25, rx: 41.25, ry: 29.06 },
    { id: "c10", cx: 306.66, cy: 96.03, rx: 41.25, ry: 29.06 },
    { id: "c11", cx: 297.39, cy: 62.12, rx: 41.25, ry: 29.06 },
    { id: "c12", cx: 247.33, cy: 44.82, rx: 41.25, ry: 29.06 },
  ];

  return (
    //Fills container width and proportions
    <svg
      viewBox="0 0 360 170"
      style={{
        width: "100%",
        aspectRatio: "360 / 170",
        display: "block",
        margin: "auto",
      }}
    >
      {/* Draw parts of cloud */}
      {parts.map((part) => (
        <CloudPart key={part.id} {...part} />
      ))}

      {/* Re-draw fills to hide internal borders */}
      {parts.map((p) => (
        <ellipse
          key={`fill-${p.id}`}
          cx={p.cx}
          cy={p.cy}
          rx={p.rx}
          ry={p.ry}
          fill="white"
        />
      ))}

      {/* FAQ Text */}
      <text
        x="175"
        y="95"
        textAnchor="middle"
        style={{
          fontFamily: "DynaPuff, Comic Sans MS, sans-serif",
          fontSize: "48px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
        }}
      >
        FAQ
      </text>
    </svg>
  );
}

export default FaqCloud;
