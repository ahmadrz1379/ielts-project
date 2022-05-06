import React from "react";

function CardWhy({image,number,describe,title}) {
  return (
    <div className=" col-12 col-sm-12 col-lg-3 d-flex justify-content-center ">
      <div>
        <img className="imageWhy" src={image} alt="#" />
        <span className="numberWhy">{number}</span>
        <h5 className="d-flex justify-content-center">{title}</h5>
        <p className="textWhy rtl">
        {describe}
        </p>
      </div>
    </div>
  );
}

export default CardWhy;
