import React from "react";

import "./usePricingCardStyles.css";

function PricingCard({ price, highlight }) {
  return (
    <div className="PricingCard">
      <h2
        className={
          highlight ? "PricingCard__main_text" : "PricingCard__side_text"
        }
      >
        <span
          className={
            highlight
              ? "PricingCard__main_dollar_sign"
              : "PricingCard__side_dollar_sign"
          }
        >
          $
        </span>
        <span>{price}</span>
      </h2>
    </div>
  );
}

export default PricingCard;
