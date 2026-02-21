//Stylized star that inherits the size of its container
function FaqStar({ fill = "#D72F4E", stroke = "#3A260D" }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 252 252">
      <path
        d="
        M 171, 25
        L 119, 61
        Q 112, 65 104, 62
        L 46, 39
        L 64, 96
        Q 69, 106 63, 114
        L 26, 163
        L 85, 165
        Q 95, 165 101, 171
        L 136, 225
        L 154, 166
        Q 158, 156 171, 154
        L 226, 139
        L 177, 105
        Q 168, 98 168, 88
        L 171, 25
        Z
        "
        fill={fill}
        stroke={stroke}
        strokeWidth={20}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default FaqStar;
