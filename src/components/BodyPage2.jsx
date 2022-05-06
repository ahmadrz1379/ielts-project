import React from "react";
import image from "../images/1.jpg";
import Aside from "./Aside";
import Content from "./Content";
function BodyPage2() {
  return (
    <div className="d-flex rtl flex-wrap  ">
      <div className="col-12 px-3 col-lg-8 col-xl-8">
        <div className="boxBody">
          <div className="container rtl d-flex flex-column">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              quis nam saepe. Itaque sint laborum cupiditate, fugiat id,
              voluptatibus impedit ut expedita magni odio iure quod. Rem vero
              vel eos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Tenetur quis nam saepe. Itaque sint laborum cupiditate, fugiat id,
              voluptatibus impedit ut expedita magni odio iure quod. Rem vero
              vel eos.
            </p>
            <div className="d-flex justify-content-center">
              <img className="image " src={image} alt="#" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              molestiae, possimus et placeat harum laboriosam iste accusantium
              eligendi libero suscipit, maxime quia sit. Laborum aliquam totam
              dolore facilis ipsa labore. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Tenetur quis nam saepe. Itaque sint laborum
              cupiditate, fugiat id, voluptatibus impedit ut expedita magni odio
              iure quod. Rem vero vel eos.
            </p>
          </div>
        </div>
        <div className="py-5">
          <Content />
        </div>
      </div>
      <div className="col-12 col-lg-4 col-xl-4">
        <Aside />
      </div>
    </div>
  );
}

export default BodyPage2;
