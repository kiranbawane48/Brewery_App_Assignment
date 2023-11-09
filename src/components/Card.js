// Card.js
import React from "react";
import "./Card.css";

const Card = ({ brewery }) => {
  return (
    <div key={brewery.id} className="card">
      <h3>{brewery.name}</h3>
      <p>{brewery.brewery_type}</p>
      <p >{brewery.address_1}</p>
      <p>name: {brewery.city}, state: {brewery.state_province}</p>
      <p className="brewery-country">{brewery.country}</p>
      <p>Phone: {brewery.phone}</p>
      <p>
        Website: <a href={brewery.website_url}>{brewery.website_url}</a>
      </p>
    </div>
  );
};

export default Card;
