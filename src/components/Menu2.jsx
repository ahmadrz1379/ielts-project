import React from "react";
import logo from "../images/logo.png";
function Menu2() {
  return (
    <div className="d-flex flex-wrap container">
      <div className=" ">
        <ul className="superMenu d-flex flex-wrap col-12 col-lg-12  ">
          <li className="itemMenu">
            <i class="bi bi-search"></i>
          </li>
          <li className="itemMenu">
            <a href="#" className="link">
              وبلاگ
            </a>
          </li>
          <li className="itemMenu">
            <a href="#" className="link">
              فروشگاه
            </a>
          </li>
          <li className="itemMenu">
            <a href="#" className="link">
              وبلاگ
            </a>
          </li>
          <li className="itemMenu">
            <a href="#" className="link">
              فروشگاه
            </a>
          </li>
          <li className="dropdownmenu itemMenu">
            <i class="bi bi-chevron-down"></i>نمونه کارها
            <ul>
              <li>#</li>
            </ul>
          </li>
          <li className="dropdownmenu itemMenu">
            <i class="bi bi-chevron-down"></i>صفحات
            <ul>
              <li>#</li>
            </ul>
          </li>
          <li className="dropdownmenu itemMenu">
            <i class="bi bi-chevron-down"></i>صفحه اصلی
            <ul>
              <li>#</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="d-flex col-12 col-lg-12">
        <div className="container flex-column rtl">
          <img src={logo} className="logo" alt="this is a logo" />
          <br />
          <span>ـــــــــــــ ما برای پیدا کردن نیازهای خود همکاری میکنیم</span>
          <span>
            <h2>
              ما مردم را
              <br />
              .با یک دیگر متحد میکنیم
            </h2>
          </span>
          <span>
            مفهوم یک شرکت مشاوره مدیریت در نیویورک استکه متخصص در
            <br />
            ساخت مدل سازی اطلاعات است.
          </span>
          <div className="start-btn">
            <a href="#">شروع کنید</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu2;
