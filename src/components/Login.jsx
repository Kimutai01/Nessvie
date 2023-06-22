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
    <div className="flex flex-col justify-center items-center h-[30.5rem] gap-10">
      <h1 className="text-center font-bold font-quicksand uppercase text-4xl ">
        Welcome back to Nessvie!
      </h1>
      <form className="shadow-lg border py-10 md:px-40 px-12 font-quicksand">
      <div className="flex md:flex-row flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label> Username: </label>
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
          <label>Password: </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="border border-gray-300 py-1 px-2 rounded"
            />
        </div>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <button
            onClick={handleSubmit}
            className="selector px-4 py-2 text-white font-quicksand"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
