import { useState } from "react";
import { useEffect } from "react";
import Professionals from "./pages/Professionals";
import Organizations from "./pages/Organizations";
import SplashScreen from "./pages/SplashScreen";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/ProfileComponents/Profile";
import ProfileSlider from "./components/ProfileSlider";
import Admin from "./components/Admin";
import Home from "./pages/Home";

function App() {
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  const [role, setLoggedInUserRole] = useState("");
  const [id, setLoggedInUserId] = useState("");
  const [profile, setLoggedInUserProfile] = useState("");
  useEffect(() => {
    console.log(storedToken);
  }, [storedToken]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/profile ", {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoggedInUserRole(data.user.role);
        setLoggedInUserId(data.user.id);
        setLoggedInUserProfile(data.user.profile);
      });
  }, [storedToken]);

  return (
    <>
      <Navbar
        storedToken={storedToken}
        setStoredToken={setStoredToken}
        role={role}
      />
      <Routes>
        {storedToken ? (
          <>
            {role === "admin" && <Route path="/" element={<Admin />} />}
            {role === "user" && (
              <>
                <Route
                  path="/profile"
                  element={
                    <ProfileSlider
                      setLoggedInUserId={setLoggedInUserId}
                      id={id}
                    />
                  }
                />
                <Route path="/" element={<Home profile={profile} />} />
              </>
            )}
          </>
        ) : (
          <>
            <Route
              path="/login"
              element={<Login setStoredToken={setStoredToken} />}
            />
            <Route
              path="/register"
              element={<Register setStoredToken={setStoredToken} />}
            />
            <Route path="/" element={<SplashScreen />} />
            <Route path="/professionals" element={<Professionals />} />
            <Route path="/organizations" element={<Organizations />} />
          </>
        )}
      </Routes>

      {/* <Routes>
        {storedToken ? (
          (<Route path="/profile" element={<ProfileSlider />} />)(
            role === "admin" ? (
              <Route path="/" element={<Admin />} />
            ) : (
              <Route path="/profile" element={<Profile />} />
            )
          )
        ) : (
          <>
            <Route
              path="/login"
              element={<Login setStoredToken={setStoredToken} />}
            />
            <Route
              path="/register"
              element={<Register setStoredToken={setStoredToken} />}
            />
            <Route path="/" element={<Home />} />
            <Route path="/professionals" element={<Professionals />} />
            <Route path="/organizations" element={<Organizations />} />
          </>
        )}
      </Routes> */}

      <Footer />
    </>
  );
}

export default App;
