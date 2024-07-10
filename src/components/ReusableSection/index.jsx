import React from "react";
import "./ReusableSection.css";

const ReusableSection = ({ heading, content }) => {
  return (
    <div className="section-container">
      <div className="section-content">
        <h1 className="section-heading">{heading}</h1>
        <p className="section-text">{content}</p>
      </div>
    </div>
  );
};

export default ReusableSection;
