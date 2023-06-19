import React, { useState } from "react";
import { countries } from "countries-list";
import { useCookies } from "react-cookie";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
const Profile = ({
  swipe,
  id,
  selectedCountry,
  setSelectedCountry,
  selectedDate,
  setSelectedDate,
  selectedGender,
  setSelectedGender,
  first_name,
  setFirst_name,
  surname,
  setSurname,
  email,
  setEmail,
  phone,
  setPhone,
  address,
  setAddress,
  city,
  setCity,
  state,
  setState,
  post_code,
  setPost_code,
  profession,
  setProfession,
}) => {
  return (
    <>
      <h1>Fill in your profile</h1>
      <form className="flex shadow-lg justify-between mx-40 p-10 my-20 flex-col font-quicksand">
        <label>
          First name:
          <input
            type="text"
            name="name"
            value={first_name}
            placeholder="Enter your first name"
            onChange={(e) => setFirst_name(e.target.value)}
          />
        </label>

        <label>
          Surname:
          <input
            type="text"
            name="name"
            value={surname}
            placeholder="Enter your last name"
            onChange={(e) => setSurname(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Enter your contact email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Phone number:
          <input
            type="text"
            name="phone"
            value={phone}
            placeholder="Enter your phone number"
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>

        <label>
          Address:
          <input
            type="text"
            name="address"
            value={address}
            placeholder="Enter your address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>

        <label>
          City:
          <input
            type="text"
            name="city"
            value={city}
            placeholder="Enter your city"
            onChange={(e) => setCity(e.target.value)}
          />
        </label>

        <label>
          State:
          <input
            type="text"
            name="state"
            value={state}
            placeholder="Enter your state"
            onChange={(e) => setState(e.target.value)}
          />
        </label>

        <label>
          Post code:
          <input
            type="text"
            name="post_code"
            value={post_code}
            placeholder="Enter your post code"
            onChange={(e) => setPost_code(e.target.value)}
          />
        </label>

        <label htmlFor="profession">Select a profession:</label>
        <select
          id="profession"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="nurse">Nurse</option>
          <option value="carer">Carer</option>
        </select>

        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="">Select a country</option>
          {Object.keys(countries).map((countryCode) => (
            <option key={countryCode} value={countryCode}>
              {countries[countryCode].name}
            </option>
          ))}
        </select>

        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Select your date of birth"
        />

        <select
          value={selectedGender}
          onChange={(e) => setSelectedGender(e.target.value)}
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <button
          className="selector w-24"
          type="button"
          onClick={() => {
            if (
              first_name &&
              surname &&
              email &&
              phone &&
              address &&
              city &&
              state &&
              post_code &&
              profession &&
              selectedCountry &&
              selectedDate &&
              selectedGender
            ) {
              swipe();
            } else {
              alert("Please fill in all fields");
            }
          }}
        >
          Next
        </button>
      </form>
    </>
  );
};

export default Profile;
