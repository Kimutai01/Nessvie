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

    fetch("http://127.0.0.1:3000/api/v1/users", {
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
    <>
      <form className="flex shadow-lg justify-between mx-40 p-10 my-20 flex-col font-quicksand">
        <label>
          Username:
          <input
            type="text"
            name="name"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="selector w-24" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <div className="text-center mb-10">
        <p className="font-quicksand mb-5 ">Already have an account?</p>
        <Link to="/login" className="selector font-quicksand w-28  p-2">
          Login
        </Link>
      </div>
    </>
  );
};

export default Register;
