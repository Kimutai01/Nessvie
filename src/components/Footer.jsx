import React from "react";

const Footer = () => {
  return (
    <div className="selector flex items-center px-40">
      <p className="font-quicksand font-medium text-[#fff] mr-2">
        Privacy Policy
      </p>
      <div className="h-[1px] bg-white w-[300px]"></div>
      <img src="/lo.png" alt="" className="my-2" />
      <div className="h-[1px] bg-white w-[300px]"></div>
      <p className="font-quicksand font-medium text-[#fff] ml-2">
        Cookie policy
      </p>
    </div>
  );
};

export default Footer;
