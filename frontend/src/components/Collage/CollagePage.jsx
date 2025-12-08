import React from "react";
import "./CollagePage.css";

const CollagePage = ({ image1, image2, image3, image4, image5 }) => {
  return (
    <div className="collageContainer">
      {/* [position] is the image, [position]-back is the black border */}
      <div className="back topleft-back" />
      <div className="topleft">
        <img src={image1} alt="" className="photoImage" draggable="false" />
      </div>

      <div className="back topright-back" />
      <div className="topright">
        <img src={image2} alt="" className="photoImage" draggable="false" />
      </div>

      <div className="back midleft-back" />
      <div className="midleft">
        <img src={image3} alt="" className="photoImage" draggable="false" />
      </div>

      <div className="back botleft-back" />
      <div className="botleft">
        <img src={image4} alt="" className="photoImage" draggable="false" />
      </div>

      <div className="back botright-back" />
      <div className="botright">
        <img src={image5} alt="" className="photoImage" draggable="false" />
      </div>
    </div>
  );
};

export default CollagePage;
