import React from "react";
import "./usePricingCardStyles.css";

function PricingCard({ price, priceMonthly, highlight, isPriceYearly }) {
  console.log("isPriceYearly from Pricing Card: =>", isPriceYearly);

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

        {isPriceYearly ? <span> {price}</span> : <span> {priceMonthly}</span>}
      </h2>
    </div>
  );
}

export default PricingCard;
