import React, { useEffect, useState } from "react";

const Admin = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const response = await fetch("http://localhost:3000/profiles", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      const data = await response.json();
      setProfiles(data.profiles);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Profiles Not Displayed:</h2>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <h3>{profile.full_name}</h3>
            <p>Email: {profile.email}</p>
            {/* Display other profile details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
