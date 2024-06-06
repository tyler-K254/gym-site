import { MailOpen, MapPin, Phone } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Footer = () => {
        const [currentDate, setCurrentDate] = useState('');

        useEffect(() => {
            const today = new Date();
            const year = today.getFullYear();
            setCurrentDate(year)
        })


  return (
    <>
      <div className="bg-[#111111]">
        <div
          className="w-full h-auto flex items-center justify-center bg-black/30 flex-col lg:py-8
          md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4"
        >
          <div
            className="w-full h-auto flex items-start lg:justify-between
          md:justify-between sm:justify-center justify-center gap-5 mb-10 flex-wrap"
          >
            <div
              className="lg:w-[30%] md:w-[30%] sm:w-full w-full h-auto p-2 flex
             lg:items-start md:-items-start sm:items-center items:center flex-col
             justify-center"
            >
              <Link className="w-fit h-auto text-3xl text-[#FFA800] font-semibold tracking-[0.1rem] flex items-end gap-x-0 relative">
              <img src="V Logo with text-01.png" alt="logo" className="w-[90px] pb-[5vh]" />
                {/* V<span className="-xl font-bold text-gray-300">F</span>
                <img
                  src="Logo-03.png"
                  alt="logo"
                  className="w-[50px] h-4 text-[#FF6B00] absolute top-[-10px] left-[46%] translate-x-[-50%]"
                /> */}
                {/* <Dumbbell className="w-[100px] h-4 text-[#FF6B00] -rotate-45 absolute top-[-8px] left-[46%] translate-x-[-50%]" /> */}
              </Link>
              <p
                className="text-base text-gray-500 font-normal mb-4 lg:text-start
              md:text-start sm:text-center text-center"
              >
                V-Fitness is a fully-equipped gym offering top-notch
                weight lifting and cardio equipment. We have professional
                trainers and a variety of fitness dance classes,
              </p>
              <div className="w-full h-auto spcae-y-2">
                <div
                  className="w-full h-auto flex items-center lg:justify-start
                    md:justify-start sm-justify-center justify-center gap-x-2 text-gray-400
                    hover:text-[#FF6B00] ease-out duration-300 cursor pointer "
                >
                  <MapPin className="w-5 h-5 text-[#FF6B00]" />
                  <p className="text-base text-[#FF6B00]">
                    CENTER PRIDE HOUSE NGARA
                  </p>
                </div>
                <div
                  className="w-full h-auto flex items-center lg:justify-start
                    md:justify-start sm-justify-center justify-center gap-x-2 text-gray-400
                    hover:text-[#FF6B00] ease-out duration-300 cursor pointer "
                >
                  <Phone className="w-5 h-5 text-[#FF6B00]" />
                  <p className="text-base text-[#FF6B00]">
                  0712347812
                  </p>
                </div>
                <div className="w-full h-[1.5px] flex item-center lg:bg-gray-900 md:bg-gray-900
        sm:bg-transparent bg-transparent relative">
            <div className="w-full h-auto flex items-center lg:justify-between
            md:justify-between sm:justify-center justify-center absolute -bottom-14  flex-wrap-reverse gap-y-4">
                <p className="text-sm text-gray-400 front-normal lg:bg-gray-900 md:g-gray
                sm:bg-transparent bg-transparent  py-3 px-4 rounded-md">
                    @{currentDate} V-Fitness - All rights reserved
                </p>
            </div>
        </div>
              </div>
              <div className="lg:w-[65%] md:w-[65%] sm:w-full w-full h-auto p-2 flex
              items-center lg:justify-end md:justify-end sm:justify-center justify-center
              flex-wrap gap-5">
              </div>
            </div>
            <div className="lg:w-[30%] md:w[40%] sm:w-[40%] w-full h-auto flex
                items-center flex-col justify-center mt-4">
                    <h2 className="text-lg text-gray-200 font-medium mb-4">
                        Services
                    </h2>
                    <div className="w-full h-auto">
                        <ul className="w-full h-auto spcae-y-2">
                            <li className="w-full h-auto text-gray-400 hover:text-[#FF6B00] ease-out
                            duration-300 cursor-pointer text-center">
                                Stregth Training
                            </li>
                            <li className="w-full h-auto text-gray-400 hover:text-[#FF6B00] ease-out
                            duration-300 cursor-pointer text-center">
                                Fitness Training
                            </li>
                            <li className="w-full h-auto text-gray-400 hover:text-[#FF6B00] ease-out
                            duration-300 cursor-pointer text-center">
                                Aerobics
                            </li>
                            <li className="w-full h-auto text-gray-400 hover:text-[#FF6B00] ease-out
                            duration-300 cursor-pointer text-center">
                                Cardio
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Quick Links */}
                <div className="lg:w-[30%] md:w[40%] sm:w-[40%] w-full h-auto flex
                items-center flex-col justify-center mt-4">
                    <h2 className="text-lg text-gray-200 font-medium mb-4">
                        Quick Links
                    </h2>
                    <div className="w-full h-auto">
                        <ul className="w-full h-auto spcae-y-2">
                        <Link to='heroSection' smooth={true} duration={500}> 
                            <li className="w-full h-auto text-gray-400 hover:text-[#FF6B00] ease-out
                            duration-300 cursor-pointer text-center">
                                Home
                            </li>
                            </Link>
                            <Link to='aboutSection' smooth={true} duration={500}> 
                            <li className="w-full h-auto text-gray-400 hover:text-[#FF6B00] ease-out
                            duration-300 cursor-pointer text-center">
                                About
                            </li>
                            </Link>
                            <Link to='servicesSection' smooth={true} duration={500}> 
                            <li className="w-full h-auto text-gray-400 hover:text-[#FF6B00] ease-out
                            duration-300 cursor-pointer text-center">
                                Services
                            </li>
                            </Link>
                            <Link to='pricingSection' smooth={true} duration={500}> 
                            <li className="w-full h-auto text-gray-400 hover:text-[#FF6B00] ease-out
                            duration-300 cursor-pointer text-center">
                                Pricing
                            </li>
                            </Link>
                            <Link to='contactSection' smooth={true} duration={500}> 
                            <li className="w-full h-auto text-gray-400 hover:text-[#FF6B00] ease-out
                            duration-300 cursor-pointer text-center">
                                Contact
                            </li>
                            </Link>
                        </ul>
                    </div>
                </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Footer;
