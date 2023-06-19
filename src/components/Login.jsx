import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setStoredToken }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:3000/api/v1/login", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem("token", data.jwt);
          setStoredToken(data.jwt);
          navigate("/");
        } else {
          alert("Invalid credentials");
        }
      });

    setUsername("");

    setPassword("");
  };
  return (
    <div className="App">
      <h1 className="text-center font-bold font-quicksand uppercase text-4xl ">
        Welcome back to Nessvie!
      </h1>
      <form className="flex flex-col shadow-lg border mx-48 p-10">
        <label className="font-quicksand ">
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
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="mt-10"
          />
        </label>
        <button
          onClick={handleSubmit}
          className="selector w-20 mt-10 text-white font-quicksand"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
