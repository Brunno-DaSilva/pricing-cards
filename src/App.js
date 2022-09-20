import React, { useState } from "react";
import MainCard from "./Components/MainCard/index.tsx";
import PRICING_DATA from "./assets/data/data";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="title">
        <h1>Our Pricing</h1>
      </div>
      <div className="toggle_period">
        <span>Annually</span>
        <span>Toggle</span>
        <span>Monthly</span>
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
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
