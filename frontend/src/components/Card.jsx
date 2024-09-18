import React from "react";
import "./card.css";

const Card = ({ pro }) => {
  return (
    <>
      <div className="card-container">
        <div className="img-cont">
          <img src={pro.image} alt={pro.title} className="card-img" />
          <span className="card-cat">{pro.category}</span>
        </div>
        <div className="card-content">
          <h3 className="card-title">{pro.title}</h3>
        </div>
        <div className="botton-info">
          <span className="card-price">PRICE : ${pro.price}</span>
          <span className="card-price">RATING : {pro.rating.rate}⭐</span>
        </div>
        <button type="button" className="card-btn">
          ADD TO CART
        </button>
      </div>
    </>
  );
};

export default Card;
