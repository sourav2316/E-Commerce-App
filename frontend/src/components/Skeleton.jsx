import React from "react";

const Skeleton = () => {
  return (
    <div className="card-container">
      <div className="img-cont">
        <div className="skeleton skeleton-img"></div>
      </div>
      <div className="card-content">
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-text"></div>
      </div>
      <div className="botton-info">
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
      </div>
      <div className="skeleton skeleton-btn"></div>
    </div>
  );
};

export default Skeleton;
