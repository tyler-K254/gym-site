import React, { useState } from "react";
import { Dumbbell, Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";
import PrimaryBtn from "../Button/PrimaryBtn";
import { Link } from 'react-scroll'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "aboutSection",
    },
    {
      name: "Services",
      link: "servicesSection",
    },
    {
      name: "Plan",
      link: "pricingSection",
    },
    {
      name: "Contact",
      link: "contactSection",
    },
  ];
  return (
    <>
      <nav className="w-full h-auto bg-[#1d1d1d] shadow-none lg:px-24 md:px-16 sm:px-6 px-4 py-3">
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
          {/* Navbar logo & toggle button section */}
          <div>
            <div className="flex items-center justify-between py-1 md:py-1 md:block">
              {/* Logo section */}
              <Link className="text-3xl text-[#FFA800] font-semibold tracking-[0.1rem] flex items-end gap-x-0 relative">
                {/* V<span className="-xl font-bold text-gray-300">F</span>
                <img src="Logo-03.png" alt="logo" className="w-[50px] h-4 text-[#FF6B00] absolute top-[-10px] left-[46%] translate-x-[-50%]" /> */}
                <img src="Versatile Logo with text-01.png" alt="logo" className="w-[80px]" />
                {/* <Dumbbell className="w-[100px] h-4 text-[#FF6B00] -rotate-45 absolute top-[-8px] left-[46%] translate-x-[-50%]" /> */}
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <X className="text-gray-400 cursor-pointer" size={24} />
                  ) : (
                    <Menu className="text-gray-400 cursor-pointer" size={24} />
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* NAvbar menu items section */}
          <div
            className={`flex justify-between items-center md:block ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="list-none lg:flex md:flex sm:block block items-center gap-x-5 gap-y-16">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} smooth={true} duration={500} 
                    className="text-gray-500 text-lg font-medium hover:text-[#FFA800] ease-out duration-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <Link to='bannerSection' smooth={true} duration={500} className='w-full'>
              <PrimaryBtn>Call Us</PrimaryBtn>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
