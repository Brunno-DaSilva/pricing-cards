import React from "react";

import "./useTitleStyles.css";

function Title({ title, highlight }) {
  return (
    <div className="Title">
      <h3 className={highlight ? "Title__text_isPurple" : "Title__text"}>
        {title}
      </h3>
    </div>
  );
}

export default Title;
