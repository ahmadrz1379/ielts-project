import React from "react";
import Card from "./Card";

import img from "../images/image-card.png";
function LastCourse() {
  const data = [
    {
      id: "1",
      image: img,
      title: "blah blah",
      circle: img,
      teacher: "teacher",
      oldPrice: "668,000",
      price: "255,400",
      time: "02:06:45",
    },
    {
      id: "2",
      image: img,
      title: "blah blah",
      circle: img,
      teacher: "teacher",
      oldPrice: "668,000",
      price: "255,400",
      time: "02:06:45",
    },
    {
      id: "3",
      image: img,
      title: "blah blah",
      circle: img,
      teacher: "teacher",
      oldPrice: "668,000",
      price: "255,400",
      time: "02:06:45",
    },
  ];

  return (
    <div className="rtl ">
      <div className="last">
        <div className="container">
          <h2>اخرین دوره های ایلتس ایز</h2>
          <span>چرا باید ایلتس ایز را انتخاب کنم؟</span>
        </div>
        <div className="d-flex justify-content-center flex-wrap">
          {data.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              circle={item.circle}
              title={item.title}
              teacher={item.teacher}
              oldPrice={item.oldPrice}
              price={item.price}
              time={item.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LastCourse;
