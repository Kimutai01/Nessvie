import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ storedToken, setStoredToken }) => {
  const navigate = useNavigate();

  return (
    <div className="selector flex items-center justify-between md:px-10  py-2">
      <div>
        <img src="/lo.png" alt="logo" className="" />
      </div>
      <div className="font-quicksand font-bold text-sm bg-white rounded-lg">
        {storedToken ? (
          <button
            onClick={() => {
              localStorage.removeItem("token");
              setStoredToken("");
              navigate("/");
            }}
            className="px-4 py-2"
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">
              <button className="uppercase rounded-lg h-full px-4 py-2 text-white selector">
                log in
              </button>
            </Link>
            <Link to="/register">
              <button className="uppercase px-4 py-2">Register</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
