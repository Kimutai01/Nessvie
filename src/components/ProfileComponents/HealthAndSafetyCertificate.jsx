import React from "react";

const HealthAndSafetyCertificate = ({
  Health_and_safety_certificate,
  setHealth_and_safety_certificate,
  swipeBack,
  addProfile,
}) => {
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
      <div className="h-[200px] w-[200px] rounded-full bg-gray-100 mb-4">
        <img
          src={Health_and_safety_certificate || "/gif.png"}
          className="h-full w-full object-cover rounded-full"
          alt="Manual Handling Certificate"
        />
      </div>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        id="uploadHealthAndSafetyCertificate"
        onChange={(e) => uploadImageHealthCertificate(e.target.files)}
      />
      <label
        htmlFor="uploadHealthAndSafetyCertificate"
        className="w-[312px] h-[41px] flex justify-center items-center  bg-[#47B7EF]"
        style={{
          borderRadius: "8px",

          cursor: "pointer",
        }}
      >
        Upload Photo
      </label>

      <button
        className="selector mt-8  w-24"
        type="button"
        onClick={(e) => {
          if (Health_and_safety_certificate) {
            addProfile(e);
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
