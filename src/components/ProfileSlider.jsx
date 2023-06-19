import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Profile from "./ProfileComponents/Profile";
import ManualHandlingCertificate from "./ProfileComponents/ManualHandlingCertificate";

const ProfileSlider = ({ id }) => {
  const swipe = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slideNext();
  };
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedGender, setSelectedGender] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [profession, setProfession] = useState("");
  const [Manual_handling_certificate, setManual_handling_certificate] =
    useState("");

  return (
    <Swiper
      pagination={{
        type: "progressbar",
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper swiper-container swiper-no-swiping"
    >
      <SwiperSlide>
        <Profile
          swipe={swipe}
          id={id}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          address={address}
          setAddress={setAddress}
          city={city}
          setCity={setCity}
          state={state}
          setState={setState}
          zip={zip}
          setZip={setZip}
          profession={profession}
          setProfession={setProfession}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ManualHandlingCertificate
          setManual_handling_certificate={setManual_handling_certificate}
          Manual_handling_certificate={Manual_handling_certificate}
          swipe={swipe}
        />
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
