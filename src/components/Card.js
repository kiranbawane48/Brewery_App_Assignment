// Card.js
import React from "react";
import "./Card.css";

const Card = ({ brewery }) => {
  return (
    <div className="card">
      <h3 className="brewery-name">{brewery.name}</h3>
      <p className="brewery-type">{brewery.brewery_type}</p>
      <p className="brewery-address">{brewery.address_1}</p>
      <p className="brewery-city">{brewery.city}, {brewery.state_province}</p>
      <p className="brewery-country">{brewery.country}</p>
      <p className="brewery-website">
        <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">
          Visit Website
        </a>
      </p>
    </div>
  );
};

export default Card;
