import React from "react";
import logo from "../images/logo.png";
function PartOne() {
  return (
    <div className="Container-fluid">
      <div className="d-flex flex-wrap">
        <div className="tow d-flex container col-12 col-lg-6">
          <img src={logo} className="logo" alt="this is a logo" />
        </div>
        <div className="one d-flex col-12 col-lg-6">
          <div className=" flex-column rtl container my-4">
            <h2 className="text-light">این همان مطلب است</h2>
            <p className="text-light">
              این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری
              ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد
              دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ
              کاربرد دیگری ندارد.
            </p>
            <div className="more">
              <a href="#">بیشتر بدانید</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartOne;
