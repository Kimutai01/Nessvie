import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

const Organizations = () => {
  return (
    <>
      <div className="flex  flex-col md:flex-row">
        <div>
          <img
            src="/prof.png"
            alt=""
            className=" z-50 hidden md:block relative"
          />

          <img
            src="/orgvect.png"
            alt=""
            className="mt-[-220px] h-[100vh] hidden md:block"
          />
          <img
            src="/orgmob.png"
            alt=""
            className="w-[100%] relative md:hidden"
          />
          {/* <img
            src="/mobvect.png"
            alt=""
            className="mt-[-60px] w-[100%] block md:hidden"
          /> */}
          <div className="mob-vect block mt-[-55px] md:hidden">
            <div className="w-[83%] mx-5 font-quicksand pt-10 pb-20">
              <p className="text-[#fff] font-medium text-lg mt-5">
                Discover the Power of a Comprehensive Healthcare App Designed
                Exclusively for Care Professionals
              </p>
              <div className="h-[1px] mt-2 w-[320px] bg-[#fff]"></div>
              <p className="text-[#fff] mt-2 font-medium text-lg">
                Unleash your potential with certified trainings and premium
                services
              </p>
              <div className="h-[1px] w-[320px] mt-2 bg-[#fff]"></div>
              <p className="text-[#fff] mt-2 font-medium text-lg">
                Simplify your workflow - Find and access shifts within your
                schedule
              </p>
              <div className="h-[1px] w-[320px] mt-2 bg-[#fff]"></div>
              <button className="bg-white text-black mt-5 w-full uppercase font-bold p-4 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="font-quicksand z-50 text-center mt-12  bg-white block md:hidden absolute">
          <h1 className="font-bold text-2xl px-12 uppercase">
            Elevate Your Care Organization with Nessvie
          </h1>
        </div>

        <div className="bg-her px-40 hidden md:block">
          <div className="font-quicksand z-50 w-[80%]  ">
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
          <button className="flex selector p-2 text-center rounded-lg font-quicksand font-bold text-sm text-[white] uppercase mt-10 ml-32 w-28">
            Register
          </button>
          <div className="flex flex-row items-center justify-center ml-20 pt-12">
            <p className="font-light mr-2 ">Available on Mobile </p>
            <div className="h-[1px] w-[250px] bg-[#e7da6d]"></div>
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

      <div className="flex  md:mt-[-255px] items-center">
        <div className="md:ml-20 font-quicksand w-[40%] text-black md:text-white ">
          <h1 className="font-bold text-4xl">Meet Our Users</h1>
          <p className="text-lg">
            {" "}
            Hear What Care Professionals Have to Say about Nessvie
          </p>
        </div>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col md:flex-row">
              <img src="/Rectangle5.png" alt="" />
              <div className="bg-[#fff] mt-2 font-quicksand rounded-2xl p-6 ml-[-30px] mr-10 h-[215px] shadow-md shadow-grey">
                <h2 className="text-[#e3d455] font-bold text-2xl text-center">
                  June, CEO PharmaCare
                </h2>
                <p className="text-[#2abf52] mt-5 font-medium text-lg">
                  Nessvie revolutionized our care organization, streamlining
                  workforce management, equipping staff with valuable resources,
                  and improving the quality of care we provide. It has made us
                  more efficient, effective, and prepared for the healthcare
                  industry's challenges
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex">
              <img src="/Rectangle5.png" alt="" />
              <div className="bg-[#fff] mt-2 font-quicksand rounded-2xl p-6 ml-[-30px] mr-10 h-[215px] shadow-md shadow-grey">
                <h2 className="text-[#e3d455] font-bold text-2xl text-center">
                  June, CEO PharmaCare
                </h2>
                <p className="text-[#2abf52] mt-5 font-medium text-lg">
                  Nessvie revolutionized our care organization, streamlining
                  workforce management, equipping staff with valuable resources,
                  and improving the quality of care we provide. It has made us
                  more efficient, effective, and prepared for the healthcare
                  industry's challenges
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Organizations;
