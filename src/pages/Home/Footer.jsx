import { MailOpen, MapPin, Phone } from "lucide-react";
import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="bg-[#111111]">
        <div
          className="w-full h-auto flex items-center justify-center bg-black/30 flex-col lg:py-16
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
                V<span className="-xl font-bold text-gray-300">F</span>
                <img
                  src="Logo-03.png"
                  alt="logo"
                  className="w-[50px] h-4 text-[#FF6B00] absolute top-[-10px] left-[46%] translate-x-[-50%]"
                />
                {/* <Dumbbell className="w-[100px] h-4 text-[#FF6B00] -rotate-45 absolute top-[-8px] left-[46%] translate-x-[-50%]" /> */}
              </Link>
              <p
                className="text-base text-gray-500 font-normal mb-4 lg:text-start
              md:text-start sm:text-center text-center"
              >
                Veterans Fitness is a fully-equipped gym offering top-notch
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
                    CITY VIEW HOUSE NGARA
                  </p>
                </div>
                <div
                  className="w-full h-auto flex items-center lg:justify-start
                    md:justify-start sm-justify-center justify-center gap-x-2 text-gray-400
                    hover:text-[#FF6B00] ease-out duration-300 cursor pointer "
                >
                  <Phone className="w-5 h-5 text-[#FF6B00]" />
                  <p className="text-base text-[#FF6B00]">
                  0113724182
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
