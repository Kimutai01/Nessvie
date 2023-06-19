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
const Profile = ({ swipe, id }) => {
  const [cookies, setCookie] = useCookies(["formData"]);
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
  const [selectedOption, setSelectedOption] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const formData = {
    //   full_name: name,
    //   email,
    //   phone,
    //   address,
    //   city,
    //   country: selectedCountry,
    //   zip_code: zip,
    //   profession: selectedOption,
    //   dob: selectedDate,
    //   job: profession,
    // };

    // try {
    //   const response = await fetch("http://localhost:3000/profiles", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     console.log("Profile created successfully");
    //     // Reset the form fields
    //     setName("");
    //     setEmail("");
    //     setPhone("");
    //     setAddress("");
    //     setCity("");
    //     setZip("");
    //     setProfession("");
    //     setSelectedOption("");
    //     setSelectedCountry("");
    //     setSelectedDate(null);
    //     setSelectedGender("");
    //     // Call the swipe function to move to the next slide
    //     swipe();
    //   } else {
    //     console.error("Failed to create profile");
    //     // Handle error scenario
    //   }
    // } catch (error) {
    //   console.error("An error occurred:", error);
    //   // Handle error scenario
    // }

    console.log("Profile created successfully");
  };

  return (
    <>
      <h1>Fill in your profile</h1>
      <form
        className="flex shadow-lg justify-between mx-40 p-10 my-20 flex-col font-quicksand"
        onSubmit={handleSubmit}
      >
        <label>
          Full name
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter your username"
            onChange={(e) => setName(e.target.value)}
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
          Zip code:
          <input
            type="text"
            name="zip"
            value={zip}
            placeholder="Enter your zip code"
            onChange={(e) => setZip(e.target.value)}
          />
        </label>

        <label htmlFor="profession">Select a profession:</label>
        <select id="profession" value={selectedOption}>
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
          type="submit"
          onClick={swipe}
          onSubmit={handleSubmit}
        >
          Next
        </button>
      </form>
    </>
  );
};

export default Profile;