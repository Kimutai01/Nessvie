import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex  flex-col md:flex-row">
      <div>
        <img src="/linetop.png" alt=" " className="hidden md:block" />
        <img
          src="/old.png"
          alt=""
          className="mt-[-450px] z-50 hidden md:block"
        />
        <img src="/mob.png" alt="" className="relative md:hidden z-50 " />
        <img src="/vect.png" alt="" className="mt-[-220px] hidden md:block" />
        <img
          src="/mobvect.png"
          alt=""
          className="mt-[-160px] w-[100%] block md:hidden"
        />
      </div>

      <div className="font-quicksand z-50 text-center mt-12  bg-white block md:hidden absolute">
        <h1 className="font-bold text-2xl px-12 uppercase">
          The revolution of healthcare
        </h1>
        <p className="text-[#19ba47] font-bold text-lg mt-10">
          The All-in-One Healthcare App
        </p>
        <div className="h-[1px] mx-12 w-[300px] bg-[#e7da6d]"></div>
      </div>

      <div className="block mt-[-250px] md:hidden">
        <div className="rounded-lg border-4 border-white mt-10 mx-9 ">
          <p className="font-medium font-quicksand text-sm text-[#fff] px-4 text-center">
            Are You A HealthCare Professional?
          </p>
          <button className="bg-[#fff] w-full font-quicksand text-[#000] text-xl font-bold rounded-md p-3">
            LEARN MORE
          </button>
        </div>
        <div className="rounded-lg border-4 border-white mt-5 mx-9">
          <p className="font-medium font-quicksand text-sm text-[#fff] px-4 text-center">
            Are You A HealthCare Professional?
          </p>
          <Link to="//professionals">
            <button className="bg-[#fff] w-full font-quicksand text-[#000] text-xl font-bold rounded-md p-3">
              LEARN MORE
            </button>
          </Link>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex flex-row items-center justify-center pt-12">
          <div className="h-[1px] w-[120px] bg-[#e7da6d]"></div>
          <p className="font-light ml-3 mr-3">Available on Mobile </p>
          <div className="h-[1px] w-[120px] bg-[#e7da6d]"></div>
        </div>
        <div className="flex justify-around mt-5">
          <div className="cursor-pointer">
            <img src="/App.png" alt="" />
          </div>
          <div className="cursor-pointer">
            <img src="/play.png" alt="" />
          </div>
        </div>
      </div>

      <div className="bg-her hidden md:block">
        <div className="font-quicksand mt-20 mx-20 z-50 w-[40%] absolute h-full">
          <h1 className="font-bold text-4xl uppercase">
            The revolution of healthcare
          </h1>
          <p className="text-[#19ba47] font-bold text-lg mt-10">
            The All-in-One Healthcare App
          </p>
          <div className="h-[1px] w-[300px] bg-[#e7da6d]"></div>
          <div className="rounded-lg border-div mt-10 w-[60%]">
            <p className="font-bold font-quicksand text-xl text-center">
              Are You A HealthCare Organisation?
            </p>
            <Link to="/organizations">
              <button className="selector w-full font-quicksand text-[#fff] text-xl font-bold rounded-lg p-3">
                LEARN MORE
              </button>
            </Link>
          </div>

          <div className="border-div mt-5 w-[60%]  rounded-full">
            <p className="font-bold font-quicksand text-xl  text-center">
              Are You A HealthCare Organisation?
            </p>
            <Link to="/professionals">
              <button className="selector w-full text-[#fff] font-bold text-xl rounded-lg p-3 ">
                LEARN MORE
              </button>
            </Link>
          </div>

          <div className="flex flex-row items-center justify-center ml-20 pt-12">
            <p className="font-light mr-3">Available on Mobile </p>
            <div className="h-[1px] w-[300px] bg-[#e7da6d]"></div>
          </div>
          <div className="flex mt-5">
            <div className="cursor-pointer">
              <img src="/App.png" alt="" />
            </div>
            <div className="cursor-pointer">
              <img src="/play.png" alt="" />
            </div>
          </div>
        </div>
        <img src="/linebot.png" alt="" className="pt-36" />
      </div>
    </div>
  );
};

export default Hero;
