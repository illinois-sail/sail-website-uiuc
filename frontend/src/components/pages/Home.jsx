import Collage from "../Collage/Collage";

import image1 from "../../assets/images/collage-1.jpg";
import image2 from "../../assets/images/collage-2.jpg";
import image3 from "../../assets/images/collage-3.jpg";
import image4 from "../../assets/images/collage-4.jpg";
import image5 from "../../assets/images/collage-5.png";

function Home() {
  return (
    <div style={{ justifyItems: "center" }}>
      <p style={{ color: "black" }}>Here goes the home page!</p>
      <Collage images={[image1, image2, image3, image4, image5]} />
    </div>
  );
}

export default Home;
