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
import BankDetails from "./BankDetails";
import References from "./References";

const ProfileSlider = ({ id, setLoggedInUserProfile }) => {
  const swipe = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slideNext();
  };

  const swipeBack = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slidePrev();
  };
  const [showPopup, setShowPopup] = useState(false);
  const [references, setReferences] = useState([]);
  const [title, setTitle] = useState("");
  const [sort_code, setSort_code] = useState("");
  const [account_number, setAccount_number] = useState("");
  const [bank_name, setBank_name] = useState("");
  const [insurance, setInsurance] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedBirthCountry, setSelectedBirthCountry] = useState("");
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
  const [experience, setExperience] = useState("");
  const [Manual_handling_certificate, setManual_handling_certificate] =
    useState("");
  const [first_aid_certificate, setFirst_aid_certificate] = useState("");
  const [food_hygiene_certificate, setFood_hygiene_certificate] = useState("");
  const [fire_safety_certificate, setFire_safety_certificate] = useState("");
  const [Health_and_safety_certificate, setHealth_and_safety_certificate] =
    useState("");

  const [referenceFirstName, setReferenceFirstName] = useState("");
  const [referenceSurname, setReferenceSurname] = useState("");
  const [referenceEmail, setReferenceEmail] = useState("");
  const [referencePhone, setReferencePhone] = useState("");
  const [referenceOrganisation, setReferenceOrganisation] = useState("");
  const [referenceJobTitle, setReferenceJobTitle] = useState("");

  const addProfile = async (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: selectedCountry.label,
        birth_country: selectedBirthCountry.label,
        title: title,
        experience: experience,
        insurance: insurance,
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
        first_aid_certificate: first_aid_certificate,
        food_hygiene_certificate: food_hygiene_certificate,
        fire_safety_certificate: fire_safety_certificate,
        bank_name: bank_name,
        sort_code: sort_code,
        account_number: account_number,

        user_id: id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoggedInUserProfile(data);
      });
  };

  const addReference = async (e) => {
    const newReference = {
      firstName: referenceFirstName,
      surname: referenceSurname,
      email: referenceEmail,
      phone: referencePhone,
      organisation: referenceOrganisation,
      jobTitle: referenceJobTitle,
    };

    setReferences([...references, newReference]);
    setShowPopup(false);
    e.preventDefault();

    fetch("http://localhost:3000/references", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: referenceFirstName,
        surname: referenceSurname,
        email: referenceEmail,
        phone: referencePhone,
        organisation: referenceOrganisation,
        job_title: referenceJobTitle,
        profile_id: id,
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
          title={title}
          setTitle={setTitle}
          selectedBirthCountry={selectedBirthCountry}
          setSelectedBirthCountry={setSelectedBirthCountry}
          experience={experience}
          setExperience={setExperience}
          insurance={insurance}
          setInsurance={setInsurance}
        />
      </SwiperSlide>
      <SwiperSlide>
        <ManualHandlingCertificate
          setManual_handling_certificate={setManual_handling_certificate}
          Manual_handling_certificate={Manual_handling_certificate}
          swipe={swipe}
          swipeBack={swipeBack}
          first_aid_certificate={first_aid_certificate}
          setFirst_aid_certificate={setFirst_aid_certificate}
          food_hygiene_certificate={food_hygiene_certificate}
          setFood_hygiene_certificate={setFood_hygiene_certificate}
          fire_safety_certificate={fire_safety_certificate}
          setFire_safety_certificate={setFire_safety_certificate}
          setHealth_and_safety_certificate={setHealth_and_safety_certificate}
          Health_and_safety_certificate={Health_and_safety_certificate}
        />
      </SwiperSlide>
      <SwiperSlide>
        <BankDetails
          swipe={swipe}
          swipeBack={swipeBack}
          id={id}
          sort_code={sort_code}
          setSort_code={setSort_code}
          account_number={account_number}
          setAccount_number={setAccount_number}
          bank_name={bank_name}
          setBank_name={setBank_name}
          addProfile={addProfile}
        />
      </SwiperSlide>

      <SwiperSlide>
        <References
          id={id}
          swipe={swipe}
          referenceFirstName={referenceFirstName}
          setReferenceFirstName={setReferenceFirstName}
          referenceSurname={referenceSurname}
          setReferenceSurname={setReferenceSurname}
          referenceEmail={referenceEmail}
          setReferenceEmail={setReferenceEmail}
          referencePhone={referencePhone}
          setReferencePhone={setReferencePhone}
          referenceOrganisation={referenceOrganisation}
          setReferenceOrganisation={setReferenceOrganisation}
          referenceJobTitle={referenceJobTitle}
          setReferenceJobTitle={setReferenceJobTitle}
          addReference={addReference}
          setShowPopup={setShowPopup}
          showPopup={showPopup}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProfileSlider;
