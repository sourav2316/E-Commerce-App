import React from "react";
import "./spinner.css";
const Spinner = () => {
  return (
    <div className="loading-spinner">
      <div className="beat"></div>
      <div className="beat"></div>
      <div className="beat"></div>
    </div>
  );
};

export default Spinner;
