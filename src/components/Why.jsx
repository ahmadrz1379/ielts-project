import React from "react";
import logo from "../images/logo.png";
import CardWhy from "./CardWhy";
function Why() {
  const data15 = [
    {
      image: logo,
      number: "4",
      title: "خود را بیازما",
      describe:
        "این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. ",
    },
    {
      image: logo,
      number: "3",
      title: "صرفه جویی در زمان",
      describe:
        "این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. ",
    },
    {
      image: logo,
      number: "2",
      title: "مهارت خودت رو بالا ببر",
      describe:
        "این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. ",
    },
    {
      image: logo,
      number: "1",
      title: "حرفه ای شو",
      describe:
        "این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. ",
    },
  ];
  return (
    <div className="boxWhy">
      <div className="container py-5">
        <div className="rtl">
          <h2>چرا ایلتس ایز؟</h2>
          <span>چرا باید ایلتس ایز را انتخاب کنم؟</span>
          <div></div>
        </div>

        <div className="d-flex flex-wrap">
          {data15.map((item) => (
            <CardWhy
              image={item.image}
              number={item.number}
              title={item.title}
              describe={item.describe}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Why;
