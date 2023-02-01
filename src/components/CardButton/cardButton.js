import React from "react";
import "./cardButton.css";
import { Link } from "react-router-dom";


const CardButton = (props) => {
  const {title, route, color} = props

  let formattedScreenRoute =
  route === "Home"
    ? "/"
    : `/${route
        .trim()
        .toLowerCase()
        .replace(/\s/g, "")}`;

    return (
      <Link to={formattedScreenRoute}>
        <button 
        className="card-button shadow"
        style={{ backgroundColor: color }}>
          <h3>{title}</h3>
        </button>
    </Link>)

};
export default CardButton;
