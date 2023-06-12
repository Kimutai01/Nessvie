import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-row items-end">
      <div>
        <img src="/linetop.png" alt="" />
        <img src="/old.png" alt="" className="absolute top-[12%]" />
        <img src="/vect.png" alt="" className="mt-20" />
      </div>

      <div className="bg-her">
        <div className="font-quicksand z-50 w-[40%] absolute">
          <h1 className="font-bold text-4xl uppercase">
            The revolution of healthcare
          </h1>
          <p className="text-[#19ba47] font-bold text-lg mt-10">
            The All-in-One Healthcare App
          </p>
          <div className="h-[1px] w-[300px] bg-[#e7da6d]"></div>
          <div className="rounded-xl border-div mt-10 w-[60%] ">
            <p className="font-bold font-quicksand text-xl  text-center">
              Are You A HealthCare Professional?
            </p>
            <button className="selector w-full font-quicksand text-[#fff] text-xl font-bold rounded-lg p-3 ">
              LEARN MORE
            </button>
          </div>
          <div className="border-div mt-5 w-[60%]  rounded-full">
            <p className="font-bold font-quicksand text-xl  text-center">
              Are You A HealthCare Organisation?
            </p>
            <button className="selector w-full text-[#fff] font-bold text-xl rounded-lg p-3 ">
              LEARN MORE
            </button>
          </div>
        </div>
        <img src="/linebot.png" alt="" className="" />
      </div>
    </div>
  );
};

export default Hero;
