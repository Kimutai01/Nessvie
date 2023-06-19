import React, { useState } from "react";

const Documents = () => {
  const handleFileUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("upload[file]", e.target.file.files[0]);
    formData.append("upload[title]", e.target.title.value);
    console.log(formData);
    submitData(formData);
  };

  const submitData = (data) => {
    fetch("http://localhost:3000/uploads", {
      method: "POST",
      body: data,

      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h1>Documents</h1>

      <form onSubmit={handleFileUpload}>
        <input type="file" name="file" />
        <input type="text" name="title" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Documents;
