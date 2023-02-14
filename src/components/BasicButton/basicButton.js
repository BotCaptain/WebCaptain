import React from "react";

const BasicButton = (props) => {
  return (
      <button
        className={props.className}
        onClick={props.onClick}
        style={{ backgroundColor: props.color }}
      >
        {props.text}
      </button>
  );
};
export default BasicButton;
