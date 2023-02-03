import React from "react";
import "./navigationButton.css";
import { Link } from "react-router-dom";

const NavigationButton = (props) => {
  let formattedScreenRoute =
    props.text === "Home"
      ? "/"
      : `/${props.text
          .trim()
          .toLowerCase()
          .replace(/\s/g, "")}`;

    return (
      <Link to={formattedScreenRoute}>
        <button className="nav-button" onClick={props.onClick} style={{ backgroundColor: props.color }}>
          {props.text}
        </button>
    </Link>
  );
};
export default NavigationButton;
