import { useState } from "react";
import Professionals from "./pages/Professionals";
import Organizations from "./pages/Organizations";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/organizations" element={<Organizations />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
