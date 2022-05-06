import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import image from "../images/1.jpg";

export default function App() {
  return (
    <div className="slider">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image} alt="#" />
          <div className="d-flex flex-column">
            <h1>عنوان مطلب</h1>
            <div className="d-flex">
              <span>دسته بندی: مطالب آیلتس</span>
             <div className="px-2"> /</div>
              <span className="">تاریخ مطلب</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="#" />
          <div className="d-flex flex-column">
            <h1>عنوان مطلب</h1>
            <div className="d-flex">
              <span>دسته بندی: مطالب آیلتس</span>
             <div className="px-2"> /</div>
              <span className="">تاریخ مطلب</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="#" />
          <div className="d-flex flex-column">
            <h1>عنوان مطلب</h1>
            <div className="d-flex">
              <span>دسته بندی: مطالب آیلتس</span>
             <div className="px-2"> /</div>
              <span className="">تاریخ مطلب</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
