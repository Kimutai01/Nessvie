import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Profile from "./Profile";
import Documents from "./Documents";

const ProfileSlider = ({ id }) => {
  const swipe = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slideNext();
  };
  return (
    <Swiper
      pagination={{
        type: "progressbar",
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper swiper-container"
    >
      <SwiperSlide>
        <Profile swipe={swipe} id={id} />
      </SwiperSlide>
      <SwiperSlide>
        <Documents swipe={swipe} />
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
};

export default ProfileSlider;
