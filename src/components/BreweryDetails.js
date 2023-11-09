// src/components/BreweryDetails.js
import React, { useState, useEffect } from "react";

function BreweryDetails({ breweryId, user }) {
  const [brewery, setBrewery] = useState({});
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);

  const submitReview = () => {
    // Submit the review to the backend
  };

  return (
    <div>
      <h2>{brewery.name}</h2>
      <p>{brewery.city}</p>
      <div>
        <h3>Reviews</h3>
        {user && (
          <div>
            <textarea
              placeholder="Write a review"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
            <button onClick={submitReview}>Submit Review</button>
          </div>
        )}
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>{review.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BreweryDetails;
