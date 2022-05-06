import React from "react";
import image from "../images/1.jpg";
function content() {
  return (
    <div>
      <div>
        <div className=" rtl">مطالب مرتبط</div>
        <div className="boxBody">
          <div className="container rtl">
            <div>
              <div>
                <img className="image" src={image} alt="#" />
              </div>
              <div>
                <h5>عنوان خبر اینحا قرار میگیره</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti porro sequi, odit doloremque dicta officia nesciunt
                  mollitia eaque
                </p>
                <div className="d-flex">
                  <div className="bg-warning">.</div>
                  <span>تاریخ اینجا قرار میگیره</span>|
                  <a href="#">ادامه خبر ..</a>
                </div>
              </div>
            </div>

            <div className="py-5">
              <div>
                <img className="image" src={image} alt="#" />
              </div>
              <div>
                <h5>عنوان خبر اینحا قرار میگیره</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti porro sequi, odit doloremque dicta officia nesciunt
                  mollitia eaque
                </p>
                <span>تاریخ اینجا قرار میگیره</span>|
                <a href="#">ادامه خبر ..</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default content;
