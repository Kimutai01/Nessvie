import React, { useEffect, useState } from "react";

const Admin = () => {
  const [profiles, setProfiles] = useState([]);
  const [approvedProfiles, setApprovedProfiles] = useState([]);

  useEffect(() => {
    fetchProfiles();
    console.log(profiles);
  }, [profiles.length]);

  const fetchProfiles = () => {
    fetch("http://127.0.0.1:3000/profiles", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())

      .then((data) => {
        setProfiles(data.filter((profile) => profile.approved === false));
        setApprovedProfiles(
          data.filter((profile) => profile.approved === true)
        );
      });
  };

  const approveProfile = (id) => {
    fetch(`http://127.0.0.1:3000/profiles/${id}`, {
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
        alert("Profile approved");
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
                  <img
                    src={profile.manual_handling_certificate}
                    alt="profile"
                  />
                  <img
                    src={profile.health_and_safety_certificate}
                    alt="profile"
                  />
                  <button onClick={() => approveProfile(profile.id)}>
                    Approve
                  </button>
                </li>
              )
          )
        ) : (
          <h1>No profiles to approve</h1>
        )}

        <h1 className="text-xl font-bold text-center uppercase">
          Approved profiles
        </h1>
        {approvedProfiles.length > 0 ? (
          approvedProfiles.map(
            (profile) =>
              profile.approved === true && (
                <li key={profile.id}>
                  <h3>{profile.first_name}</h3>
                  <p>Email: {profile.email}</p>
                </li>
              )
          )
        ) : (
          <h1>No profiles approved</h1>
        )}
      </ul>
    </div>
  );
};

export default Admin;
