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
import HealthAndSafetyCertificate from "./ProfileComponents/HealthAndSafetyCertificate";

const ProfileSlider = ({ id }) => {
  const swipe = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slideNext();
  };

  const swipeBack = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slidePrev();
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
  const [Health_and_safety_certificate, setHealth_and_safety_certificate] =
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
          swipeBack={swipeBack}
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
          swipeBack={swipeBack}
        />
      </SwiperSlide>
      <SwiperSlide>
        <HealthAndSafetyCertificate
          setHealth_and_safety_certificate={setHealth_and_safety_certificate}
          Health_and_safety_certificate={Health_and_safety_certificate}
          swipe={swipe}
          swipeBack={swipeBack}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProfileSlider;
