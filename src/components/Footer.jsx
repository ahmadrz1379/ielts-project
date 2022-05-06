import React from "react";

function Footer() {
  return (
    <div className="">
      <div className="d-flex rtl justify-content-evenly py-5 Footer flex-wrap">
        <div className="d-flex  flex-column rtl col-12 col-sm-12 col-lg-3">
          <span className="py-3 head">تماس با ما</span>
          <div>
            <span className="text-light fs-5">شهر زنجان</span>
            <div>
              <span>
                <i class="bi bi-geo-alt-fill text-danger"></i>
                <span className="text-light">خیابون شهر داری ساختمان 7</span>
              </span>
            </div>
          </div>

          <div className="py-3">
            <span className="fs-5 text-light">شهر تهران</span>
            <div>
              <span>
                <i class="bi bi-geo-alt-fill text-danger"></i>
                <span className="text-light">خیابون شهر داری ساختمان 7</span>
              </span>
            </div>
          </div>
          <div>
            <a className="linkFooter" href="tel:+98123456789">
              (+98)123456789
            </a>
          </div>
        </div>
        {/* منابع مهم ما */}
        <div className="d-flex  flex-column rtl col-12 col-sm-12 col-lg-3">
          <span className="py-3 head"> منابع مهم ما</span>
          <div className="d-flex flex-column">
            <a className="py-3 linkFooter" href="#">
              میدان فروش کالا
            </a>
            <a className="py-3 linkFooter" href="#">
              مستندات
            </a>
            <a className="py-3 linkFooter" href="#">
              مشتریان
            </a>
            <a className="py-3 linkFooter" href="#">
              فرصت های شغلی
            </a>
          </div>
        </div>
        <div className=" d-flex  flex-column rtl col-12 col-sm-12 col-lg-3">
          <span className="py-3 head">لینک های میانبر</span>
          <a className="py-3 linkFooter" href="#">
            درباره ما
          </a>
          <a className="py-3 linkFooter" href="#">
            خدمات ما
          </a>
          <a className="py-3 linkFooter" href="#">
            دریافت نقل و قول
          </a>
          <a className="py-3 linkFooter" href="#">
            محصولات
          </a>
        </div>
        <div className="d-flex  flex-column rtl col-12 col-sm-12 col-lg-3">
          <span className="py-3 head">خبرنامه</span>
          <p className="text-light">
            ثبت نام برای دریافت پیشنهادات ویژه،آموزش ، اخبار و به روز رسانی ها.
          </p>
          <div className="py-2">
            <input
              type="email"
              placeholder="ایمیل شما "
              className="imputEmail"
            />
            <button className="btn-email">
              <i class="bi bi-chevron-compact-left text-light arrow"></i>
            </button>
          </div>
          <div className="d-flex py-4">
            <a href="#" className="icon px-3">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#" className="icon px-3">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" className="icon px-3">
              <i class="bi bi-pinterest"></i>
            </a>
            <a href="#" className="icon px-3">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="#" className="icon px-3">
              <i class="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="bg">
        <div className="container d-flex">
          <div className="ielts col-6">
            <p className="text-light">IELTSEASE</p>
          </div>
          <div className="lay col-6">
            <p className="text-light">
              کلیه حقوق متعلق به آیلتس ایز است. طراحی توسط احمدرضا رضایی :) |
              1401
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
