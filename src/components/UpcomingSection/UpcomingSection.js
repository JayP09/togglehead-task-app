import React from "react";
import "./UpcomingSection.css";
import Slider from "../Slider/Slider";

const UpcomingSection = () => {
  return (
    <section className="upcomingContainer">
      <div className="upcomingInfo">
        <div className="upcomingInfoContent">
          <h1>Upcoming Examinations</h1>
          <p>Enquire about the examination & register for the exams</p>
        </div>
        <div className="divider"></div>
        <div className="upcomingExamContainer">
          <div className="upcomingExam">
            <i
              className="fa-regular fa-calendar"
              style={{ color: "#12406f" }}
            ></i>
            <div className="examDetails">
              <h3>02nd October 2014</h3>
              <p>Level 1 exam</p>
            </div>
          </div>
          <div className="upcomingExam">
            <i
              className="fa-regular fa-calendar"
              style={{ color: "#12406f" }}
            ></i>
            <div className="examDetails">
              <h3>Nov-Dec 2016</h3>
              <p>Level 2</p>
            </div>
          </div>
          <div className="upcomingExam">
            <i
              className="fa-regular fa-calendar"
              style={{ color: "#12406f" }}
            ></i>
            <div className="examDetails">
              <h3>Ongoing this year</h3>
              <p>Level 3 (Grad)</p>
            </div>
          </div>
        </div>
      </div>
      <Slider />
    </section>
  );
};

export default UpcomingSection;
