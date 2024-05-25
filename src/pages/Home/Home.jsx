import React from "react";
import Hero from "./Hero";
import Quote from './Quote'
import About from "./About";
import BMI from "./BMI";
import Services from "./Services";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      <div className="w-full h-auto ">
        <Hero />
        <Quote />
        <About />
        <BMI />
        <Services />
        <Banner />
      </div>
      {/* justify-end */}
      <div className="flex ">
      </div>
    </>
  );
};

export default Home;



{/* <div className="flex justify-end">
<img src="./gyme website model reflect 2.png" alt="gym-model" className="float-right scale-x-[-1] w-1/2 " />
</div> */}
