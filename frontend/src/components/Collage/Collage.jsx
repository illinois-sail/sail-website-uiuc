import { useState } from "react";
import CollagePage from "./CollagePage";
import CollageButton from "./CollageButton";
import "./Collage.css";

/**
 * Splits an array into chunkSize sized chunks, return an array of arrays.
 * If len(arr)%5 != 0, the last subarray will have <5 elements in it
 */
function chunkArray(arr, chunkSize = 5) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}

function Collage({ images }) {
  const collageGroups = chunkArray(images); //each returned subarray is a page worth of images
  const realSlides = [
    collageGroups[collageGroups.length - 1],
    ...collageGroups,
    collageGroups[0],
  ]; //have the last and first pages at the ends to simulate infinite scrolling
  const [pageInd, setPageInd] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const transitionTime = 400;

  //Advance the current page by count pages.  When we hit an end, go to the other end
  const iterateImage = (count) => {
    setTransitionEnabled(true);
    const nextPageInd = pageInd + count;
    setPageInd(nextPageInd);
    if (nextPageInd === 0) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setPageInd(collageGroups.length);
      }, transitionTime);
    } else if (nextPageInd === collageGroups.length + 1) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setPageInd(1);
      }, transitionTime);
    }
  };

  return (
    <div className="collageWrapper">
      {/*Left button*/}
      <div className="collageWing" style={{ justifyContent: "left" }}>
        <CollageButton
          direction="left"
          onClick={() => iterateImage(-1)}
        ></CollageButton>
      </div>
      {/*Carousel stuff*/}
      <div className="collageContainer">
        <div
          className="collageSlider"
          style={{
            transform: `translateX(-${pageInd * 100}%)`,
            transition: transitionEnabled
              ? `transform ${transitionTime / 1000}s ease`
              : "none",
          }}
        >
          {realSlides.map((group, index) => (
            <div key={index}>
              <CollagePage
                image1={group[0]}
                image2={group[1]}
                image3={group[2]}
                image4={group[3]}
                image5={group[4]}
              />
            </div>
          ))}
        </div>
      </div>
      {/*Right button*/}
      <div className="collageWing" style={{ justifyContent: "right" }}>
        <CollageButton
          direction="right"
          onClick={() => iterateImage(1)}
        ></CollageButton>
      </div>
    </div>
  );
}

export default Collage;
