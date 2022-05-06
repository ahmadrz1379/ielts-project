import React from "react";

function Card({image,title,oldPrice,teacher,time,price,circle}) {
  return (
    <div className=" col-12 col-sm-12 col-lg-4 d-flex justify-content-center ">
      <div className="card">
        <img src={image} className="cardimage" alt="#" />
        <p className="d-flex justify-content-center">
          {title}
        </p>

        <div>
          <img src={circle} className="circleimage" alt="#" />
          <span>{teacher}</span>
        </div>
        <div className="d-flex">
          <hr className="hr" />
          <div className="sxx">
            <p>{oldPrice}</p>
            <p>{price}</p>
          </div>
        </div>
        <div className="d-flex">
          <span>{time}</span>
          <i class="bi bi-clock px-2"></i>
          <div className="px-2" >
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
