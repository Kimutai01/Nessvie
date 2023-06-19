import React from "react";

const ManualHandlingCertificate = ({
  setManual_handling_certificate,
  Manual_handling_certificate,
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
  console.log(Manual_handling_certificate);

  return (
    <div className="flex flex-col items-center h-[100vh] justify-center">
      <h1>Add your Manual Handling Certificate</h1>
      <div className="h-[200px] w-[200px] rounded-full bg-gray-100 mb-4">
        <img
          src={Manual_handling_certificate || "/gif.png"}
          className="h-full w-full object-cover rounded-full"
          alt="Manual Handling Certificate"
        />
      </div>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        id="uploadManualHandlingCertificate"
        onChange={(e) => uploadImageHandlingCertificate(e.target.files)}
      />
      <label
        htmlFor="uploadManualHandlingCertificate"
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
        onClick={() => {
          if (Manual_handling_certificate) {
            swipe();
          } else {
            alert("Please upload your Manual Handling Certificate");
          }
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
