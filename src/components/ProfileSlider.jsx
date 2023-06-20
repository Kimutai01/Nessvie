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

const ProfileSlider = ({ id, setLoggedInUserProfile }) => {
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
  const [first_name, setFirst_name] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [post_code, setPost_code] = useState("");
  const [profession, setProfession] = useState("");
  const [Manual_handling_certificate, setManual_handling_certificate] =
    useState("");
  const [Health_and_safety_certificate, setHealth_and_safety_certificate] =
    useState("");

  const addProfile = async (e) => {
    e.preventDefault();
    fetch("https://nessvie.onrender.com/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: selectedCountry,
        dob: selectedDate,
        gender: selectedGender,
        first_name: first_name,
        surname: surname,
        email: email,
        phone: phone,
        address: address,
        city: city,
        state: state,
        post_code: post_code,
        job: profession,
        manual_handling_certificate: Manual_handling_certificate,
        health_and_safety_certificate: Health_and_safety_certificate,
        user_id: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoggedInUserProfile(data);
      });
  };

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
          first_name={first_name}
          setFirst_name={setFirst_name}
          surname={surname}
          setSurname={setSurname}
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
          post_code={post_code}
          setPost_code={setPost_code}
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
          addProfile={addProfile}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProfileSlider;
