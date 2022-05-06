import React from "react";
import image from "../images/image-card.png";
import NewsCard from "./NewsCard";
function News() {
  const cardNews = [
    {
      image: image,
      cat: "طراحی",
      title: "شگفت انگیز است که دوستی هایی را که توسعه میابند را ببینید",
      date: "23 خرداد 98",
    },
    { image: image, cat: "طراحی", title: "بازتاب فجر", date: "35/5/2020" },
    {
      image: image,
      cat: "دولت",
      title: "نکات مفید برای ایجاد یک بحث با کیفیت",
      date: "23 خرداد 98",
    },
    {
      image: image,
      cat: "آکادمی ها",
      title: "زن و شوهر از دانشجویان دانشگاه هپی فارق التحصیل شد",
      date: "23 خرداد 98",
    },
  ];
  return (
    <div className="news">
      <div className="container">
        <div className="rtl py-5">
          <h2>چرا ایلتس ایز؟</h2>
          <span>چرا باید ایلتس ایز را انتخاب کنم؟</span>
          <div></div>
        </div>
        <div className="showBtn">
          <a className="showAll" href="#">
            نمایش همه مطالب
          </a>
        </div>
        <div className="d-flex flex-wrap">
          {cardNews.map((item) => (
            <NewsCard
              image={item.image}
              cat={item.cat}
              title={item.title}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
