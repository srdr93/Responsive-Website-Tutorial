import React from "react";
import "./info.css";
import { studentIcon, videoIcon, bgElement2 } from "../../assets";

const Info = () => {
  return (
    <section id="info" className="dark-gray">
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <img src={studentIcon} alt="" />
            <div className="amount">23,000</div>
            <div className="type">Students</div>
          </div>

          <div className="info-content">
            <img src={videoIcon} alt="" />
            <div className="amount">26 Hrs</div>
            <div className="type">Video Content</div>
          </div>

          <img className="bg-element-2" src={bgElement2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Info;
