import React from "react";
import "./Homepage.css";
import DP from "../../img/profilepic1.svg";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Pin from "../../img/pin.svg";
import hat from "../../img/hat.svg";
import comment from "../../img/comment.svg";
import location from "../../img/location.svg";
import forwardarrow from "../../img/arrowforward.svg";
import downarrow from "../../img/downarrowicon.svg";
import cross from "../../img/cross.svg";

function Homepage() {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="homepage">
      {/* Navbar Section */}
      <Navbar />

      {/* Banner Section */}
      <div className="banner-section">
        <h3>Find Expert Doctors For An In-Clinic Session Here</h3>
        <div className="filter-header">
          <div className="dropdown-container">
            <span className="icon1 location-icon">
              <img src={location} alt="Location" />
            </span>
            <select className="banner-dropdown">
              <option className="dropdown-text">Select Location</option>
            </select>
            <div className="dropdown-icon-container">
              <img src={downarrow} alt="dropdown" className="dropdown-icon" />
            </div>
          </div>
          <div className="search-container">
            <input
              type="text"
              className="search-bar"
              placeholder="eg. Doctor, specialisation, clinic name"
            />
            <span className="icon1 forward-arrow-icon">
              <img src={forwardarrow} alt="Forward Arrow" />
            </span>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="filter-section">
        <div className="filters">
          <select className="filter-dropdown">
            <option>Expertise</option>
          </select>
          <select className="filter-dropdown">
            <option>Gender</option>
          </select>
          <select className="filter-dropdown">
            <option>Fees</option>
          </select>
          <select className="filter-dropdown">
            <option>Languages</option>
          </select>
          <select className="filter-btn">
            <option>All Filters</option>
          </select>
        </div>
      </div>

      {/* Tags Section */}
      <div className="tags-section">
        <div className="tag">
          Hair Care
          <img src={cross} alt="cross" className="crossbtn" />
        </div>
        <div className="tag">
          Female <img src={cross} alt="cross" className="crossbtn" />
        </div>
        <div className="tag">
          Rs.0-Rs.500 <img src={cross} alt="cross" className="crossbtn" />
        </div>
        <div className="tag">
          Hindi <img src={cross} alt="cross" className="crossbtn" />
        </div>
      </div>

      {/* Doctor List Section */}
      <div className="doctor-list">
        {["Dr. Prerna Narang", "Dr. Prerna Narang", "Dr. Prerna Narang"].map(
          (name, index) => (
            <div key={index} className="doctor-card">
              <img src={DP} alt="Doctor" className="doctor-image" />
              <div className="doctor-rating">
                4.5 <span className="stars">&#9733;</span>
              </div>
              <h3 className="doctor-name">{name}</h3>
              <div className="para-container">
                <p className="doctor-expertise">
                  <span className="icon">
                    <img src={Pin} alt="pin" />
                  </span>{" "}
                  Male-Female Infertility
                </p>
                <p className="doctor-experience">
                  <span className="icon hat-icon">
                    <img src={hat} alt="hat" />
                  </span>{" "}
                  7 Years of Experience
                </p>
                <p className="doctor-languages">
                  <span className="icon">
                    <img src={comment} alt="comment" />
                  </span>{" "}
                  Speaks: English, Hindi, Marathi
                </p>
              </div>

              <div className="doctor-fees">
                <div className="consultation-box">
                  <p>Video Consultation</p>
                  <p className="pricing">₹800</p>
                </div>
                <div className="consultation-box">
                  <p>Chat Consultation</p>
                  <p className="pricing">Free</p>
                </div>
              </div>
              <button className="view-profile-btn" onClick={handleViewProfile}>
                View Profile
              </button>
              <button className="book-btn">Book a Consultation</button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Homepage;
