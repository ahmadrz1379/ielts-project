import React from "react";

function NewsCard({ date, image, title, cat }) {
  return (
    <div className=" col-12 col-lg-3">
      <div className="mx-3 my-5">
        <div className="cardNews d-flex flex-column">
          
          <div>
            <img className="newsImg" src={image} alt="#" />
          </div>
          <div className="rtl container">
            <p className="cat">{cat}</p>
            <h5>{title}</h5>
            <div className="py-3">
              <i class="bi bi-clock clock "></i>
              <span className="date">{date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
