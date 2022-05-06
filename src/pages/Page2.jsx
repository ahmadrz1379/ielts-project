import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import LastCourse from "../components/LastCourse";
import Cowork from "../components/Cowork";
import BodyPage2 from "../components/BodyPage2";
import Footer from "../components/Footer";
function Page2() {
  return (
    <div>
      <Header></Header>
      <Slider />
      <BodyPage2 />
      <LastCourse></LastCourse>
      <Cowork />
      <Footer />
    </div>
  );
}

export default Page2;
