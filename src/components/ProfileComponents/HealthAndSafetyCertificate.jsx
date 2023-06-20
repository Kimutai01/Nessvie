import React from "react";
import { useNavigate } from "react-router-dom";

const HealthAndSafetyCertificate = ({
  Health_and_safety_certificate,
  setHealth_and_safety_certificate,
  swipeBack,
  addProfile,
}) => {
  const navigate = useNavigate();
  const uploadImageHealthCertificate = (files) => {
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    fetch("https://api.cloudinary.com/v1_1/dakiak4mc/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setHealth_and_safety_certificate(data.secure_url);
      });
  };

  console.log(HealthAndSafetyCertificate);

  return (
    <div className="flex flex-col items-center h-[100vh] justify-center">
      <h1>Add your Health and Safety Certificate</h1>
      {/* <div className="h-[200px] w-[200px] rounded-full bg-gray-100 mb-4">
        <img
          src={Health_and_safety_certificate || "/gif.png"}
          className="h-full w-full object-cover rounded-full"
          alt="Manual Handling Certificate"
        />
      </div> */}
      <div className="file-upload-container">
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id="uploadManualHandlingCertificate"
          onChange={(e) => uploadImageHealthCertificate(e.target.files)}
        />
        <label
          htmlFor="uploadManualHandlingCertificate"
          className="file-upload-label flex outline items-center border border-gray-300 rounded px-4 py-2 bg-white hover:bg-gray-100 cursor-pointer"
        >
          <input
            type="text"
            className="file-upload-input focus:outline-none text-gray-700"
            placeholder="Upload Photo"
            readOnly
          />
          <BsCamera size={25} className="mr-2" />
        </label>
      </div>

      <button
        className="selector mt-8  w-24"
        type="button"
        onClick={(e) => {
          if (Health_and_safety_certificate) {
            addProfile(e);
            navigate("/");
          } else {
            alert("Please upload your Health and Safety Certificate");
          }
        }}
      >
        Add Profile
      </button>

      <button
        className="selector mt-8  w-24"
        type="button"
        onClick={() => {
          swipeBack();
        }}
      >
        Back
      </button>
    </div>
  );
};

export default HealthAndSafetyCertificate;
