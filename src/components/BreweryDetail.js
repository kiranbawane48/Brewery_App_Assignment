import React, { useState } from 'react';

function BreweryDetail() {
  const [reviewRating, setReviewRating] = useState(1);
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);

  const addReview = () => {
    // Implement logic to add a review (including rating and text) to the state.
    // You'll later save this data to your database.
  }

  return (
    <div>
      <h1>Brewery Details</h1>
      {/* Display detailed information about the brewery here */}
      <div>
      <h2>Add a Review</h2>
        <select value={reviewRating} onChange={(e) => setReviewRating(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <textarea
          placeholder="Write your review here"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <button onClick={addReview}>Submit Review</button>
      </div>
      <div>
        {/* Display existing reviews here */}
      </div>
    </div>
);
}

export default BreweryDetail;
