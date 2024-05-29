import React from "react";
import { Link } from "react-router-dom";

const SecondaryLink = ({ link, children, className }) => {
  return (
    <>
      <Link
        to={link}
        className={`text-base text-[#FF6B00] bg-[#FF6B00]/5 font-medium px-3 py-1.5 rounded flex items-center border border-[#FF6B00] gap-x-1 hover:border-[#FF6B00]/70 hover:bg-[#FF6B00]/10 ease-out duration-500 ${className}`}
      >
        {children}
      </Link>
    </>
  );
};

export default SecondaryLink;
