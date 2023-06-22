import React, { useState, useMemo } from "react";
import { countries } from "countries-list";
import { useCookies } from "react-cookie";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";

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
  title,
  setTitle,
  selectedBirthCountry,
  setSelectedBirthCountry,
  experience,
  setExperience,
  insurance,
  setInsurance,
}) => {
  const countryOptions = useMemo(() => countryList().getData(), []);
  return (
    <>
      <h1 className="font-quicksand font-bold text-center mt-12 uppercase text-2xl">
        Fill in your profile
      </h1>
      <form className="flex flex-col gap-6 shadow-lg justify-between md:mx-32 p-10 my-10 font-quicksand">
        <div className="flex md:flex-row flex-col md:gap-20">
          <div className="flex flex-col gap-2">
            <label>Title :</label>
            <select
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 py-1 px-2 rounded"
            >
              <option value="Select">Select title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Ms">Ms</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label>First name:</label>
            <input
              type="text"
              name="name"
              value={first_name}
              placeholder="Enter your first name"
              onChange={(e) => setFirst_name(e.target.value)}
              className="border border-gray-300 py-1 px-2 rounded"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Surname:</label>
            <input
              type="text"
              name="name"
              value={surname}
              placeholder="Enter your last name"
              onChange={(e) => setSurname(e.target.value)}
              className="border border-gray-300 py-1 px-2 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Enter your contact email"
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 py-1 px-2 rounded"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:gap-20">
          <div className="flex flex-col gap-2">
            <label> Phone number: </label>
            <PhoneInput
              type="text"
              name="phone"
              value={phone}
              placeholder="Enter your phone number"
              country={"gb"}
              onChange={(e) => {
                setPhone(e);
              }}
              className="rounded"
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: true,
                style: { width: "220px" },
              }}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={address}
              placeholder="Enter your address"
              onChange={(e) => setAddress(e.target.value)}
              className="border border-gray-300 py-1 px-2 rounded"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={city}
              placeholder="Enter your city"
              onChange={(e) => setCity(e.target.value)}
              className="border border-gray-300 py-1 px-2 rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>National insurance number</label>
            <input
              type="text"
              name="insurance"
              value={insurance}
              placeholder="Enter your national insurance number"
              onChange={(e) => setInsurance(e.target.value)}
              className="border border-gray-300 py-1 px-2 rounded"
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col md:gap-20">
          <div className="flex flex-col gap-2">
            <label>County:</label>
            <input
              type="text"
              name="state"
              value={state}
              placeholder="Enter your state"
              onChange={(e) => setState(e.target.value)}
              className="border border-gray-300 py-1 px-2 rounded"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>Post code:</label>
            <input
              type="text"
              name="post_code"
              value={post_code}
              placeholder="Enter your post code"
              onChange={(e) => setPost_code(e.target.value)}
              className="border border-gray-300 py-1 px-2 rounded"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="profession">Profession:</label>
            <select
              id="profession"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              className="border border-gray-300 py-1 px-2 rounded md:w-56"
            >
              <option value="">Select...</option>
              <option value="nurse">Nurse</option>
              <option value="carer">Carer</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="experience">Experience:</label>
            <select
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="border border-gray-300 py-1 px-2 rounded md:w-56"
            >
              <option value="">Select...</option>
              <option value="1-2 years">1-2 years</option>
              <option value="3-5 years">3-5 years</option>
              <option value="5-10 years">5-10 years</option>
              <option value="10+ years">10+ years</option>
            </select>
          </div>
        </div>

        <div className="flex md:flex-row flex-col md:gap-20">
          <div className="flex flex-col gap-2">
            <label htmlFor="country">Birth Nationality:</label>
            <Select
              options={countryOptions}
              value={selectedBirthCountry}
              onChange={(e) => setSelectedBirthCountry(e)}
              className="rounded md:w-[13.5rem]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="country">Country:</label>
            <Select
              options={countryOptions}
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e)}
              className="rounded md:w-[13.5rem]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="date">Date of Birth:</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Select your date of birth"
              className="border border-gray-300 py-1 px-2 rounded md:w-52"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="country">Gender:</label>
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="border border-gray-300 py-1 px-2 rounded md:w-56"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center items-center mt-6">
          <button
            className="selector py-4 px-8 text-white font-bold"
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
                selectedGender &&
                selectedBirthCountry &&
                insurance &&
                experience &&
                selectedGender
              ) {
                swipe();
                console.log(
                  title,
                  first_name,
                  surname,
                  email,
                  phone,
                  address,
                  city,
                  state,
                  post_code,
                  profession,
                  selectedCountry.label,
                  selectedDate,
                  selectedGender,
                  selectedBirthCountry.label,
                  insurance,
                  experience,
                  selectedGender
                );
              } else {
                alert("Please fill in all fields");
              }
            }}
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default Profile;
