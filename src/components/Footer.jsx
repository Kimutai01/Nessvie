import React from "react";

const Footer = () => {
  return (
    <div className="selector flex flex-col">
      <div className="flex items-center md:px-40">
        <p className="font-quicksand hidden md:block font-medium text-[#fff] mr-2">
          Privacy Policy
        </p>
        <div className="h-[1px] bg-white w-[300px]"></div>
        <img src="/lo.png" alt="" className="my-2" />
        <div className="h-[1px] bg-white w-[300px]"></div>
        <p className="font-quicksand hidden md:block font-medium text-[#fff] ml-2">
          Cookie policy
        </p>
      </div>
      <div className="md:hidden flex justify-between py-3">
        <p className="font-quicksand  font-medium text-[#fff] ml-2">
          Cookie policy
        </p>
        <p className="font-quicksand font-medium text-[#fff] mr-2">
          Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
