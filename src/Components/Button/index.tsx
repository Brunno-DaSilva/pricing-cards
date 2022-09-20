import React from "react";
import "./useMainButtonStyles.css";

function MainButton({ name, highlight }) {
  return (
    <div className="MainButton">
      <button
        type="button"
        className={highlight ? "isHighlight" : "noHighlight"}
      >
        {name}
      </button>
    </div>
  );
}

export default MainButton;
