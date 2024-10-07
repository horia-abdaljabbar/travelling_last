import React from "react";
import "../offers/offers.css";

const OfferCard = ({ image, title, description, offer }) => {
  return (
    <div className="offer-card">
      <img src={image} alt={title} className="offer-image" />
      <div className="offer-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="offer-details">
          <span className="offer-price" style={{ }}>{offer}</span>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
