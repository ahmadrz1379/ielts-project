import React from "react";
import Cowork from "../components/Cowork";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LastCourse from "../components/LastCourse";
import Menu2 from "../components/Menu2";
import News from "../components/News";
import PartOne from "../components/PartOne";
import PartTwo from "../components/PartTwo";
import Why from "../components/Why";
function Page1() {
  return (
    <div>
      <Header></Header>
      <Menu2></Menu2>
      <PartOne></PartOne>
      <PartTwo></PartTwo>
      <LastCourse></LastCourse>
      <Why></Why>
      <Cowork></Cowork>
      <News />
      <Footer />

    </div>
  );
}

export default Page1;
