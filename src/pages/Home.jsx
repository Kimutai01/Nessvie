import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ profile }) => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/profiles", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProfiles(data);
      });
  }, []);

  return (
    <div className="">
      {profile ? (
        <>
          {/* <button>
            <a href="/profile">View Profile</a>
          </button> */}
          {/* <button className="selector text-white p-2 ml-10 rounded-xl text-center">
            view jobs
          </button> */}
          <div className="grid grid-cols-2 md:grid-cols-4">
            {profiles?.map((profil) => {
              return (
                <div key={profil.id} className="col-span-2 md:col-span-1">
                  <img
                    className="w-20 h-20 rounded-full"
                    src={profil.image}
                    alt=""
                  />

                  <p className="text-center">{profil.name}</p>

                  <p className="text-center">{profil.email}</p>

                  <p className="text-center">{profil.phone}</p>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <button className="selector text-white p-2 ml-10 rounded-xl">
          <Link to="/profile">Create profile</Link>
        </button>
      )}
    </div>
  );
};

export default Home;
