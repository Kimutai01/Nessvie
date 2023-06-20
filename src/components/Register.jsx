import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = ({ setStoredToken }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          email,
          password,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.jwt);
        console.log(data);
        setStoredToken(data.jwt);
        navigate("/");
      });

    setUsername("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex flex-col justify-center items-center h-full gap-10">
      <h1 className="text-center font-bold font-quicksand uppercase text-4xl ">
        Register with Nessvie!
      </h1>
      <form className="shadow-lg border py-10 md:px-40 px-12 font-quicksand flex flex-col gap-10">
      <div className="flex justify-center items-center flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label>Username: </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-300 py-1 px-2 rounded w-72"
            />
        </div>
        <div className="flex flex-col gap-2">
          <label>Email:</label>
            <input
              type="text"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 py-1 px-2 rounded w-72"
            />
        </div>
        <div className="flex flex-col gap-2">
          <label>Password: </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 py-1 px-2 rounded w-72"
            />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="selector px-4 py-2" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      </form>
      <div className="text-center flex justify-center mt-4">
        <p className="font-quicksand mb-5 ">Already have an account?</p>
        <Link to="/login" className="underline text-[#396bff] font-quicksand">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
