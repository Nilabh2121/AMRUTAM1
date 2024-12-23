import React from "react";
import "./Profilepage.css";
import "../Homepage/Homepage.css";
import Navbar from "../Navbar/Navbar";
import Profile2 from "../../img/Profile2.svg";
import Bg from "../../img/Background2.svg";
import verified from "../../img/tick.svg";
import insta from "../../img/Instagram.svg";
import youtube from "../../img/Youtube.svg";
import twitter from "../../img/Twitter.svg";
import facebook from "../../img/Facebook.svg";
import Health from "../../img/Womenhealth.svg";
import skincare from "../../img/Skincare.svg";
import immunity from "../../img/Immunity.svg";
import haircare from "../../img/Haircare.svg";
import Hospital from "../../img/Hospital.svg";
import Customerprofile from "../../img/Customerprofile.svg";
import Calender from "../../img/Calender.svg";
import lefticon from "../../img/lefticon.svg";
import righticon from "../../img/righticon.svg";
import tick2 from "../../img/tick2.svg";

const ProfilePage = () => {
  return (
    <div className="Profile">
      {/* Navbar */}
      <Navbar />

      <div className="profile-page">
        {/* Profile Section */}
        <div className="profile-container">
          <div className="profile-bg">
            <img src={Bg} alt="Profile Background" />
          </div>
          <div className="profile-header">
            <div className="doctor-info">
              <img
                src={Profile2}
                alt="Doctor Profile"
                className="doctor-image1"
              />
            </div>
            <div className="doctor-details">
              <h2>
                Dr. Bruce Willis{" "}
                <span className="verified">
                  <img src={verified} />
                </span>
              </h2>
              <p className="Gyno">Gynecologist</p>
              <div className="ratings">
                4.5{" "}
                <span className="stars">&#9733; &#9733; &#9733; &#9733;</span>
              </div>
            </div>
            <div className="followers">
              <div>
                <span className="label">Followers</span>
                <span className="value">850</span>
              </div>
              <div>
                <span className="label">Followings</span>
                <span className="value">18K</span>
              </div>
              <div>
                <span className="label">Posts</span>
                <span className="value">250</span>
              </div>
            </div>
            <div>
              <button className="appointment-button">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}

        <div className="profile-main-content">
          {/* Left Section */}
          <div className="left-section">
            {/* About Section */}
            <div className="about-section">
              <div className="header-container">
                <h3>A Little About Me</h3>
                <button className="follow-button">
                  <span>Follow</span>+
                </button>
              </div>

              <p>
                Hello, I am Dr. Bruce Willis, a Gynaecologist at Sanjivni
                Hospital, Surat. I love working with all my hospital staff and
                senior doctors. I completed my graduation in Gynaecological
                Medicine from the
              </p>

              <div className="read-more-line">
                <hr />
                <a href="#" className="read-more">
                  Read more
                </a>
              </div>

              <div className="languages">
                <h4>Languages Spoken</h4>
                <span>English</span>
                <span>Hindi</span>
                <span>Telugu</span>
              </div>

              <div className="social-icons">
                <i className="fab fa-facebook">
                  <img src={facebook} />
                </i>
                <i className="fab fa-instagram">
                  <img src={insta} />
                </i>
                <i className="fab fa-youtube">
                  <img src={youtube} />
                </i>
                <i className="fab fa-twitter">
                  <img src={twitter} />
                </i>
              </div>
            </div>

            {/* Specialization Section */}
            <div className="specialization-section">
              <h3 className="specialization-heading">I Specialize In</h3>
              <div className="specializations">
                <div className="specialization-item">
                  <div className="specialization-image">
                    <img src={haircare} alt="Women's Health" />
                  </div>
                  <span>Women’s Health</span>
                </div>
                <div className="specialization-item">
                  <div className="specialization-image">
                    <img src={immunity} alt="Skin Care" />
                  </div>
                  <span>Skin Care</span>
                </div>
                <div className="specialization-item">
                  <div className="specialization-image">
                    <img src={skincare} alt="Immunity" />
                  </div>
                  <span>Immunity</span>
                </div>
                <div className="specialization-item">
                  <div className="specialization-image">
                    <img src={Health} alt="Hair Care" />
                  </div>
                  <span>Hair Care</span>
                </div>
              </div>
            </div>

            {/* Concerns Section */}
            <div className="concerns-section">
              <h3 className="concerns-header">The Concerns I Treat</h3>
              <div className="concerns-items">
                <div className="concerns-tags">
                  <span className="concern-tag">Skin Treatment</span>
                  <span className="concern-tag">Pregnancy</span>
                  <span className="concern-tag">Period Doubts</span>
                  <span className="concern-tag">Endometriosis</span>
                </div>
                <div className="concerns-tags">
                  <span className="concern-tag">Pelvic Pain</span>
                  <span className="concern-tag">Ovarian Cysts</span>
                  <button className="more-button">
                    + <span>5 More</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Work Experience Section */}
            <div className="workexperience-section">
              <h3 className="workexperience-heading">My Work Experience</h3>
              <div className="workexperience-container">
                <div className="workexperience-para">
                  <p>I have been in practice for : 7+ years</p>
                </div>
                <div className="workexperience-line">
                  <hr />
                </div>

                <div className="workexperience-items">
                  <div className="workexperience-item">
                    <div className="workexperience-image">
                      <img src={Hospital} alt="Midtown Medical Clinic" />
                    </div>
                    <div className="workexperience-details">
                      <h4>Midtown Medical Clinic</h4>
                      <p className="workexperience-role">Senior Doctor</p>
                    </div>
                    <div className="workexperience-duration">
                      2016 - Present
                    </div>
                  </div>

                  <div className="workexperience-item">
                    <div className="workexperience-image">
                      <img src={Hospital} alt="Smith’s Hospital" />
                    </div>
                    <div className="workexperience-details">
                      <h4>Smith’s Hospital</h4>
                      <p className="workexperience-role">Senior Doctor</p>
                    </div>
                    <div className="workexperience-duration duration2">
                      2010 - 2015
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="reviews-section">
              <h3 className="reviews-heading">Featured Reviews (102)</h3>
              <div className="reviews-container">
                {/* Review 1 */}
                <div className="review">
                  <div className="profile">
                    <img
                      src={Customerprofile}
                      alt="Profile"
                      className="profile-image"
                    />
                    <div className="profile-details">
                      <h4>Alicent HighTower</h4>
                      <p>Consulted for Skin Care</p>
                    </div>
                    <p className="review-date">20 January 2023</p>
                  </div>
                  <div className="customer-review">
                    <div className="stars">
                      &#9733; &#9733; &#9733; &#9733; &#9733;
                    </div>
                    <p>
                      It might be a bit early to confirm, but yes, I can see a
                      noticeable difference in my skin. I will write again after
                      using it for a longer period.
                    </p>
                  </div>
                </div>

                {/* Review 2 */}
                <div className="review">
                  <div className="profile">
                    <img
                      src={Customerprofile}
                      alt="Profile"
                      className="profile-image"
                    />
                    <div className="profile-details">
                      <h4>Rhaenyra Targaryen</h4>
                      <p>Consulted for Hair Treatment</p>
                    </div>
                    <p className="review-date">15 December 2022</p>
                  </div>
                  <div className="customer-review">
                    <div className="stars">
                      &#9733; &#9733; &#9733; &#9733; &#9733;
                    </div>
                    <p>
                      It might be a bit early to confirm, but yes, I can see a
                      noticeable difference in my hair fall. I will write again
                      after using it for a longer period.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="right-section">
            {/* Appointment Section */}
            <div className="appointment-section">
              {/* First Div: Appointment Fee */}
              <div className="appointment-fee">
                <h3>Appointment Fee</h3>
                <p className="fee">₹699.00</p>
              </div>

              {/* Second Div: Session Modes */}
              <div className="session-modes-section">
                <div className="session-header">
                  <h4>Select Your mode of session</h4>
                  <div className="line"></div>
                </div>
                <div className="session-options">
                  <div className="session">
                    <p>In-Clinic</p>
                    <span>45 Mins</span>
                  </div>
                  <div className="session video">
                    <p>
                      Video{" "}
                      <img src={tick2} alt="tick icon" className="tick-icon" />
                    </p>
                    <span>45 Mins</span>
                  </div>
                  <div className="session">
                    <p>Chat</p>
                    <span>10 Mins</span>
                  </div>
                </div>
              </div>

              {/* Third Div: Pick a Time Slot */}
              <div className="time-slot-section">
                <div className="time-slot-header">
                  <h4>Pick a time Slot</h4>
                  <div className="line1">
                    <hr />
                  </div>
                  <div className="calendar-icon">
                    <img src={Calender} alt="calender" />
                  </div>
                </div>
                <div className="time-slots">
                  <button className="prev-icon">
                    <img src={righticon} alt="prev" />
                  </button>

                  {/* Mon, 10 Oct Slot */}
                  <div className="slot mon">
                    <p>Mon, 10 Oct</p>
                    <div className="slottimes">
                      <span>10 Slots</span>
                    </div>
                  </div>

                  {/* Tue, 11 Oct Slot */}
                  <div className="slot tue">
                    <p>Tue, 11 Oct</p>
                    <div className="slottimes">
                      <span>02 Slots</span>
                    </div>
                  </div>

                  {/* Wed, 12 Oct Slot */}
                  <div className="slot wed">
                    <p>Wed, 12 Oct</p>
                    <div className="slottimes">
                      <span>05 Slots</span>
                    </div>
                  </div>

                  <button className="next-icon">
                    <img src={lefticon} alt="next" />
                  </button>
                </div>
              </div>

              {/* Fourth Div: Morning and Evening Slots */}
              <div className="day-slots">
                <div className="morning">
                  <h4>Morning</h4>
                  <div className="time-conatiner">
                    <span className="times">9:00 AM</span>
                    <span className="times">9:30 AM</span>
                    <span className="times">10:00 AM</span>
                    <span className="times">10:15 AM</span>
                    <span className="times">10:45 AM</span>
                    <span className="times highlight">11:00 AM</span>
                  </div>
                </div>
                <div className="evening">
                  <h4>Evening</h4>
                  <div className="time-conatiner">
                    <span className="times">4:00 PM</span>
                    <span className="times">4:15 PM</span>
                    <span className="times">4:30 PM</span>
                    <span className="times">4:45 PM</span>
                    <span className="times">5:15 PM</span>
                  </div>
                </div>
              </div>

              {/* Fifth Div: Book Appointment Button */}
              <div className="book-appointment">
                <button>Make an Appointment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
