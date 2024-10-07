import React ,{useEffect}from 'react';
import './cards.css';


const BenefitCard = ({image,title}) => {

  return (
    <div className="benefit-card"  >
      <img src={image} alt={title} className="offer-image" style={{width: "50px",height:"50px"}}/>
      <h4>{title}</h4>
    </div>
  );
}

export default BenefitCard;
