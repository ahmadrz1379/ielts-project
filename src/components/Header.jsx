import React from "react";
import {Link } from "react-router-dom";
function Header() {
  return (
    <div>
      {/* منوی اول */}
      <ul className="Submenu d-flex flex-wrap">
        <div className="d-flex col-12 col-lg-10 col-xl-10 py-4">
          <li className="media">
            <a href="#">
              {" "}
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#">
              <i class="bi bi-instagram"></i>
            </a>
          </li>
          <li className="page">
            <a href="#">میز راهنما</a>
            <a href="#">منابع ما</a>
            <a href="#">ثبت نام</a>
            <Link to="/page2">صفحه دوم</Link>
          </li>
        </div>
        <div className="d-flex col-12 col-lg-2 col-xl-2 py-4">
          <li className="phone">
            <i class="bi bi-telephone-fill px-2"></i>
            <span>تلفن:</span>
            <a className="phoneNumber" href="tel:09153085282">
              09153085282
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Header;
