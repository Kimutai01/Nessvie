import React from "react";

const Navbar = () => {
  return (
    <div className="selector flex items-center justify-between md:px-10  py-2">
      <div>
        <img src="/lo.png" alt="logo" className="" />
      </div>
      <div className="font-quicksand font-bold text-sm bg-[#fff] h-6 rounded-lg">
        <button className="uppercase rounded-lg h-full px-2 text-[#fff] selector">
          log in
        </button>
        <button className="uppercase px-2">Register</button>
      </div>
    </div>
  );
};

export default Navbar;
