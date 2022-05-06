import React from "react";

function CoworkCard({image,name}) {
  return (
    <div className="">
      <div className="boxCoworker">
        <div>
          <img className="coworkerImg" src={image} alt="#" />
        </div>
      </div>
    </div>
  );
}

export default CoworkCard;
