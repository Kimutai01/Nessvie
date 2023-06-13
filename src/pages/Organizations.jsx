import React from "react";
import { Link } from "react-router-dom";

const Organizations = () => {
  return (
    <div className="bg-her">
      {/* <div className="flex flex-col md:flex-row ">
        <div>
          <img src="/linetop.png" alt="" className="hidden md:block" />
          <img
            src="/Oldma.png"
            alt=""
            className="absolute top-[35%] left-0 hidden md:block"
          />
          <img src="/orgvect.png" alt="" className=" hidden md:block" />
          <img src="/mob.png" alt="" className="absolute md:hidden" />
          <img src="/mobvect.png" alt="" className=" block md:hidden" />
        </div>

        <div className="font-quicksand z-50 text-center mt-12  bg-white block md:hidden absolute">
          <h1 className="font-bold text-2xl uppercase">
            The revolution of healthcare
          </h1>
          <p className="text-[#19ba47] font-bold text-lg mt-10">
            The All-in-One Healthcare App
          </p>
          <div className="h-[1px] mx-12 w-[300px] bg-[#e7da6d]"></div>
        </div>

        <div className="absolute top-[110%] md:hidden">
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

        <div className="bg-her px-32 hidden md:block">
          <div className="font-quicksand z-50 w-[50%]  ">
            <h1 className="font-bold text-4xl  mt-16 uppercase">
              Elevate Your Care Organization with Nessvie
            </h1>
            <p className="text-[#19ba47] font-bold text-lg mt-10">
              Unlock the Power of a Cutting-Edge Healthcare App
            </p>
            <div className="h-[1px] w-[320px] bg-[#e7da6d]"></div>
            <p className="text-[#19ba47] font-bold text-lg mt-10">
              Streamline operations and optimize workforce management
            </p>
            <div className="h-[1px] w-[320px] bg-[#e7da6d]"></div>
            <p className="text-[#19ba47] font-bold text-lg mt-10">
              Provide Exceptional Care
            </p>
            <div className="h-[1px] w-[320px] bg-[#e7da6d]"></div>
            <p className="text-[#19ba47] font-bold text-lg mt-10">
              Nuture Professional Growth
            </p>
            <div className="h-[1px] w-[320px] bg-[#e7da6d]"></div>
          </div>
          <button className="flex text-center">Register</button>
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
          <img src="/linebot.png" alt="" className="flex items-end" />
        </div>
      </div> */}
      <div className="flex">
        <div>
          <img src="/linetop.png" alt="" className="hidden md:block" />
          <img
            src="/Oldma.png"
            alt=""
            className="absolute top-[35%] left-0 hidden md:block"
          />
          <img src="/orgvect.png" alt="" className="h-[60%]" />
        </div>

        <div>
          <div className=" hidden md:block">
            <div className="font-quicksand z-50 w-[50%]  ">
              <h1 className="font-bold text-4xl  mt-16 uppercase">
                Elevate Your Care Organization with Nessvie
              </h1>
              <p className="text-[#19ba47] font-bold text-lg mt-10">
                Unlock the Power of a Cutting-Edge Healthcare App
              </p>
              <div className="h-[1px] w-[320px] bg-[#e7da6d]"></div>
              <p className="text-[#19ba47] font-bold text-lg mt-10">
                Streamline operations and optimize workforce management
              </p>
              <div className="h-[1px] w-[320px] bg-[#e7da6d]"></div>
              <p className="text-[#19ba47] font-bold text-lg mt-10">
                Provide Exceptional Care
              </p>
              <div className="h-[1px] w-[320px] bg-[#e7da6d]"></div>
              <p className="text-[#19ba47] font-bold text-lg mt-10">
                Nuture Professional Growth
              </p>
              <div className="h-[1px] w-[320px] bg-[#e7da6d]"></div>
            </div>
            <button className="flex text-center">Register</button>
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
            <img src="/linebot.png" alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizations;
