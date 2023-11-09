// BreweryDetail.js

import React, { useState } from 'react';
import './BreweryDetail.css'; // Import the CSS file

function BreweryDetail() {
  const [reviewRating, setReviewRating] = useState(1);
  const [reviewText, setReviewText] = useState('');
  // const [reviews, setReviews] = useState([]);

  const addReview = () => {
    // Implement logic to add a review 
    //  save this data to your database.
  };

  return (
    <div className="brewery-detail-box">
      <h1>Brewery Details</h1>
      {/* Display detailed information about the brewery here */}
      <div className="add-review-section">
        <h2>Add a Review</h2>
        <select value={reviewRating} onChange={(e) => setReviewRating(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <textarea
          className="review-textarea"
          placeholder="Write your review here"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <button className="submit-review-button" onClick={addReview}>
          Submit Review
        </button>
      </div>
      <div className="existing-reviews-section">
        {/* Display existing reviews here */}
      </div>
    </div>
  );
}

export default BreweryDetail;
