import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = ({ profile }) => {
  return (
    <div className="hom">
      <h1 className="text-2xl  font-bold text-center ">
        {" "}
        Welcome to Nessvie where we bring your dream job next to you.
      </h1>

      {profile ? (
        <>
          {/* <button>
            <a href="/profile">View Profile</a>
          </button> */}
          <button className="selector text-white p-2 ml-10 rounded-xl text-center">
            view jobs
          </button>
        </>
      ) : (
        <button className="selector text-white p-2 ml-10 rounded-xl text-center">
          <Link to="/profile">Create profile</Link>
        </button>
      )}
    </div>
  );
};

export default Home;
