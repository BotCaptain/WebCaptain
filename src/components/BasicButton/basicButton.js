import React from "react";
import "../MainButton/button.css";

const BasicButton = (props) => {
  return (
      <button
        className="button"
        onClick={props.onClick}
        style={{ backgroundColor: props.color }}
      >
        {props.text}
      </button>
  );
};
export default BasicButton;
