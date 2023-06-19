import React, { useEffect, useState } from "react";

const Admin = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchProfiles();
    console.log(profiles);
  }, [profiles.length]);

  const fetchProfiles = () => {
    fetch("http://localhost:3000/profiles", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())

      .then((data) => {
        setProfiles(data.filter((profile) => profile.approved === false));
      });
  };

  const approveProfile = (id) => {
    fetch(`http://localhost:3000/profiles/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({
        approved: true,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchProfiles();
      });
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <ul>
        {profiles.length > 0 ? (
          profiles.map(
            (profile) =>
              profile.approved === false && (
                <li key={profile.id}>
                  <h3>{profile.first_name}</h3>
                  <p>Email: {profile.email}</p>
                  <button onClick={() => approveProfile(profile.id)}>
                    Approve
                  </button>
                </li>
              )
          )
        ) : (
          <h1>No profiles to approve</h1>
        )}
      </ul>
    </div>
  );
};

export default Admin;
