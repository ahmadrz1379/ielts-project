import React from "react";
import image from "../images/logo.png";
import CoworkCard from "./CoworkCard";
function Cowork() {
  const card = [
    { name: "name", image: image },
    { name: "name", image: image },
    { name: "name", image: image },
    { name: "name", image: image },
    { name: "name", image: image },  
    { name: "name", image: image }, 

  ];
  return (
    <div className="">
    <div className="container my-5 col-12">
      <div className="rtl">
        <h2>همکاران ما</h2>
        <span>بهترین کادر آموزشی برای فرزندان شما</span>
        <div></div>
      </div>
      <div className="d-flex flex-wrap col-2 col-sm-12 col-lg-12 justify-content-center">
        {card.map((item) => (
          <CoworkCard
          image={item.image} 
          name={item.name}/>

        ))}
      </div>
    </div>
    </div>
  );
}

export default Cowork;
