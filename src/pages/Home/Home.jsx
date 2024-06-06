import React from "react";
import Hero from "./Hero";
import Quote from './Quote'
import About from "./About";
import BMI from "./BMI";
import Services from "./Services";
import Banner from "./Banner";
import Pricing2 from "./Pricing2"
import Trainers from "./Trainers";
import PricingPlan from "./PricingPlan";
import Contact from "./Contact"
import { Element } from 'react-scroll'
import Footer from "./Footer";



const Home = () => {
  return (
    <>
      <div className="w-full h-auto ">
      <Element name="heroSection">
        <Hero />
        </Element>
        <Quote />
        <Element name="aboutSection">
        <About />
        </Element>
        <BMI />
        <Element name="servicesSection">
        <Services />
        </Element>
        <Element name="bannerSection">
        <Banner />
        </Element>
        {/* <Trainers /> */}
        <Element name="pricingSection">
        <Pricing2 />
       {/* <PricingPlan /> */}
       </Element>
       <Element name="contactSection">
       <Contact />
       </Element>
       <Footer />
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
