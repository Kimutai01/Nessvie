import React from "react";
import { BsCamera } from "react-icons/bs";

const ManualHandlingCertificate = ({
  setManual_handling_certificate,
  Manual_handling_certificate,

  setFirst_aid_certificate,
  first_aid_certificate,
  setFood_hygiene_certificate,
  food_hygiene_certificate,
  setFire_safety_certificate,
  fire_safety_certificate,
  setHealth_and_safety_certificate,
  Health_and_safety_certificate,
  addProfile,
  swipe,
  swipeBack,
}) => {
  const uploadImageHandlingCertificate = (files) => {
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    fetch("https://api.cloudinary.com/v1_1/dakiak4mc/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setManual_handling_certificate(data.secure_url);
      });
  };

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

  const uploadImageFireCertificate = (files) => {
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    fetch("https://api.cloudinary.com/v1_1/dakiak4mc/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setFire_safety_certificate(data.secure_url);
      });
  };

  const uploadImageFoodHygieneCertificate = (files) => {
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    fetch("https://api.cloudinary.com/v1_1/dakiak4mc/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setFood_hygiene_certificate(data.secure_url);
      });
  };

  const uploadImageFirstAidCertificate = (files) => {
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    fetch("https://api.cloudinary.com/v1_1/dakiak4mc/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setFirst_aid_certificate(data.secure_url);
      });
  };

  return (
    <div className="flex flex-col items-center h-[100vh] justify-center">
      <div className="file-upload-container">
        <h2>Add your Manual Handling Certificate</h2>

        <input
          type="file"
          accept="image/"
          style={{ display: "none" }}
          id="uploadManualHandlingCertificate"
          onChange={(e) => uploadImageHandlingCertificate(e.target.files)}
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
        {Manual_handling_certificate && (
          <div className="mt-2">
            <h3>Uploaded Manual Handling Certificate:</h3>
          </div>
        )}
      </div>
      <div className="file-upload-container mt-5">
        <h2>Add health and safety certificate</h2>
        <input
          type="file"
          accept="image/"
          style={{ display: "none" }}
          id="uploadHealthSafetyCertificate"
          onChange={(e) => uploadImageHealthCertificate(e.target.files)}
        />
        <label
          htmlFor="uploadHealthSafetyCertificate"
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
        {Health_and_safety_certificate && (
          <div className="mt-2">
            <h3>Uploaded Health and Safety Certificate:</h3>
          </div>
        )}
      </div>
      <div className="file-upload-container mt-5">
        <h2>Add first aid certificate</h2>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id="uploadFirstAidCertificate"
          onChange={(e) => uploadImageFirstAidCertificate(e.target.files)}
        />
        <label
          htmlFor="uploadFirstAidCertificate"
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
        {first_aid_certificate && (
          <div className="mt-2">
            <h3>Uploaded First Aid Certificate:</h3>
          </div>
        )}
      </div>
      <div className="file-upload-container mt-5">
        <h2>Add food hygiene certificate</h2>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id="uploadFoodHygieneCertificate"
          onChange={(e) => uploadImageFoodHygieneCertificate(e.target.files)}
        />
        <label
          htmlFor="uploadFoodHygieneCertificate"
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
        {food_hygiene_certificate && (
          <div className="mt-2">
            <h3>Uploaded Food Hygiene Certificate:</h3>
          </div>
        )}
      </div>
      <button
        className="selector mt-8  w-24"
        type="button"
        onClick={() => {
          swipe();
        }}
      >
        Next
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

export default ManualHandlingCertificate;
