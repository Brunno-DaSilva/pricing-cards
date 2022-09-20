import React from "react";
import PricingCard from "../PricingCard/index.tsx";
import Title from "../Title/index.tsx";
import CardInfo from "../CardInfo/index.tsx";
import MainButton from "../Button/index.tsx";

import "./useMainCardStyles.css";

function MainCard({
  id,
  title,
  price,
  storage,
  allowedUsers,
  sendData,
  highlight,
}) {
  return (
    <div
      key={id}
      className={
        id === 1
          ? "card__sideCards left_card_border_radius"
          : id === 2
          ? "card__main"
          : "card__sideCards right_card_border_radius"
      }
    >
      <Title title={title} highlight={highlight} />
      <PricingCard price={price} highlight={highlight} />
      <CardInfo
        storage={storage}
        allowedUsers={allowedUsers}
        sendData={sendData}
        highlight={highlight}
      />
      <MainButton name="LEARN MORE" highlight={highlight} />
    </div>
  );
}

export default MainCard;
