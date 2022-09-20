import React from "react";
import "./useCardInfoStyles.css";

function CardInfo({ storage, sendData, allowedUsers, highlight }) {
  return (
    <div className="CardInfo">
      <div className="CardInfo__storage">
        <span className={highlight ? "mainCardText" : "sideCardsText"}>
          {storage} Storage
        </span>
      </div>
      <div className="CardInfo__users_allowed">
        <span className={highlight ? "mainCardText" : "sideCardsText"}>
          {allowedUsers} Users Allowed
        </span>
      </div>
      <div className="CardInfo__send_data">
        <span className={highlight ? "mainCardText" : "sideCardsText"}>
          Send up to {sendData}
        </span>
      </div>
    </div>
  );
}

export default CardInfo;
