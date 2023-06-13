import React from "react";

const Footer = () => {
  return (
    <div className="selector w-[100%] flex flex-col">
      <div className="flex items-center md:px-40">
        <p className="font-quicksand hidden md:block font-medium text-[#fff] mr-2">
          Privacy Policy
        </p>
        <div className="h-[1px] mt-10 bg-white w-[240px]"></div>
        <img src="/lo.png" alt="" className=" mt-10 md:my-3 " />
        <div className="h-[1px] mt-10 bg-white w-[240px]"></div>
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
