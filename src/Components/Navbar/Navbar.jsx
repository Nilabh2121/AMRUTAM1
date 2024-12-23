import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import LOGO from "../../img/AMRUTAMLOGO.svg";

const Navbar = () => {
  const navigate = useNavigate();

  const handleViewHome = () => {
    navigate("/");
  };

  const handleViewProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={LOGO} alt="Logo" className="logo" />
      </div>
      <div className="navbar-middle">
        <nav>
          <a href="#" className="navbar-items" onClick={handleViewHome}>
            Home 
          </a>
          <a href="#" className="boldtxt" onClick={handleViewProfile}>
            Find Doctors
          </a>
          <a href="#" className="navbar-items">
            About Us
          </a>
        </nav>
      </div>
      <div className="navbar-right">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign-up</button>
      </div>
    </div>
  );
};

export default Navbar;
