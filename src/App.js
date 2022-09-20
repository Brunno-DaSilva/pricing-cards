import React, { useState } from "react";
import MainCard from "./Components/MainCard/index.tsx";
import PRICING_DATA from "./assets/data/data";
import "./App.css";

function App() {
  const [isPriceYearly, setIsPriceYearly] = useState(true);

  const handleToggle = () => {
    setIsPriceYearly((prevMode) => !prevMode);
  };

  return (
    <div className="app">
      <div className="title">
        <h1>Our Pricing</h1>
      </div>
      <div className="toggle_period">
        <p>Annually</p>

        <label className="switch">
          <input type="checkbox" />
          <span
            className="slider round"
            onClick={() => {
              handleToggle();
            }}
          ></span>
        </label>

        <p>Monthly</p>
      </div>
      <div className="cards">
        {PRICING_DATA.map(
          ({
            id,
            title,
            price,
            storage,
            allowedUsers,
            sendData,
            highlight,
            priceMonthly,
          }) => (
            <MainCard
              key={id}
              id={id}
              title={title}
              price={price}
              storage={storage}
              allowedUsers={allowedUsers}
              sendData={sendData}
              highlight={highlight}
              priceMonthly={priceMonthly}
              isPriceYearly={isPriceYearly}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
