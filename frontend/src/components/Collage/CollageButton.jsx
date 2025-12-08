import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import "./CollageButton.css";

const CollageButton = ({ onClick, direction }) => {
  return (
    <button className="collageButtonWrapper" onClick={onClick}>
      {direction === "left" ? (
        <ArrowBigLeft
          size="60.0%"
          color="black"
          fill="white"
          strokeWidth={2.5}
        />
      ) : (
        <ArrowBigRight
          size="60.0%"
          color="black"
          fill="white"
          strokeWidth={2.5}
        />
      )}
    </button>
  );
};

export default CollageButton;
