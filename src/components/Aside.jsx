import React from "react";
import image from "../images/1.jpg";
function Aside() {
  return (
    <div>
      <div className="">
        <div className="box">
          <img src={image} className="image" alt="asd" />
        </div>
        <div className="py-5">
          <div className="container box-2">
            <h3 className="py-3">این عنوان همون مطلبه</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              explicabo quia perferendis ducimus voluptatem fugiat, eligendi
              quisquam culpa impedit repellendus reprehenderit id fugit quos eum
              deleniti illo dolorem voluptatibus ipsam.
            </p>
            <div className="more">
              <a href="#">بیشتر بدون</a>
            </div>
          </div>
        </div>
        <div className="box-3">
          <h3 className="py-2">یک فهرست</h3>
          <div>
            <ul>
              <li>این یک متنه</li>
              <hr />
              <li>فقط یک متن است</li>
              <hr />
              <li>کاربرد خاصی نداره</li>
              <hr />
              <li>یک متن ازمایشیه</li>
              <hr />
              <li>کابرد نداره</li>
              <hr />
              <li>برای ازمایش نوشتمش</li>
              <hr />
              <li>از خودم در اوردمش</li>
              <hr />
              <li>نمیخواستمک فکر کنم</li>
              <hr />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aside;
